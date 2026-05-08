import { useInView } from 'react-intersection-observer'
import './Skills.css'

const skillGroups = [
  {
    label: 'Frontend',
    color: '#4d9fff',
    skills: [
      { name: 'React ' },
      { name: 'HTML & CSS'},
      { name: 'JavaScript'},
      { name: 'Tailwind CSS'},
    ],
  },
  {
    label: 'Backend',
    color: '#22c55e',
    skills: [
      { name: 'Node.js / Express'},
      { name: 'REST / GraphQL APIs' },
      { name: 'MongoDB / PostgresQL'},
    ],
  },
  {
    label: 'AI / ML',
    color: '#a855f7',
    skills: [
      { name: 'Machine Learning'},
      { name: 'PyTorch'},
      { name: 'Data Analysis'},
    ],
  },
]

function SkillBar({ name, level, color, inView }) {
  return (
    <div className="skill-item">
      <div className="skill-meta">
        <span className="skill-name">{name}</span>
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label">Expertise</span>
          <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
          <div className="glow-line" style={{ margin: '1.2rem auto 2.5rem' }} />
        </div>

        <div className={`skills-grid${inView ? ' visible' : ''}`}>
          {skillGroups.map((group, gi) => (
            <div key={group.label} className="skill-group" style={{ transitionDelay: `${gi * 0.15}s` }}>
              <div className="skill-group-header">
                <div className="skill-group-dot" style={{ background: group.color, boxShadow: `0 0 10px ${group.color}` }} />
                <h3 className="skill-group-title">{group.label}</h3>
              </div>
              <div className="skill-list">
                {group.skills.map((s) => (
                  <SkillBar key={s.name} {...s} color={group.color} inView={inView} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
