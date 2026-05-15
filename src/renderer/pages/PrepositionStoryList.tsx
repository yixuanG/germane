import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Compass, FileText, Link2, MapPinned, SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  countPrepositionBlanksByCategory,
  getPrepositionBlanks,
  prepositionStories,
} from '@/lib/prepositionPractice'
import type { PrepositionCategory, PrepositionTextKind } from '@shared/types'
import { useAppStore } from '@/stores/useAppStore'
import { useDatabase } from '@/hooks/useDatabase'
import { formatAttemptDate, getLatestAttempt } from '@/lib/practiceAttempts'

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
  const { attempts } = useAppStore()
  const { loadAttempts } = useDatabase()
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState<'all' | PrepositionCategory>('all')
  const [selectedPattern, setSelectedPattern] = useState('all')

  useEffect(() => {
    loadAttempts()
  }, [loadAttempts])

  const levels = useMemo(
    () => ['all', ...Array.from(new Set(prepositionStories.map((story) => story.level)))],
    []
  )

  const patterns = useMemo(
    () =>
      Array.from(
        new Set(
          prepositionStories.flatMap((story) =>
            getPrepositionBlanks(story)
              .map((blank) => blank.hint)
              .filter((hint) => !hint.startsWith('wo') && !hint.startsWith('Richtung:'))
          )
        )
      ).sort((left, right) => left.localeCompare(right, 'de')),
    []
  )

  const filteredStories = useMemo(
    () =>
      prepositionStories.filter((story) => {
        const blanks = getPrepositionBlanks(story)
        const matchesLevel = selectedLevel === 'all' || story.level === selectedLevel
        const matchesCategory =
          selectedCategory === 'all' || blanks.some((blank) => blank.category === selectedCategory)
        const matchesPattern =
          selectedPattern === 'all' || blanks.some((blank) => blank.hint === selectedPattern)

        return matchesLevel && matchesCategory && matchesPattern
      }),
    [selectedCategory, selectedLevel, selectedPattern]
  )

  const clearFilters = () => {
    setSelectedLevel('all')
    setSelectedCategory('all')
    setSelectedPattern('all')
  }

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

      <Card className="mb-6 bg-surface/70">
        <CardHeader className="gap-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <SlidersHorizontal className="h-5 w-5 text-accent-cyan" />
              {t('prepositionPractice.filters.title')}
            </CardTitle>
            <Button variant="ghost" onClick={clearFilters}>
              {t('prepositionPractice.filters.clear')}
            </Button>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1.35fr]">
            <label className="space-y-2">
              <span className="block text-sm font-mono uppercase tracking-[0.16em] text-muted">
                {t('prepositionPractice.filters.level')}
              </span>
              <select
                value={selectedLevel}
                onChange={(event) => setSelectedLevel(event.target.value)}
                className="w-full rounded-2xl border border-line bg-elevated px-4 py-3 text-primary outline-none transition focus:border-accent-cyan/60"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level === 'all' ? t('prepositionPractice.filters.allLevels') : level}
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-2">
              <span className="block text-sm font-mono uppercase tracking-[0.16em] text-muted">
                {t('prepositionPractice.filters.category')}
              </span>
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value as 'all' | PrepositionCategory)}
                className="w-full rounded-2xl border border-line bg-elevated px-4 py-3 text-primary outline-none transition focus:border-accent-cyan/60"
              >
                <option value="all">{t('prepositionPractice.filters.allCategories')}</option>
                <option value="verb">{t('prepositionPractice.category.verb')}</option>
                <option value="location">{t('prepositionPractice.category.location')}</option>
                <option value="noun">{t('prepositionPractice.category.noun')}</option>
              </select>
            </label>

            <label className="space-y-2">
              <span className="block text-sm font-mono uppercase tracking-[0.16em] text-muted">
                {t('prepositionPractice.filters.pattern')}
              </span>
              <select
                value={selectedPattern}
                onChange={(event) => setSelectedPattern(event.target.value)}
                className="w-full rounded-2xl border border-line bg-elevated px-4 py-3 text-primary outline-none transition focus:border-accent-cyan/60"
              >
                <option value="all">{t('prepositionPractice.filters.allPatterns')}</option>
                {patterns.map((pattern) => (
                  <option key={pattern} value={pattern}>
                    {pattern}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <p className="text-sm text-secondary">
            {t('prepositionPractice.filters.results', { count: filteredStories.length })}
          </p>
        </CardHeader>
      </Card>

      <div className="grid gap-5">
        {filteredStories.map((story) => {
          const counts = countPrepositionBlanksByCategory(story)
          const KindIcon = kindIcons[story.kind]
          const attempt = getLatestAttempt(attempts, 'preposition', story.id)

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
                    <p className={`mt-4 flex items-center gap-2 text-sm ${attempt ? 'text-accent-green' : 'text-muted'}`}>
                      {attempt && <CheckCircle2 className="h-4 w-4" />}
                      {attempt
                        ? t('practiceHistory.completedWithScore', {
                            score: attempt.scorePercent ?? 0,
                            date: formatAttemptDate(attempt.completedAt),
                          })
                        : t('practiceHistory.notAttempted')}
                    </p>
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
