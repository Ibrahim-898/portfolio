import { Github, Linkedin, Facebook, Heart, ArrowUp } from 'lucide-react'
import './Footer.css'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#techstack', label: 'Tech Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { icon: Github, href: 'https://github.com/Ibrahim-898', label: 'GitHub' },
  { icon: Linkedin, href: 'https://github.com/Ibrahim-898', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://www.facebook.com/IbrahimKhalilulla898/', label: 'Facebook' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer-top-line" />
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span>IK</span>
            </div>
            <p className="footer-tagline">
              Building modern web experiences with passion and precision.
            </p>
            <div className="footer-socials">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="footer-social" aria-label={label}>
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }) }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact quick */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Reach Out</h4>
            <ul className="footer-links">
              <li><a href="mailto:ibrahimkhalilulla898@gmail.com">ibrahimkhalilulla898@gmail.com</a></li>
              <li><a href="tel:+8801851904997">+880 1851904997</a></li>
              <li><span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Rajshahi, Bangladesh</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Ibrahim. Built with <Heart size={13} className="heart-icon" /> All rights reserved.
          </p>
          <button className="scroll-top-btn" onClick={scrollTop} aria-label="Scroll to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
