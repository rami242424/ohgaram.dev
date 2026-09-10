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
          <h2 className="t-section contact__title">궁금하신 점이 있으시면, 편하게 연락 주세요.</h2>
          <p className="t-body" style={{ maxWidth: '58ch' }}>
            코드는 GitHub에 전체공개 되어있습니다. 각 저장소 README에 기획 과정과 트러블슈팅의 상세내용도 정리해두었습니다.
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