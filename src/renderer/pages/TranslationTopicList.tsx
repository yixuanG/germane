import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Languages, Scale } from 'lucide-react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { translationTopics, normalizeLanguage } from '@/lib/translationPractice'

const TranslationTopicList: React.FC = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const language = normalizeLanguage(i18n.language)

  return (
    <div className="px-8 py-10 max-w-6xl mx-auto">
      <div className="mb-10 max-w-4xl">
        <p className="mb-3 text-sm font-mono uppercase tracking-[0.22em] text-accent-violet">
          {t('translationPractice.kicker')}
        </p>
        <h1 className="text-5xl font-bold tracking-[-0.055em] leading-[0.98] text-primary text-balance">
          {t('translationPractice.title')}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-secondary">
          {t('translationPractice.description')}
        </p>
      </div>

      <div className="grid gap-5">
        {translationTopics.map((topic) => (
          <Card
            key={topic.id}
            className="group cursor-pointer overflow-hidden transition-all hover:-translate-y-0.5 hover:border-accent-violet/25 hover:bg-elevated"
            onClick={() => navigate(`/translation/${topic.id}`)}
          >
            <CardHeader className="flex flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent-violet/20 bg-accent-violet/10">
                  <Languages className="w-6 h-6 text-accent-violet" />
                </div>
                <div>
                  <CardTitle className="text-2xl">{topic.title[language]}</CardTitle>
                  <CardDescription className="mt-2 max-w-3xl text-base leading-7">
                    {topic.description[language]}
                  </CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {topic.examFocus.map((focus) => (
                      <span
                        key={focus}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs font-mono text-secondary"
                      >
                        <Scale className="h-3.5 w-3.5 text-accent-cyan" />
                        {focus}
                      </span>
                    ))}
                    <span className="rounded-full border border-accent-green/20 bg-accent-green/10 px-3 py-1 text-xs font-mono text-accent-green">
                      {topic.prompts.length} {t('translationPractice.viewpoints')}
                    </span>
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:text-accent-violet" />
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default TranslationTopicList
