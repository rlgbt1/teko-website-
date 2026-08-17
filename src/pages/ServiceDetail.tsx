import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { CONTACT_EMAIL, SERVICE_SLUGS } from '../i18n/translations'
import { Container } from '../components/Container'
import { CheckList } from '../components/CheckList'
import { IconBadge } from '../components/IconBadge'

const iconBySlug: Record<string, string> = {
  'digital-operations-pack': '/assets/icons/digital-identity.png',
  'business-tools': '/assets/icons/digital-identity.png',
  'executive-reporting-agent': '/assets/icons/analytics-reporting.png',
  'ai-workflows-crm': '/assets/icons/analytics-reporting.png',
}

export function ServiceDetail() {
  const { slug } = useParams()
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!slug || !SERVICE_SLUGS.includes(slug as (typeof SERVICE_SLUGS)[number])) {
    return <Navigate to="/services" replace />
  }

  const item = t.serviceDetail.items[slug as keyof typeof t.serviceDetail.items]

  return (
    <article className="pt-32 pb-24 sm:pt-40">
      <Container>
        <Link to="/services" className="text-xs font-semibold text-charcoal/50 hover:text-red-primary">
          ← {t.serviceDetail.backToServices}
        </Link>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
          <IconBadge src={iconBySlug[slug]} size="lg" />
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wide text-red-primary">
              {item.branch}
            </span>
            <h1 className="mt-1 font-display text-2xl font-bold text-charcoal sm:text-3xl">{item.name}</h1>
            <p className="mt-1 text-sm text-charcoal/60 sm:text-base">{item.tagline}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-red-primary">
              {t.serviceDetail.overviewLabel}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-charcoal/75">{item.description}</p>

            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(item.name)}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-deep"
            >
              {t.serviceDetail.ctaText}
            </a>
          </div>
          <aside className="rounded-3xl border border-gray-line bg-white p-6 shadow-[0_10px_28px_-18px_rgba(38,43,51,0.3)]">
            <p className="text-xs font-semibold uppercase tracking-wide text-charcoal/40">
              {t.serviceDetail.includesLabel}
            </p>
            <div className="mt-4">
              <CheckList items={item.bullets} />
            </div>
          </aside>
        </div>
      </Container>
    </article>
  )
}
