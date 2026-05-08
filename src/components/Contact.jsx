import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import axios from 'axios'
import './Contact.css'

const contactInfo = [
  { icon: <Mail size={20} />, label: 'Email', value: 'ibrahimkhalilulla898@gmail.com', href: 'mailto:ibrahimkhalilulla898@gmail.com' },
  { icon: <Phone size={20} />, label: 'Phone', value: '+880 1851904997', href: 'tel:+8801851904997' },
  { icon: <Linkedin size={20} />, label: 'LinkedIn', value: 'linkedin.com/ibrahim', href: 'https://www.linkedin.com/in/ibrahim-khalilulla-438178249/' },
]

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await axios.post('/api/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's <span className="gradient-text">Work Together</span></h2>
          <div className="glow-line" style={{ margin: '1.2rem auto 1rem' }} />
          <p className="section-subtitle" style={{ margin: '0 auto 3rem', textAlign: 'center' }}>
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className={`contact-layout${inView ? ' visible' : ''}`}>
          {/* Info */}
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-sub">I'm currently available for freelance work and full-time positions.</p>

            <div className="contact-items">
              {contactInfo.map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="contact-item">
                  <div className="contact-icon">{c.icon}</div>
                  <div>
                    <span className="contact-label">{c.label}</span>
                    <span className="contact-value">{c.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-status-tag">
              <span className="status-dot" />
              <span>Available for opportunities</span>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                />
              </div>

              {status === 'success' && (
                <div className="form-feedback success">
                  <CheckCircle size={16} /> Message sent successfully!
                </div>
              )}
              {status === 'error' && (
                <div className="form-feedback error">
                  <AlertCircle size={16} /> Oops, something went wrong. Try again.
                </div>
              )}

              <button type="submit" className="btn-primary submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <span className="spinner" />
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
