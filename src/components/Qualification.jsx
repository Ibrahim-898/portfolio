import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, Code2, icons ,Computer} from 'lucide-react'
import './Qualification.css'
import { title } from 'framer-motion/client'

const education = [
  {
    icon: <GraduationCap size={20} />,
    degree: 'B.Sc. in Information and Communication Engineering.',
    Cgpa : '3.58',
    institution: 'University of Rajshahi',
    year: '2021 – Present',
    desc: 'Focusing on algorithms, data structures, software engineering, and AI/ML fundamentals.',
  },
  {
    icon: <GraduationCap size={20} />,
    degree: 'Higher Secondary Certificate',
    institution: 'Dhaka Residential Model College',
    year: '2018 – 2020',
    desc: 'Science background with Mathematics, Physics, Chemistry. GPA 5.00.',
  },
]

const achievements = [
  {
    icon: <Award size={20} />,
    title: 'LeetCode Rating: 1527+',
    org: 'LeetCode',
    desc: 'Solved 300+ algorithmic problems across Easy, Medium, and Hard difficulty levels.',
  },
  {
    icon: <Code2 size={20} />,
    title: 'Codeforces Solved',
    org: 'Codeforces',
    desc: 'Active competitive programmer with 850+ Problem Solved, participating in Div. 2 and Div. 3 rounds.',
  },
  {
    icon: <Award size={20} />,
    title: 'CodeChef 2-Star',
    org: 'CodeChef',
    desc: 'Achieved 2-star rating (1460+ score) through consistent performance in long challenges.',
  },
  {
    icon: <Computer size={20}/>,
    title : 'HackTheAi Finalist',
    desc : 'Ranked 29th among 150+ teams in the preliminary round.'
  }
  
]

function TimelineItem({ item, idx, inView, side }) {
  return (
    <div className={`timeline-item${inView ? ' visible' : ''}`} style={{ transitionDelay: `${idx * 0.15}s` }}>
      <div className="timeline-dot">
        {item.icon || item.degree}
      </div>
      <div className="timeline-content">
        <span className="timeline-year">{item.year}</span>
        <h3 className="timeline-title">{item.degree || item.title}</h3>
        <span className="timeline-org">{item.institution || item.org}</span>
        <p className="timeline-desc">{item.desc}</p>
      </div>
    </div>
  )
}

export default function Qualification() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="qualification" className="qualification" ref={ref}>
      <div className="container" ref={ref}>
        <div style={{ textAlign: 'center' }}>
          <span className="section-label">Journey</span>
          <h2 className="section-title">My <span className="gradient-text">Qualification</span></h2>
          <div className="glow-line" style={{ margin: '1.2rem auto 2.5rem' }} />
        </div>

        <div className="qual-grid">
          <div className="qual-col">
            <h3 className="qual-col-title"><GraduationCap size={18} /> Education</h3>
            <div className="timeline">
              {education.map((e, i) => <TimelineItem key={e.degree} item={e} idx={i} inView={inView} />)}
            </div>
          </div>
          <div className="qual-divider" />
          <div className="qual-col">
            <h3 className="qual-col-title"><Award size={18} /> Achievements</h3>
            <div className="timeline">
              {achievements.map((a, i) => <TimelineItem key={a.title} item={a} idx={i} inView={inView} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
