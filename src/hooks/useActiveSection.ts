import { useEffect, useState } from 'react'

/**
 * 현재 화면에 보이는 섹션 id를 돌려줍니다.
 * 여러 섹션이 동시에 걸릴 수 있어서, 교차 비율이 가장 큰 하나만 활성으로 봅니다.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (!sections.length) return

    const ratios = new Map<string, number>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => ratios.set(entry.target.id, entry.intersectionRatio))
        let best = ''
        let bestRatio = 0
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            best = id
          }
        })
        if (best) setActive(best)
      },
      { threshold: [0, 0.15, 0.3, 0.6, 1], rootMargin: '-62px 0px -45% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [ids])

  return active
}
