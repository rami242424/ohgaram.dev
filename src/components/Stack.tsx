import { stack } from '../data/profile'
import Reveal from './Reveal'

export default function Stack() {
  return (
    <section className="section section--surface" id="stack">
      <div className="shell">
        <Reveal className="section-head">
          <span className="t-label">Tech Stack</span>
          <h2 className="t-section">사용 하는 기술</h2>
        </Reveal>
        <div className="stack-grid">
          {stack.map((group, i) => (
            <Reveal key={group.group} className="stack-group" delay={i}>
              <h3>{group.group}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}