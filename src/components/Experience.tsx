import { education, experience } from '../data/profile'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section className="section shell" id="experience">
      <Reveal className="section-head">
        <span className="t-label">Experience</span>
        <h2 className="t-section">경력</h2>
      </Reveal>

      <div className="track">
        {experience.map((job, i) => (
          <Reveal key={job.org} className="track__step" delay={i}>
            <div className="track__when">
              <span className="t-meta num">{job.period}</span>
              <span className="track__role">{job.org}</span>
              <span className="t-meta">{job.role}</span>
            </div>
            <div>
              <h3 className="t-card track__title">{job.title}</h3>
              <p className="t-body">{job.body}</p>
              <ul className="track__list">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="section-head section-head--sub">
        <h3 className="t-section">학력 · 어학</h3>
      </Reveal>

      <Reveal className="facts facts--edu" delay={1}>
        {education.map((row) => (
          <div className="fact fact--wide" key={row.label}>
            <span className="fact__label">{row.label}</span>
            <p className="fact__value">{row.value}</p>
          </div>
        ))}
      </Reveal>
    </section>
  )
}