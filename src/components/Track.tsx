import { track } from '../data/profile'
import Reveal from './Reveal'

export default function Track() {
  return (
    <section className="section shell" id="track">
      <Reveal className="section-head">
        <span className="t-label">Background</span>
        <h2 className="t-display">
          공대를 나와 구매팀에 있다가
          <br />
          지금은 <span className="mark">매장에서 일하며 개발</span>합니다
        </h2>
        <p className="t-body">
          조금 돌아온 길이지만, 지나온 자리마다 남은 것이 있습니다. 숫자를 대조하던 자리에서는
          확인하는 습관이, 고객을 응대하던 자리에서는 풀어보고 싶은 문제가 생겼습니다.
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
  )
}
