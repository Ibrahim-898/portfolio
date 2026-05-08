import { useInView } from 'react-intersection-observer'
import './TechStack.css'

const categories = [
  {
    label: 'Frontend',
    techs: [
      { name: 'React', icon: '⚛️', color: '#61dafb' },
      { name: 'JavaScript', icon: '🌟', color: '#f7df1e' },
      { name: 'TypeScript', icon: '📘', color: '#3178c6' },
      { name: 'Tailwind', icon: '💨', color: '#38bdf8' },
      { name: 'HTML5', icon: '🌐', color: '#e34f26' },
      { name: 'CSS3', icon: '🎨', color: '#1572b6' },
    ],
  },
  {
    label: 'Backend',
    techs: [
      { name: 'Node.js', icon: '🟢', color: '#339933' },
      { name: 'Express', icon: '⚡', color: '#ffffff' },
      { name: 'REST API', icon: '🔗', color: '#4d9fff' },
      { name: 'GraphQL', icon: '🔮', color: '#e535ab' },
      { name: 'JWT', icon: '🔑', color: '#d63031' },
    ],
  },
  {
    label: 'Database',
    techs: [
      { name: 'MongoDB', icon: '🍃', color: '#47a248' },
      { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
      { name: 'MySQL', icon: '🐬', color: '#4479a1' },
      { name: 'Redis', icon: '🔴', color: '#dc382d' },
    ],
  },
  {
    label: 'AI / ML',
    techs: [
       { name: 'Python', icon: '🐍', color: '#3776ab' },
      { name: 'PyTorch', icon: '🔦', color: '#ee4c2c' },
      { name: 'Scikit-Learn', icon: '📊', color: '#f7931e' },
      { name: 'Pandas', icon: '🐼', color: '#150458' },
      { name: 'NumPy', icon: '🔢', color: '#013243' },
    ],
  },
  {
    label: 'Tools',
    techs: [
      { name: 'Git', icon: '🌿', color: '#f05032' },
      { name: 'Docker', icon: '🐳', color: '#2496ed' },
      { name: 'VS Code', icon: '💙', color: '#007acc' },
      { name: 'Postman', icon: '📮', color: '#ff6c37' },
    ],
  },
]

export default function TechStack() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="techstack" className="techstack" ref={ref}>
      <div className="container">
        <div className={`section-header${inView ? ' visible' : ''}`} style={{ textAlign: 'center' }}>
          <span className="section-label">Technologies</span>
          <h2 className="section-title">My Tech <span className="gradient-text">Arsenal</span></h2>
          <div className="glow-line" style={{ margin: '1.2rem auto 2.5rem' }} />
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            A collection of tools and technologies I use to build modern, scalable applications.
          </p>
        </div>

        <div className={`tech-categories${inView ? ' visible' : ''}`}>
          {categories.map((cat, ci) => (
            <div key={cat.label} className="tech-category" style={{ transitionDelay: `${ci * 0.1}s` }}>
              <h3 className="tech-cat-label">{cat.label}</h3>
              <div className="tech-grid">
                {cat.techs.map((tech) => (
                  <div key={tech.name} className="tech-card" style={{ '--accent-color': tech.color }}>
                    <span className="tech-icon">{tech.icon}</span>
                    <span className="tech-name">{tech.name}</span>
                    <div className="tech-card-glow" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
