import { useCallback, useState } from 'react'
import { projects, type Project, type Shot } from '../data/projects'
import Reveal from './Reveal'
import ShotButton from './ShotButton'
import Lightbox from './Lightbox'

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project
  index: number
  onOpen: (shot: Shot) => void
}) {
  return (
    <Reveal className={`project${project.compact ? ' project--compact' : ''}`} as="article" delay={index}>
      <div className="project__top">
        <div>
          <span className="chip project__badge">{project.badge}</span>
          <h3 className="t-card">
            <span className="project__no num">{project.no}</span> {project.title}
          </h3>
          <p className="t-meta">{project.tagline}</p>
        </div>
        <div className="project__links">
          <a className="btn btn--primary" href={project.demo} target="_blank" rel="noopener noreferrer">
            라이브 데모<span className="sr-only"> (새 창)</span>
          </a>
          <a className="btn btn--secondary" href={project.github} target="_blank" rel="noopener noreferrer">
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
            {project.shots.map((shot) => (
              <ShotButton key={shot.src} shot={shot} onOpen={onOpen} />
            ))}
          </div>
          <p className="t-meta shots__hint">화면을 누르시면 크게 보실 수 있습니다.</p>
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  const [lightbox, setLightbox] = useState<Shot | null>(null)
  const open = useCallback((shot: Shot) => setLightbox(shot), [])

  return (
    <section className="section shell" id="projects">
      <Reveal className="section-head">
        <span className="t-label">Other projects</span>
        <h2 className="t-section">그 밖에 만든 것들</h2>
        <p className="t-body">
          세 개 모두 배포했고, 코드는 GitHub에 공개했습니다. 무엇을 만들었는지보다, 어디서 막혔고
          어떻게 풀었는지를 적었습니다.
        </p>
      </Reveal>

      <div className="projects">
        {projects.map((project, i) => (
          <ProjectCard key={project.no} project={project} index={i} onOpen={open} />
        ))}
      </div>

      {lightbox && <Lightbox shot={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  )
}