import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * start가 true가 되면 target까지 한 번 카운트업합니다.
 * setInterval 대신 requestAnimationFrame을 쓰는 이유는 화면 주사율과 무관하게
 * 경과 시간(elapsed) 기준으로 진행률을 계산해야 기기마다 같은 시간에 끝나기 때문입니다.
 */
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
