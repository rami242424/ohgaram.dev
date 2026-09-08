import Nav from './components/Nav'
import Hero from './components/Hero'
import CaseStudy from './components/CaseStudy'
import Projects from './components/Projects'
import Publication from './components/Publication'
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
        <Hero />
        <CaseStudy />
        <Projects />
        <Publication />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <footer className="shell footer">
        <span className="t-meta">오가람</span>
        <span className="t-meta">React · TypeScript · Vite</span>
      </footer>
    </>
  )
}