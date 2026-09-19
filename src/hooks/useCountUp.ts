import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useCountUp(target: number, start: boolean, duration = 900) {
  // 축소 모션에서는 초기값이 곧 최종값입니다. 효과 안에서 setState 하지 않기 위해
  // 애니메이션 없이 끝난 상태로 시작합니다.
  const [value, setValue] = useState(() => (prefersReducedMotion() ? target : 0))

  useEffect(() => {
    if (!start || prefersReducedMotion()) return
    let raf = 0
    let startedAt = 0
    const tick = (now: number) => {
      if (!startedAt) startedAt = now
      const progress = Math.min((now - startedAt) / duration, 1)
      // easeOutCubic — 끝에서 자연스럽게 멈추도록
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, start, duration])

  return value
}
