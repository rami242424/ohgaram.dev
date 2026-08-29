import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'
import { profile, stats } from '../data/profile'
import Reveal from './Reveal'

function Stat({
  value,
  unit,
  label,
  start,
}: {
  value: number
  unit: string
  label: string
  start: boolean
}) {
  const shown = useCountUp(value, start)
  return (
    <div>
      <p className="stat__value num">
        {shown}
        <span className="stat__unit">{unit}</span>
      </p>
      <p className="t-meta stat__label">{label}</p>
    </div>
  )
}

export default function Hero() {
  const { ref, visible } = useReveal(0.3)

  return (
    <section className="hero shell" id="top">
      <Reveal>
        <p className="hero__eyebrow t-label">
          <span className="hero__dot" aria-hidden="true" />
          오가람 · Frontend Developer
        </p>
      </Reveal>

      <Reveal delay={1}>
        <h1 className="t-hero hero__title">
          반복되는 고객 응대를
          <br />
          <span className="mark">앱 하나로 정리</span>했습니다
        </h1>
      </Reveal>

      <Reveal delay={2}>
        <div className="hero__lead">
          <p className="t-lead">올리브영 인천공항점에서 3년째 외국인 고객을 응대합니다.</p>
          <p className="t-lead">
            공항점 특성상 택스리펀과 기내반입 규정 안내는 거의 모든 고객에게 전달됩니다.
          </p>
          <p className="t-lead">
            매번 번역기에 같은 문장을 입력하는 대신, 자주 쓰는 문구 99개를 14개 언어로 정리한 앱을
            만들었습니다.
          </p>
        </div>
      </Reveal>

      <Reveal delay={3}>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#oy-trans">
            만든 과정 보기
          </a>
          <a
            className="btn btn--secondary"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <span className="sr-only"> (새 창)</span>
          </a>
          <a className="btn btn--accent" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </Reveal>

      <div ref={ref} className="reveal hero__stats" data-visible={visible}>
        {stats.map((stat) => (
          <Stat key={stat.label} {...stat} start={visible} />
        ))}
      </div>
    </section>
  )
}
