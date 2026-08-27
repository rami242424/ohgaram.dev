import { education, experience } from '../data/profile'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section className="section shell" id="experience">
      <Reveal className="section-head">
        <span className="t-label">Experience</span>
        <h2 className="t-section">경력 · 학력</h2>
      </Reveal>

      <div className="track">
        {experience.map((job, i) => (
          <Reveal key={job.org} className="track__step" delay={i}>
            <div className="track__when">
              <span className="t-meta num">{job.period}</span>
              <span className="track__role">{job.org}</span>
              <span className="t-meta">{job.role}</span>
            </div>
            <ul className="track__list" style={{ marginTop: 0 }}>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="facts" delay={1}>
        {education.map((row) => (
          <div className="fact fact--wide" key={row.label}>
            <span className="fact__label">{row.label}</span>
            <p className="fact__value">{row.value}</p>
          </div>
        ))}
      </Reveal>

      <Reveal delay={2}>
        <div className="book" style={{ marginTop: 'var(--space-2xl)' }}>
          <div className="book__inner">
            <p className="t-label" style={{ color: 'inherit', opacity: 0.7 }}>
              Publication · 2023.10
            </p>
            <h3>《자바스크립트 개념서 기초부터 핵심까지》</h3>
            <p>
              8인 스터디 그룹의 집필 총괄을 맡아 기획부터 편집·검수·배포까지 전 과정을 이끌었습니다.
              배운 것을 남에게 설명할 수 있을 때 비로소 아는 것이라는 기준이 여기서 생겼습니다.
            </p>
            <div className="book__meta">
              <span>리디북스 출간</span>
              <span aria-hidden="true">·</span>
              <span>집필 총괄</span>
              <span aria-hidden="true">·</span>
              <span>출간 후 프로그래밍 분야 인기 순위 1위</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
