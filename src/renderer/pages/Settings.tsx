import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getSavedFontSize, saveFontSize, type FontSizePreference } from '@/lib/preferences'

const Settings: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [fontSize, setFontSize] = useState<FontSizePreference>(getSavedFontSize())

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('language', lng)
  }

  const languages = [
    { code: 'en', name: t('settings.english') },
    { code: 'de', name: t('settings.german') },
    { code: 'zh', name: t('settings.chinese') },
  ]

  const fontSizes: { value: FontSizePreference; label: string }[] = [
    { value: 'regular', label: t('settings.fontRegular') },
    { value: 'large', label: t('settings.fontLarge') },
    { value: 'xlarge', label: t('settings.fontXLarge') },
  ]

  const changeFontSize = (nextFontSize: FontSizePreference) => {
    setFontSize(nextFontSize)
    saveFontSize(nextFontSize)
  }

  return (
    <div className="px-8 py-10 max-w-3xl mx-auto">
      <div className="mb-8">
        <p className="mb-3 text-sm font-mono uppercase tracking-[0.22em] text-accent-violet">
          Preferences
        </p>
        <h1 className="text-5xl font-bold tracking-[-0.055em] text-primary">{t('settings.title')}</h1>
      </div>

      <Card className="mb-5">
        <CardHeader>
          <CardTitle className="text-3xl">{t('settings.language')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-secondary mb-5 text-lg">{t('settings.selectLanguage')}</p>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`px-4 py-2 rounded-xl border font-medium transition-all ${
                  i18n.language === lang.code
                    ? 'bg-accent-green text-canvas border-accent-green shadow-glow'
                    : 'bg-surface text-secondary border-line hover:bg-elevated hover:text-primary'
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{t('settings.fontSize')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-secondary mb-5 text-lg">{t('settings.selectFontSize')}</p>
          <div className="flex flex-wrap gap-3">
            {fontSizes.map((option) => (
              <button
                key={option.value}
                onClick={() => changeFontSize(option.value)}
                className={`px-4 py-2 rounded-xl border font-medium transition-all ${
                  fontSize === option.value
                    ? 'bg-accent-cyan text-canvas border-accent-cyan shadow-cyan'
                    : 'bg-surface text-secondary border-line hover:bg-elevated hover:text-primary'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Settings
