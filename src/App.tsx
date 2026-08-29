import Nav from './components/Nav'
import Hero from './components/Hero'
import CaseStudy from './components/CaseStudy'
import Projects from './components/Projects'
import Publication from './components/Publication'
import Track from './components/Track'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#oy-trans">
        프로젝트로 바로 가기
      </a>
      <Nav />
      <main id="main">
        {/* 순서 기준: 채용 담당자가 먼저 볼 것부터.
            증거(프로젝트) → 외부에서 검증 가능한 실적(출판) → 배경(궤적) → 나머지 */}
        <Hero />
        <CaseStudy />
        <Projects />
        <Publication />
        <Track />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <footer className="shell footer">
        <span className="t-meta">© 2026 오가람</span>
        <span className="t-meta">React · TypeScript · Vite</span>
      </footer>
    </>
  )
}
