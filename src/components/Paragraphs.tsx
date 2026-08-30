/**
 * 데이터에 담긴 \n\n 을 문단으로 나눠 렌더합니다.
 *
 * 본문에 <br /> 을 쓰지 않는 이유:
 * 화면 폭이 기기마다 달라서, 데스크톱에서 맞춘 줄바꿈은 모바일에서 반드시 깨집니다.
 * 줄바꿈은 브라우저에 맡기고(word-break: keep-all + text-wrap: pretty),
 * 사람이 정하는 것은 "문단을 어디서 끊을지"까지만 둡니다.
 */
export default function Paragraphs({ text, className = '' }: { text: string; className?: string }) {
  const blocks = text.split('\n\n').filter(Boolean)
  return (
    <>
      {blocks.map((block, i) => (
        <p key={i} className={className} style={i > 0 ? { marginTop: 'var(--space-sm)' } : undefined}>
          {block}
        </p>
      ))}
    </>
  )
}
