import { useEffect, useRef } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Github, Linkedin, Facebook, ArrowDown, ExternalLink, Mail } from 'lucide-react'
import './Hero.css'
import profilePic from "../assets/favicon.svg";

const stats = [
  { icon: '⚡', value: '1300+', label: 'Problems Solved' },
  // { icon: '📁', value: '3+', label: 'Years Experience' },
  { icon: '🚀', value: '3+', label: 'Projects Done' },
]

const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ibrahim-khalilulla-438178249/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Ibrahim-898', label: 'GitHub' },
  { icon: Facebook, href: 'https://www.facebook.com/IbrahimKhalilulla898/', label: 'Facebook' },
]

export default function Hero() {
  const canvasRef = useRef(null)

  // Particle field
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    const particles = []
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        o: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(77, 159, 255, ${p.o})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-bg-glow" />

      {/* Social sidebar */}
      <div className="social-sidebar">
        {socials.map(({ icon: Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className="social-link" aria-label={label}>
            <Icon size={18} />
          </a>
        ))}
        <div className="social-line" />
      </div>

      <div className="container hero-container">
        {/* Left */}
        <div className="hero-left">
          <div className="hero-badge fade-up">
            <span className="badge-dot" />
            <span>Available for opportunities</span>
          </div>

          <h1 className="hero-greeting fade-up fade-up-delay-1">
            Hey, I'm <span className="hero-name gradient-text">Md. Ibrahim Khalilulla</span>
          </h1>

          <div className="hero-type fade-up fade-up-delay-2">
            <TypeAnimation
              sequence={[
                'Problem Solver', 1500,
                'Web Developer', 1500,
                'AI/ML Enthusiast', 1500,
                'Full Stack Engineer', 1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="hero-desc fade-up fade-up-delay-3">
            🚀 Turning ideas into stunning digital experiences.<br />
            Available for projects and collaborations. ⭐
          </p>

          <div className="hero-actions fade-up fade-up-delay-4">
            <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }) }}>
              <ExternalLink size={16} />
              View Projects
            </a>
            <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}>
              <Mail size={16} />
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats fade-up fade-up-delay-4">
            {stats.map((s) => (
              <div key={s.label} className="stat-chip">
                <span className="stat-icon">{s.icon}</span>
                <div>
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="hero-right">
          <div className="profile-wrapper">
            <div className="profile-orbit-ring" />
            <div className="profile-orbit-ring ring-2" />
            <div className="profile-glow" />
            <div className="profile-img-container">
              {/* <div className="profile-placeholder">
                <img
                  src="/public/ibrahim's_photo_formal.jpeg"
                  alt="Profile"
                  className="profile-photo"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "inline-block";
                  }}
                  />

                  <span className="profile-initials">IK</span>
              </div> */}

              <div className="profile-placeholder">
  <img
    src="/ibrahim's_photo_formal2.JPG"
    alt="Profile"
    className="profile-photo"
  />
</div>
            </div>

            {/* Floating badges */}
            <div className="floating-badge badge-lc">
              <span className="fb-icon">⚡</span>
              <span className="fb-text">leetcode-1527</span>
            </div>
            <div className="floating-badge badge-cf">
              <span className="fb-icon">🏆</span>
              <span className="fb-text">CF-850+(solved)</span>
            </div>
            <div className="floating-badge badge-cc">
              <span className="fb-icon">💻</span>
              <span className="fb-text">CC: 2*(1460+)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="scroll-indicator" onClick={(e) => { e.preventDefault(); document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }) }}>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll Down</span>
        <ArrowDown size={14} />
      </a>
    </section>
  )
}
