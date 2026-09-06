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
