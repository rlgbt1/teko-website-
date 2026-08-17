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
  const sizeClass = { sm: 'h-16 w-16 p-2', md: 'h-24 w-24 p-3', lg: 'h-28 w-28 p-3' }[size]
  const toneClass =
    tone === 'dark'
      ? 'bg-charcoal-mix'
      : 'bg-gradient-to-br from-red-soft to-white ring-1 ring-red-primary/10'

  return (
    <div className={`flex shrink-0 items-center justify-center overflow-hidden rounded-2xl ${sizeClass} ${toneClass}`}>
      <img src={assetUrl(src)} alt="" className="h-full w-full scale-[1.35] object-contain" />
    </div>
  )
}
