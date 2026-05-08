# Ibrahim — Personal Portfolio

A fully responsive, dark-mode first personal portfolio built with **React**, **Express**, and **Lenis** smooth scroll.

## ✨ Features

- 🌗 Dark/Light mode with localStorage persistence
- 🎯 Lenis smooth scroll (buttery-smooth page navigation)
- ⚡ Particle canvas animation in Hero
- 📊 Animated skill progress bars (triggered on scroll)
- 🎨 Project filter (All / Web / AI/ML / Full Stack)
- 📬 Contact form with Express backend (EmailJS or Nodemailer)
- 📱 Fully responsive (mobile-first)
- 🔎 IntersectionObserver-powered scroll animations
- 🎞️ Type animation for role titles

## 🚀 Quick Start

### 1. Install Frontend Dependencies

```bash
npm install
```

### 2. Install Server Dependencies

```bash
cd server && npm install && cd ..
```

### 3. Configure Environment (Optional — for real emails)

Create a `.env` file in the `server/` folder:

```env
SMTP_USER=your@gmail.com
SMTP_PASS=your-app-password
CONTACT_TO=your@gmail.com
PORT=5000
```

> For Gmail: Enable 2FA → Generate an **App Password** → use it as `SMTP_PASS`

### 4. Run Development Servers

**Terminal 1 — Frontend (Vite):**
```bash
npm run dev
```

**Terminal 2 — Backend (Express):**
```bash
cd server && npm start
```

Frontend: http://localhost:3000  
Backend API: http://localhost:5000

### 5. Production Build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── TechStack.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Services.jsx / .css
│   │   ├── Qualification.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── server/
│   ├── index.js
│   └── package.json
├── index.html
├── vite.config.js
└── package.json
```



## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite |
| Styling | CSS Modules + CSS Variables |
| Scroll | Lenis |
| Animations | CSS + Intersection Observer |
| Type Effect | react-type-animation |
| Backend | Node.js + Express |
| Email | Nodemailer |

Built with ❤️ by Ibrahim
