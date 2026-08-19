import { assetUrl } from '../lib/assetUrl'

/**
 * Thin decorative circuit-line strip used as a transition accent between
 * plain light sections, so consecutive white/cream blocks don't read as
 * one flat, textureless slab.
 */
export function CircuitDivider() {
  return (
    <div className="flex justify-center py-6 sm:py-8">
      <img
        src={assetUrl('assets/textures/circuit-divider.png')}
        alt=""
        className="h-16 w-auto opacity-60 sm:h-20"
      />
    </div>
  )
}
