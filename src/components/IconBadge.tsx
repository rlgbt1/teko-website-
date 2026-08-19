import { assetUrl } from '../lib/assetUrl'

export function IconBadge({
  src,
  size = 'md',
  tone = 'soft',
}: {
  src: string
  size?: 'sm' | 'md' | 'lg'
  tone?: 'soft' | 'dark'
}) {
  const sizeClass = { sm: 'h-16 w-16 p-3', md: 'h-24 w-24 p-4.5', lg: 'h-28 w-28 p-5' }[size]
  const toneClass =
    tone === 'dark'
      ? 'bg-white/[0.08] ring-1 ring-white/15'
      : 'bg-gradient-to-br from-red-soft to-white ring-1 ring-red-primary/10'
  const imgClass = tone === 'dark' ? 'brightness-[1.7] contrast-[1.15] saturate-[1.3]' : ''

  return (
    <div className={`flex shrink-0 items-center justify-center overflow-hidden rounded-2xl ${sizeClass} ${toneClass}`}>
      <img src={assetUrl(src)} alt="" className={`h-full w-full object-contain ${imgClass}`} />
    </div>
  )
}
