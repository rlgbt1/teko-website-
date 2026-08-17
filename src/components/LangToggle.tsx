import { useLanguage } from '../i18n/LanguageContext'

export function LangToggle({ compact = false, dark = false }: { compact?: boolean; dark?: boolean }) {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className={`flex items-center rounded-full p-0.5 text-[11px] font-semibold ${
        dark ? 'bg-white/10' : 'bg-charcoal/5'
      } ${compact ? '' : 'sm:text-xs'}`}
      role="group"
      aria-label="Language"
    >
      {(['pt', 'en'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors ${
            lang === l
              ? dark
                ? 'bg-white text-charcoal'
                : 'bg-charcoal text-white'
              : dark
                ? 'text-white/50 hover:text-white'
                : 'text-charcoal/60 hover:text-charcoal'
          }`}
          aria-pressed={lang === l}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
