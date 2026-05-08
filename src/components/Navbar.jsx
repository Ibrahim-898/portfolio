import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#techstack', label: 'Tech Stack' },
  { href: '#qualification', label: 'Qualification' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact Me' },
]

export default function Navbar({ theme, toggleTheme, activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <a className="nav-logo" href="#home" onClick={() => handleNav('#home')}>
          <div className="logo-mark">
            <span>IK</span>
            <div className="logo-ring" />
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link${activeSection === link.href.replace('#', '') ? ' active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="nav-controls">
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`mobile-link${activeSection === link.href.replace('#', '') ? ' active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
