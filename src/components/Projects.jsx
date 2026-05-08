import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Filter } from 'lucide-react'
import './Projects.css'

const projects = [
  {
    title: 'AI Chat Assistant',
    desc: 'A real-time AI-powered chat application with streaming responses, conversation history, and code highlighting.',
    tags: ['React', 'Node.js', 'OpenAI', 'WebSocket'],
    category: 'AI/ML',
    demo: '#',
    repo: '#',
    accent: '#4d9fff',
    emoji: '🤖',
  },
  {
    title: 'E-Commerce Platform',
    desc: 'Full-featured e-commerce solution with payment integration, admin dashboard, inventory management and analytics.',
    tags: ['Next.js', 'Express', 'MongoDB', 'Stripe'],
    category: 'Full Stack',
    demo: '#',
    repo: '#',
    accent: '#22c55e',
    emoji: '🛍️',
  },
  {
    title: 'DevLink Portfolio Builder',
    desc: 'A drag-and-drop portfolio builder for developers. Exports to a deployable static site with customizable themes.',
    tags: ['React', 'Tailwind', 'Vite'],
    category: 'Web',
    demo: '#',
    repo: '#',
    accent: '#a855f7',
    emoji: '🎨',
  },
  {
    title: 'Stock Predictor ML',
    desc: 'Machine learning model using LSTM networks to predict stock price trends with 72% accuracy on test data.',
    tags: ['Python', 'TensorFlow', 'Pandas', 'Plotly'],
    category: 'AI/ML',
    demo: '#',
    repo: '#',
    accent: '#f59e0b',
    emoji: '📈',
  },
  {
    title: 'TaskFlow App',
    desc: 'Kanban-style project management tool with real-time collaboration, drag & drop, and team chat built-in.',
    tags: ['React', 'Socket.io', 'Node.js', 'Redis'],
    category: 'Full Stack',
    demo: '#',
    repo: '#',
    accent: '#06b6d4',
    emoji: '📋',
  },
  {
    title: 'Weather Dashboard',
    desc: 'Beautifully designed weather app with 7-day forecasts, geolocation, animated weather icons, and map view.',
    tags: ['React', 'OpenWeather API', 'Leaflet'],
    category: 'Web',
    demo: '#',
    repo: '#',
    accent: '#34d399',
    emoji: '🌤️',
  },
]

const filters = ['All', 'Web', 'AI/ML', 'Full Stack']

export default function Projects() {
  const [active, setActive] = useState('All')
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <div className="glow-line" style={{ margin: '1.2rem auto 2rem' }} />
        </div>

        {/* Filter */}
        <div className="filter-row">
          <Filter size={16} style={{ color: 'var(--text-muted)' }} />
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn${active === f ? ' active' : ''}`}
              onClick={() => setActive(f)}
            >{f}</button>
          ))}
        </div>

        <div className={`projects-grid${inView ? ' visible' : ''}`}>
          {filtered.map((p, i) => (
            <div key={p.title} className="project-card" style={{ transitionDelay: `${i * 0.08}s`, '--proj-color': p.accent }}>
              <div className="proj-header">
                <div className="proj-emoji">{p.emoji}</div>
                <span className="proj-cat">{p.category}</span>
              </div>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-tags">
                {p.tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
              </div>
              <div className="proj-actions">
                <a href={p.demo} target="_blank" rel="noreferrer" className="proj-btn">
                  <ExternalLink size={14} />
                  Live Demo
                </a>
                <a href={p.repo} target="_blank" rel="noreferrer" className="proj-btn outline">
                  <Github size={14} />
                  GitHub
                </a>
              </div>
              <div className="proj-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
