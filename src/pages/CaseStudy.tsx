import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { caseStudyContent } from '../i18n/caseStudyContent'
import { Container } from '../components/Container'
import { DashboardMockup } from '../components/DashboardMockup'
import { assetUrl } from '../lib/assetUrl'

export function CaseStudy() {
  const { slug } = useParams()
  const { lang, t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const study = slug ? caseStudyContent[lang][slug] : undefined
  if (!study) return <Navigate to="/" replace />

  return (
    <article className="pt-28 pb-24 sm:pt-32">
      <Container>
        <Link to="/case-studies" className="text-xs font-semibold text-charcoal/50 hover:text-red-primary">
          ← {t.backHome}
        </Link>

        <div
          className="relative mt-6 h-52 w-full overflow-hidden rounded-3xl bg-charcoal sm:h-64"
          style={{
            backgroundImage: `url(${assetUrl('assets/icons/tangled-to-structured.png')})`,
            backgroundSize: '260%',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent p-6 sm:p-10">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wide text-red-primary">
                {study.tag}
              </span>
              <h1 className="mt-2 max-w-2xl font-display text-xl font-bold text-white sm:text-3xl">
                {study.name}
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Block title={lang === 'pt' ? 'O desafio' : 'The challenge'} text={study.challenge} />
            <Block title={lang === 'pt' ? 'A abordagem da Teko' : 'Teko’s approach'} text={study.approach} />
            <Block title={lang === 'pt' ? 'O resultado' : 'The outcome'} text={study.outcome} />
          </div>
          <aside className="rounded-3xl border border-gray-line bg-white p-6 shadow-[0_10px_28px_-18px_rgba(38,43,51,0.3)]">
            <p className="text-xs font-semibold uppercase tracking-wide text-charcoal/40">
              {lang === 'pt' ? 'Resumo' : 'Summary'}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{study.summary}</p>
          </aside>
        </div>

        {study.showDashboard && (
          <div className="mt-12 overflow-hidden rounded-2xl border-4 border-charcoal bg-charcoal p-2">
            <div className="overflow-hidden rounded-xl bg-white">
              <DashboardMockup />
            </div>
          </div>
        )}
      </Container>
    </article>
  )
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div className="mb-8">
      <h2 className="font-display text-sm font-bold uppercase tracking-wide text-red-primary">
        {title}
      </h2>
      <p className="mt-2 text-[15px] leading-relaxed text-charcoal/75">{text}</p>
    </div>
  )
}
