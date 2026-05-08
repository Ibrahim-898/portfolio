import { useInView } from 'react-intersection-observer'
import { Download, Code2, Brain, Layers } from 'lucide-react'
import './About.css'

const interests = [
  { icon: <Code2 size={20} />, label: 'Full Stack Dev' },
  { icon: <Brain size={20} />, label: 'AI/ML Research' },
  { icon: <Layers size={20} />, label: 'Problem Solver' },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <div className={`about-grid${inView ? ' visible' : ''}`}>
          <div className="about-visual">
            <div className="about-img-wrap">
              <div className="about-img-placeholder">
                <span>IK</span>
              </div>
              <div className="about-accent-box" />
              <div className="about-dot-grid" />
            </div>
            <div className="about-card-float">
              <span className="about-card-icon">💡</span>
              <div>
                <strong>Problem Solver </strong>
                <span>& Web Developer </span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Building the <span className="gradient-text">Future</span>, One Line at a Time</h2>
            <div className="glow-line" />
            <p className="about-text">
              Hi! I'm <strong>Ibrahim</strong>, a passionate web developer and AI/ML enthusiast based in Rajshahi, Bangladesh. I specialize in crafting clean, scalable, and high-performance web applications that solve real-world problems.
            </p>
            <p className="about-text">
              With a strong foundation in both frontend and backend technologies, I bring ideas to life through elegant code. When not coding, I'm sharpening my competitive programming skills and exploring the frontiers of machine learning.
            </p>

            <div className="about-interests">
              {interests.map((i) => (
                <div key={i.label} className="interest-tag">
                  {i.icon}
                  <span>{i.label}</span>
                </div>
              ))}
            </div>

            <a href="/Ibrahim_s_resume.pdf" download className="btn-primary">
                  Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
