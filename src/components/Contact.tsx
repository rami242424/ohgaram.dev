import { useState } from 'react'
import { profile } from '../data/profile'
import Reveal from './Reveal'

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      // 클립보드 권한이 없는 환경(일부 인앱 브라우저)에서는 조용히 넘어갑니다.
      // 값은 화면에 그대로 보이므로 직접 선택해서 복사할 수 있습니다.
    }
  }

  return (
    <button type="button" className="btn btn--secondary" onClick={copy}>
      <span aria-live="polite">{copied ? '복사됨' : '복사'}</span>
      <span className="sr-only"> — {label}</span>
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
            궁금한 게 있으면
            <br />
            <span className="mark">편하게 연락</span> 주세요
          </h2>
          <p className="t-body" style={{ maxWidth: '58ch' }}>
            코드는 모두 GitHub에 공개되어 있습니다. 각 프로젝트 README에 여기 다 담지 못한 판단
            과정과 트러블슈팅을 정리해두었으니, 궁금하신 부분이 있으시면 함께 보셔도 좋습니다.
          </p>
        </Reveal>

        <Reveal className="contact__list" delay={1}>
          <div className="contact__row">
            <span className="t-meta">Email</span>
            <a className="contact__value" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <CopyButton text={profile.email} label="이메일 주소" />
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
            <CopyButton text={profile.github} label="GitHub 주소" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
