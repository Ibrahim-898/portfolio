import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
  origin: [
    'http://localhost:3000',
    process.env.CLIENT_URL
  ],
  methods: ['GET', 'POST'],
}))
//for checking
app.get('/', (req, res) => {
  res.send('Portfolio backend running 🚀')
})
// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' })
  }

  try {
    // Configure your SMTP here (example using Gmail)
    // To use this, set environment variables:
    // SMTP_USER=your@gmail.com
    // SMTP_PASS=your-app-password
    // CONTACT_TO=your@gmail.com
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.CONTACT_TO || process.env.SMTP_USER,
        subject: `Portfolio Contact: ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
            <h2 style="color:#1a6fff">New Portfolio Contact</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background:#f5f5f5;padding:16px;border-radius:8px;white-space:pre-wrap">${message}</p>
          </div>
        `,
      })
    }

    console.log(`Contact form submission from: ${name} <${email}>`)
    console.log(`Message: ${message}`)

    res.status(200).json({ success: true, message: 'Message sent successfully!' })
  } catch (err) {
    console.error('Email error:', err)
    res.status(500).json({ error: 'Failed to send message. Please try again.' })
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`)
})

