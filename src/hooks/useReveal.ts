import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * 뷰포트에 처음 들어올 때 한 번만 등장시킵니다.
 * IntersectionObserver를 쓰는 이유는 스크롤 이벤트마다 getBoundingClientRect를
 * 호출하면 레이아웃을 강제로 다시 계산하게 되기 때문입니다.
 * 재진입할 때마다 다시 재생하면 스크롤을 되돌릴 때 산만해져서 disconnect로 끊습니다.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.12) {
  const ref = useRef<T>(null)
  // 축소 모션이면 처음부터 보이는 상태로 시작합니다(효과 안에서 setState 하지 않도록).
  const [visible, setVisible] = useState(() => prefersReducedMotion())

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        observer.disconnect()
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}
