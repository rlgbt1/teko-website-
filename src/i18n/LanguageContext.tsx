import { createContext, useContext, useState, useMemo, type ReactNode } from 'react'
import { DEFAULT_LANG } from './config'
import { translations, type Lang, type Translation } from './translations'

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  t: Translation
}

const LanguageContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('teko-lang')
      if (stored === 'en' || stored === 'pt') return stored
    }
    return DEFAULT_LANG
  })

  const setLangPersist = (l: Lang) => {
    setLang(l)
    if (typeof window !== 'undefined') window.localStorage.setItem('teko-lang', l)
  }

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang: setLangPersist,
      toggle: () => setLangPersist(lang === 'en' ? 'pt' : 'en'),
      t: translations[lang],
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
