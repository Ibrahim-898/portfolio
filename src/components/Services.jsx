import { useInView } from 'react-intersection-observer'
import { Monitor, Server, Zap, Layers, ArrowRight } from 'lucide-react'
import './Services.css'

const services = [
  {
    icon: <Monitor size={28} />,
    title: 'Frontend Development',
    desc: 'Building pixel-perfect, accessible, and blazing-fast user interfaces with React, Next.js, and modern CSS.',
    tags: ['React', 'HTML5','CSS3','Javascript'],
    color: '#4d9fff',
  },
  {
    icon: <Server size={28} />,
    title: 'Backend Development',
    desc: 'Designing robust server-side systems with Node.js, Express — scalable and production-ready.',
    tags: ['Node.js', 'Express'],
    color: '#22c55e',
  },
  {
    icon: <Zap size={28} />,
    title: 'API Development',
    desc: 'Crafting clean, well-documented REST and GraphQL APIs with proper authentication and rate limiting.',
    tags: ['REST', 'GraphQL', 'JWT'],
    color: '#f59e0b',
  },
  {
    icon: <Layers size={28} />,
    title: 'Full Stack Solutions',
    desc: 'End-to-end web application development — from database design to deployment, all in one package.',
    tags: ['Frontend','Backend','Database'],
    color: '#a855f7',
  },
]

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="services" className="services" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label">What I Do</span>
          <h2 className="section-title">My <span className="gradient-text">Services</span></h2>
          <div className="glow-line" style={{ margin: '1.2rem auto 2.5rem' }} />
        </div>

        <div className={`services-grid${inView ? ' visible' : ''}`}>
          {services.map((s, i) => (
            <div key={s.title} className="service-card" style={{ transitionDelay: `${i * 0.1}s`, '--svc-color': s.color }}>
              <div className="svc-icon-wrap">{s.icon}</div>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-desc">{s.desc}</p>
              <div className="svc-tags">
                {s.tags.map((tag) => (
                  <span key={tag} className="svc-tag">{tag}</span>
                ))}
              </div>
              <div className="svc-arrow">
                <ArrowRight size={18} />
              </div>
              <div className="svc-bg-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
