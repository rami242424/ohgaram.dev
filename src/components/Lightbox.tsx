import { useEffect } from 'react'
import type { Shot } from '../data/projects'

/** 프로젝트 카드와 사례 연구가 같은 라이트박스를 씁니다. */
export default function Lightbox({ shot, onClose }: { shot: Shot; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={shot.alt} onClick={onClose}>
      <button type="button" className="lightbox__close" onClick={onClose} aria-label="닫기" autoFocus>
        ✕
      </button>
      {shot.type === 'video' ? (
        <video
          poster={shot.poster}
          autoPlay
          loop
          muted
          playsInline
          controls
          onClick={(e) => e.stopPropagation()}
        >
          {(shot.sources ?? [{ src: shot.src, type: 'video/mp4' }]).map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))}
        </video>
      ) : (
        <img src={shot.src} alt={shot.alt} onClick={(e) => e.stopPropagation()} />
      )}
      <p className="lightbox__caption">{shot.alt}</p>
    </div>
  )
}
