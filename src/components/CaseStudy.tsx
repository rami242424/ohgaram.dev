import { useCallback, useState } from 'react'
import { caseStudy, type Shot } from '../data/projects'
import Reveal from './Reveal'
import ShotButton from './ShotButton'
import Lightbox from './Lightbox'

export default function CaseStudy() {
  const [lightbox, setLightbox] = useState<Shot | null>(null)
  const open = useCallback((shot: Shot) => setLightbox(shot), [])

  return (
    <section className="section shell" id="oy-trans">
      <Reveal className="section-head">
        <span className="t-label">Case study</span>
        <h2 className="t-display">
          매장에서 쓰려고 만들고,
          <br />
          <span className="mark">매장에서 고쳤습니다</span>
        </h2>
        <p className="t-body">
          제가 일하는 인천공항 올리브영에서 쓰는 응대 앱입니다. 왜 만들었고, 매장에서 쓰면서
          무엇이 바뀌었는지를 순서대로 적었습니다.
        </p>
      </Reveal>

      <Reveal className="case__head" delay={1}>
        <div>
          <span className="chip chip--accent">{caseStudy.badge}</span>
          <h3 className="t-card case__title">{caseStudy.title}</h3>
          <p className="t-meta">{caseStudy.tagline}</p>
        </div>
        <div className="project__links">
          <a
            className="btn btn--primary"
            href={caseStudy.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            라이브 데모<span className="sr-only"> (새 창)</span>
          </a>
          <a
            className="btn btn--secondary"
            href={caseStudy.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub<span className="sr-only"> (새 창)</span>
          </a>
        </div>
      </Reveal>

      <Reveal className="shots shots--pair case__shots" delay={2}>
        {caseStudy.shots.map((shot, i) => (
          <ShotButton key={shot.src} shot={shot} onOpen={open} eager={i < 2} />
        ))}
      </Reveal>

      <ol className="case">
        {caseStudy.blocks.map((block, i) => (
          <Reveal key={block.no} as="li" className="case__block" delay={i}>
            <span className="case__no num" aria-hidden="true">
              {block.no}
            </span>
            <div className="case__body">
              <h4 className="case__block-title">{block.title}</h4>
              <p className="t-body">{block.body}</p>
              {block.list && (
                <ul className="case__list">
                  {block.list.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              )}
              {block.evidence && <p className="case__evidence">{block.evidence}</p>}
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal className="project__stack" as="ul" delay={1}>
        {caseStudy.stack.map((tech) => (
          <li key={tech} className="chip">
            {tech}
          </li>
        ))}
      </Reveal>

      {lightbox && <Lightbox shot={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  )
}
