import { useEffect, useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'

const LINKS = [
  { id: 'oy-trans', label: 'OY-trans' },
  { id: 'projects', label: '프로젝트' },
  { id: 'publication', label: '출판' },
  { id: 'track', label: '궤적' },
  { id: 'stack', label: '기술' },
  { id: 'experience', label: '경력' },
  { id: 'contact', label: '연락' },
] as const

const IDS = LINKS.map((l) => l.id)

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="nav" data-scrolled={scrolled}>
      <nav className="shell nav__inner" aria-label="주요 섹션">
        <a className="nav__brand" href="#top">
          오가람
        </a>
        <ul className="nav__links">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                className="nav__link"
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
