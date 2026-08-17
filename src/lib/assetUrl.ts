/**
 * Resolves a public/ asset path against Vite's configured base URL, so
 * images keep working when the site is served from a subpath (e.g. GitHub
 * Pages at /teko-website-/) instead of the domain root.
 *
 * Usage: assetUrl('assets/logo/teko-monogram.png')
 */
export function assetUrl(path: string) {
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
