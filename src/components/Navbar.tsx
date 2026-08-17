import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { assetUrl } from '../lib/assetUrl'
import { LangToggle } from './LangToggle'

const links = [
  { key: 'home', to: '/' },
  { key: 'services', to: '/services' },
  { key: 'about', to: '/about' },
  { key: 'contact', to: '/contact' },
] as const

export function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const isActive = (to: string) => (to === '/' ? location.pathname === '/' : location.pathname.startsWith(to))

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
      <nav
        className={`mt-4 flex w-full max-w-3xl items-center justify-between rounded-full border border-black/5 bg-white/95 shadow-[0_8px_30px_rgba(38,43,51,0.1)] backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'px-3 py-1.5' : 'px-4 py-2.5'
        }`}
      >
        <Link to="/" className="flex shrink-0 items-center gap-2 pl-1">
          <img
            src={assetUrl('assets/logo/teko-monogram.png')}
            alt="Teko"
            className={`transition-all duration-300 ${scrolled ? 'h-6 w-6' : 'h-7 w-7'}`}
          />
          <span className="font-display text-sm font-bold tracking-tight text-charcoal">
            TEKO
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.key}
              to={l.to}
              className={`rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors ${
                isActive(l.to) ? 'bg-charcoal/5 text-charcoal' : 'text-charcoal/70 hover:bg-charcoal/5 hover:text-charcoal'
              }`}
            >
              {t.nav[l.key]}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LangToggle />
          </div>
          <span className="hidden h-5 w-px bg-gray-line md:block" />
          <Link
            to="/contact"
            className="hidden rounded-full bg-red-primary px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-red-deep md:inline-flex"
          >
            {t.nav.cta}
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="ml-1 flex h-8 w-8 items-center justify-center rounded-full text-charcoal md:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              {open ? (
                <path d="M3 3L15 15M15 3L3 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M2 5H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M2 13H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute top-[68px] w-[calc(100%-2rem)] max-w-3xl rounded-3xl border border-black/5 bg-white p-3 shadow-xl md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.key}
                to={l.to}
                className={`rounded-xl px-4 py-3 text-left text-sm font-medium ${
                  isActive(l.to) ? 'bg-charcoal/5 text-charcoal' : 'text-charcoal hover:bg-charcoal/5'
                }`}
              >
                {t.nav[l.key]}
              </Link>
            ))}
          </div>
          <div className="mt-2 flex items-center justify-between border-t border-gray-line px-3 pt-3">
            <LangToggle compact />
            <Link to="/contact" className="rounded-full bg-red-primary px-4 py-2 text-[13px] font-semibold text-white">
              {t.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
