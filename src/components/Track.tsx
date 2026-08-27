import { principles, track } from '../data/profile'
import Reveal from './Reveal'

export default function Track() {
  return (
    <>
      <section className="section shell" id="track">
        <Reveal className="section-head">
          <span className="t-label">Track</span>
          <h2 className="t-display">
            구매관리 3년, 매장 크루 3년,
            <br />
            그 사이에 <span className="mark">코드</span>가 있습니다
          </h2>
          <p className="t-body">
            비전공에서 시작했지만 빈 이력은 아닙니다. 숫자를 대조하던 자리에서 검증 습관을 만들었고,
            고객을 응대하던 자리에서 풀어야 할 문제를 발견했습니다.
          </p>
        </Reveal>

        <div className="track">
          {track.map((step, i) => (
            <Reveal key={step.period} className="track__step" delay={i}>
              <div className="track__when">
                <span className="t-meta num">{step.period}</span>
                <span className="track__role">{step.role}</span>
                <span className="t-meta">{step.org}</span>
              </div>
              <div>
                <h3 className="t-card track__title">{step.title}</h3>
                <p className="t-body">{step.body}</p>
                <ul className="track__list">
                  {step.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--surface">
        <div className="shell">
          <Reveal className="section-head">
            <span className="t-label">How I work</span>
            <h2 className="t-section">일하는 방식</h2>
          </Reveal>
          <div className="principles">
            {principles.map((p, i) => (
              <Reveal key={p.no} className="principle" delay={i}>
                <span className="principle__no num" aria-hidden="true">
                  {p.no}
                </span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
