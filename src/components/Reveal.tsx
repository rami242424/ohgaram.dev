import type { ElementType, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type Props = {
  children: ReactNode
  as?: ElementType
  delay?: number
  className?: string
  id?: string
}

/** 스크롤 등장 래퍼. delay는 같은 섹션 안에서 최대 6개까지만 계단식으로 씁니다. */
export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '', id }: Props) {
  const { ref, visible } = useReveal()
  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${className}`.trim()}
      data-visible={visible}
      style={{ ['--reveal-delay' as string]: `${Math.min(delay, 5) * 60}ms` }}
    >
      {children}
    </Tag>
  )
}
