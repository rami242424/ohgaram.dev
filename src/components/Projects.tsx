import { useCallback, useEffect, useState } from 'react'
import { projects, type Project, type Shot } from '../data/projects'
import Reveal from './Reveal'

function ShotButton({
  shot,
  onOpen,
  eager,
}: {
  shot: Shot
  onOpen: (shot: Shot) => void
  eager?: boolean
}) {
  return (
    <button
      type="button"
      className={`shot${shot.wide ? ' shot--wide' : ''}`}
      onClick={() => onOpen(shot)}
      aria-label={`${shot.alt} — 크게 보기`}
    >
      {shot.type === 'video' ? (
        <video
          poster={shot.poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          {(shot.sources ?? [{ src: shot.src, type: 'video/mp4' }]).map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))}
        </video>
      ) : (
        <img src={shot.src} alt={shot.alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      )}
    </button>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [lightbox, setLightbox] = useState<Shot | null>(null)

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [lightbox])

  const open = useCallback((shot: Shot) => setLightbox(shot), [])

  return (
    <>
      <Reveal className="project" as="article" delay={index}>
        <div className="project__top">
          <div>
            <span className="t-label project__no num">Project {project.no}</span>
            <h3 className="t-card">{project.title}</h3>
            <p className="t-meta">{project.tagline}</p>
          </div>
          <div className="project__links">
            <a
              className="btn btn--primary"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              라이브 데모<span className="sr-only"> (새 창)</span>
            </a>
            <a
              className="btn btn--secondary"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub<span className="sr-only"> (새 창)</span>
            </a>
          </div>
        </div>

        <p className="t-body project__summary">{project.summary}</p>

        <div className="project__body">
          <div className="facts">
            <div className="fact">
              <span className="fact__label">문제</span>
              <p className="fact__value">{project.problem}</p>
            </div>
            <div className="fact">
              <span className="fact__label">판단</span>
              <p className="fact__value">{project.decision}</p>
            </div>
            <div className="fact fact--result">
              <span className="fact__label">결과</span>
              <p className="fact__value">{project.result}</p>
            </div>
          </div>

          <ul className="project__stack">
            {project.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>

          <div>
            <div className={`shots${project.shotLayout === 'pair' ? ' shots--pair' : ''}`}>
              {project.shots.map((shot, i) => (
                <ShotButton key={shot.src} shot={shot} onOpen={open} eager={index === 0 && i < 4} />
              ))}
            </div>
            <p className="t-meta shots__hint">화면을 누르면 크게 볼 수 있습니다.</p>
          </div>
        </div>
      </Reveal>

      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={() => setLightbox(null)}
            aria-label="닫기"
            autoFocus
          >
            ✕
          </button>
          {lightbox.type === 'video' ? (
            <video
              poster={lightbox.poster}
              autoPlay
              loop
              muted
              playsInline
              controls
              onClick={(e) => e.stopPropagation()}
            >
              {(lightbox.sources ?? [{ src: lightbox.src, type: 'video/mp4' }]).map((s) => (
                <source key={s.src} src={s.src} type={s.type} />
              ))}
            </video>
          ) : (
            <img src={lightbox.src} alt={lightbox.alt} onClick={(e) => e.stopPropagation()} />
          )}
          <p className="lightbox__caption">{lightbox.alt}</p>
        </div>
      )}
    </>
  )
}

export default function Projects() {
  return (
    <section className="section shell" id="projects">
      <Reveal className="section-head">
        <span className="t-label">Projects</span>
        <h2 className="t-display">
          만든 것보다 <span className="mark">왜 그렇게 만들었는지</span>
        </h2>
        <p className="t-body">
          네 개 모두 배포되어 있고 코드가 공개되어 있습니다. 각 프로젝트에서 실제로 부딪힌 문제와
          그때 내린 판단을 순서대로 적었습니다.
        </p>
      </Reveal>

      <div className="projects">
        {projects.map((project, i) => (
          <ProjectCard key={project.no} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
