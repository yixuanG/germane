import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Compass, FileText, Link2, MapPinned } from 'lucide-react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  countPrepositionBlanksByCategory,
  prepositionStories,
} from '@/lib/prepositionPractice'
import type { PrepositionCategory, PrepositionTextKind } from '@shared/types'

const categoryStyles: Record<PrepositionCategory, string> = {
  verb: 'border-accent-violet/25 bg-accent-violet/10 text-accent-violet',
  location: 'border-accent-cyan/25 bg-accent-cyan/10 text-accent-cyan',
  noun: 'border-accent-green/25 bg-accent-green/10 text-accent-green',
}

const kindIcons: Record<PrepositionTextKind, React.ElementType> = {
  narrative: FileText,
  expository: Compass,
  argumentative: Link2,
}

const PrepositionStoryList: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className="px-8 py-10 max-w-6xl mx-auto">
      <div className="mb-10 max-w-4xl">
        <p className="mb-3 text-sm font-mono uppercase tracking-[0.22em] text-accent-cyan">
          {t('prepositionPractice.kicker')}
        </p>
        <h1 className="text-5xl font-bold tracking-[-0.055em] leading-[0.98] text-primary text-balance">
          {t('prepositionPractice.title')}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-secondary">
          {t('prepositionPractice.description')}
        </p>
      </div>

      <div className="grid gap-5">
        {prepositionStories.map((story) => {
          const counts = countPrepositionBlanksByCategory(story)
          const KindIcon = kindIcons[story.kind]

          return (
            <Card
              key={story.id}
              className="group cursor-pointer overflow-hidden transition-all hover:-translate-y-0.5 hover:border-accent-cyan/25 hover:bg-elevated"
              onClick={() => navigate(`/prepositions/${story.id}`)}
            >
              <CardHeader className="flex flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent-cyan/20 bg-accent-cyan/10">
                    <MapPinned className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs font-mono text-secondary">
                        <KindIcon className="h-3.5 w-3.5 text-accent-violet" />
                        {t(`prepositionPractice.kind.${story.kind}`)}
                      </span>
                      <span className="rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs font-mono text-secondary">
                        {story.level}
                      </span>
                    </div>
                    <CardTitle className="text-2xl">{story.title}</CardTitle>
                    <CardDescription className="mt-2 max-w-3xl text-base leading-7">
                      {story.description}
                    </CardDescription>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {story.focus.map((category) => (
                        <span
                          key={category}
                          className={`rounded-full border px-3 py-1 text-xs font-mono ${categoryStyles[category]}`}
                        >
                          {t(`prepositionPractice.category.${category}`)} · {counts[category]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:text-accent-cyan" />
              </CardHeader>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default PrepositionStoryList
