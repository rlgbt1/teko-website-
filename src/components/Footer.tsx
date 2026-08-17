import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { CONTACT_EMAIL, SERVICE_SLUGS } from '../i18n/translations'
import { assetUrl } from '../lib/assetUrl'
import { Container } from './Container'
import { LangToggle } from './LangToggle'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const pageLinks = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.services, to: '/services' },
    { label: t.nav.about, to: '/about' },
    { label: t.cases.title, to: '/case-studies' },
    { label: t.nav.contact, to: '/contact' },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-gray-line bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url(${assetUrl('assets/textures/network-graphic-dense.png')})`,
          backgroundSize: '700px',
          backgroundPosition: 'left bottom',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Container className="relative py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={assetUrl('assets/logo/teko-monogram.png')} alt="Teko" className="h-7 w-7" />
              <span className="font-display text-base font-bold text-charcoal">TEKO</span>
            </Link>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-charcoal/55">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-red-primary">
              {t.footer.pagesTitle}
            </p>
            <ul className="mt-4 space-y-2.5">
              {pageLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[13px] text-charcoal/70 hover:text-red-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-red-primary">
              {t.footer.servicesTitle}
            </p>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link to={`/services/${slug}`} className="text-[13px] text-charcoal/70 hover:text-red-primary">
                    {t.serviceDetail.items[slug].name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-red-primary">
              {t.footer.socialTitle}
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[13px] text-charcoal/70 hover:text-red-primary">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <span
                  className="inline-flex cursor-not-allowed items-center gap-1.5 text-[13px] text-charcoal/35"
                  title={t.footer.linkedinSoon}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                  </svg>
                  {t.footer.linkedinSoon}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-gray-line pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-charcoal/45">
            © {year} Teko. {t.footer.rights}
          </p>
          <LangToggle compact />
        </div>
      </Container>
    </footer>
  )
}
