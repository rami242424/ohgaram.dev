import { useState } from 'react'
import { profile } from '../data/profile'
import Reveal from './Reveal'

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      // 클립보드 권한이 없는 환경(일부 인앱 브라우저)에서는 조용히 넘어갑니다.
      // 값 자체는 화면에 그대로 보이기 때문에 직접 선택해서 복사할 수 있습니다.
    }
  }

  return (
    <button type="button" className="btn btn--secondary" onClick={copy}>
      <span aria-live="polite">{copied ? '복사됨' : '복사'}</span>
    </button>
  )
}

export default function Contact() {
  return (
    <section className="section section--surface" id="contact">
      <div className="shell">
        <Reveal>
          <span className="t-label" style={{ display: 'block', marginBottom: 'var(--space-md)' }}>
            Contact
          </span>
          <h2 className="t-display contact__title">
            2026년 5월,
            <br />
            <span className="mark">함께 일할 팀</span>을 찾고 있습니다
          </h2>
          <p className="t-body" style={{ maxWidth: '58ch' }}>
            뷰티 · 헬스 · 언어교육 도메인에 특히 관심이 있습니다. 세 분야 모두 제가 사용자였거나
            지금도 사용자인 영역이라, 화면 너머에서 무엇이 불편한지 알고 있습니다.
          </p>
        </Reveal>

        <Reveal className="contact__list" delay={1}>
          <div className="contact__row">
            <span className="t-meta">Email</span>
            <a className="contact__value" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <CopyButton text={profile.email} />
          </div>
          <div className="contact__row">
            <span className="t-meta">GitHub</span>
            <a
              className="contact__value"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.githubLabel}
              <span className="sr-only"> (새 창)</span>
            </a>
            <CopyButton text={profile.github} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
