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
          제가 일하는 매장에서
          <br />
          <span className="mark">쓰고 있는 앱</span>을 만들었습니다
        </h1>
      </Reveal>

      <Reveal delay={2}>
        <p className="t-lead hero__lead">
          인천공항 올리브영에서 3년째 외국인 고객을 응대하고 있습니다. 택스리펀이나 기내반입처럼
          설명이 긴 안내를 매번 번역기에 새로 입력하는 게 번거로워서, 자주 쓰는 문구 99개를 14개
          언어로 정리한 앱을 만들었습니다. 지금도 매장에서 쓰면서 조금씩 고쳐가고 있습니다.
        </p>
      </Reveal>

      <Reveal delay={3}>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
            프로젝트 보기
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
          <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
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
