import { stack } from '../data/profile'
import Reveal from './Reveal'

export default function Stack() {
  return (
    <section className="section section--surface" id="stack">
      <div className="shell">
        <Reveal className="section-head">
          <span className="t-label">Tech Stack</span>
          <h2 className="t-section">쓰고 있는 것들</h2>
          <p className="t-body">
            모두 위 프로젝트에서 실제로 써서 배포까지 마친 것만 적었습니다. 학습 목적으로 한 번씩
            써본 것은 제외했습니다.
          </p>
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
