import Nav from './components/Nav'
import Hero from './components/Hero'
import Track from './components/Track'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#projects">
        프로젝트로 바로 가기
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Track />
        <Projects />
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
