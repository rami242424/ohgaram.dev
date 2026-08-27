import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'
import { profile, stats } from '../data/profile'
import Reveal from './Reveal'

function Stat({ value, unit, label, start }: { value: number; unit: string; label: string; start: boolean }) {
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
          Frontend Developer · 오가람
        </p>
      </Reveal>

      <Reveal delay={1}>
        <h1 className="t-hero hero__title">
          사용자가 막힐 지점을 <span className="mark">먼저 찾습니다.</span>
        </h1>
      </Reveal>

      <Reveal delay={2}>
        <p className="t-lead hero__lead">
          매장에서 고객 응대를 단계화해 오안내를 줄였고, 지금은 같은 방식으로 코드의 에러 케이스를
          미리 분기합니다. 근무 매장에서 매주 부딪히던 언어 장벽은 직접 도구로 만들어 해결했고,
          지금도 실사용하며 고치고 있습니다.
        </p>
      </Reveal>

      <Reveal delay={3}>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
            프로젝트 4개 보기
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
