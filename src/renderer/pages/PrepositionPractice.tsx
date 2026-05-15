import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Keyboard, Sparkles, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import PrepositionTextDisplay from '@/components/prepositions/PrepositionTextDisplay'
import {
  countPrepositionBlanksByCategory,
  getPrepositionBlanks,
  getPrepositionStoryById,
} from '@/lib/prepositionPractice'
import type { PrepositionCategory } from '@shared/types'
import { useDatabase } from '@/hooks/useDatabase'

const categoryStyles: Record<PrepositionCategory, string> = {
  verb: 'border-accent-violet/25 bg-accent-violet/10 text-accent-violet',
  location: 'border-accent-cyan/25 bg-accent-cyan/10 text-accent-cyan',
  noun: 'border-accent-green/25 bg-accent-green/10 text-accent-green',
}

const PrepositionPractice: React.FC = () => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { insertAttempt } = useDatabase()

  const story = useMemo(() => (id ? getPrepositionStoryById(id) : undefined), [id])
  const [correctBlanks, setCorrectBlanks] = useState<Set<string>>(new Set())
  const [userAnswers, setUserAnswers] = useState<Map<string, string>>(new Map())
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setCorrectBlanks(new Set())
    setUserAnswers(new Map())
    setIsSubmitted(false)
    window.setTimeout(() => {
      document.querySelector<HTMLInputElement>('input[data-preposition-input="true"]')?.focus()
    }, 50)
  }, [story?.id])

  const allBlanks = useMemo(() => (story ? getPrepositionBlanks(story) : []), [story])
  const categoryCounts = useMemo(() => (story ? countPrepositionBlanksByCategory(story) : null), [story])

  const handleBlankCorrect = useCallback((blankId: string) => {
    setCorrectBlanks((previous) => new Set([...previous, blankId]))
  }, [])

  const handleBlankChange = useCallback((blankId: string, value: string) => {
    setUserAnswers((previous) => {
      const next = new Map(previous)
      next.set(blankId, value)
      return next
    })
  }, [])

  const handleSubmit = useCallback(async () => {
    if (!story) return

    await insertAttempt({
      id: `attempt-${Date.now()}-${story.id}`,
      practiceType: 'preposition',
      exerciseId: story.id,
      exerciseTitle: story.title,
      correctCount: correctBlanks.size,
      answeredCount: userAnswers.size,
      totalCount: allBlanks.length,
      scorePercent: allBlanks.length > 0 ? Math.round((correctBlanks.size / allBlanks.length) * 100) : 0,
      completedAt: Date.now(),
    })
    setIsSubmitted(true)
  }, [allBlanks.length, correctBlanks.size, insertAttempt, story, userAnswers.size])

  const focusNextInput = useCallback(() => {
    const inputs = Array.from(
      document.querySelectorAll<HTMLInputElement>('input[data-preposition-input="true"]:not(:disabled)')
    )
    const currentIndex = inputs.findIndex((input) => input === document.activeElement)
    const nextInput = inputs[(currentIndex + 1 + inputs.length) % inputs.length]
    nextInput?.focus()
    nextInput?.select()
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
        event.preventDefault()
        if (!isSubmitted) {
          void handleSubmit()
        }
      }

      if (event.key === 'Escape') {
        event.preventDefault()
        navigate('/prepositions')
      }

      if (event.altKey && event.key.toLowerCase() === 'n') {
        event.preventDefault()
        focusNextInput()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [focusNextInput, handleSubmit, isSubmitted, navigate])

  const answeredCount = userAnswers.size
  const isAllCorrect = allBlanks.length > 0 && correctBlanks.size === allBlanks.length
  const progress = allBlanks.length > 0 ? Math.round((correctBlanks.size / allBlanks.length) * 100) : 0

  if (!story || !categoryCounts) {
    return (
      <div className="p-8 flex items-center justify-center">
        <p className="text-secondary">{t('prepositionPractice.notFound')}</p>
      </div>
    )
  }

  return (
    <div className="px-8 py-8 max-w-6xl mx-auto">
      <div className="mb-6">
        <Button variant="ghost" onClick={() => navigate('/prepositions')} className="mb-5">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('common.back')}
        </Button>
        <div className="grid gap-5 lg:grid-cols-[1fr_18rem]">
          <div>
            <p className="mb-3 text-sm font-mono uppercase tracking-[0.22em] text-accent-cyan">
              {t('prepositionPractice.sessionKicker')}
            </p>
            <h1 className="text-5xl font-bold tracking-[-0.055em] leading-[0.98] text-primary text-balance">
              {story.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-secondary">{story.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {story.focus.map((category) => (
                <span
                  key={category}
                  className={`rounded-full border px-3 py-1 text-xs font-mono ${categoryStyles[category]}`}
                >
                  {t(`prepositionPractice.category.${category}`)} · {categoryCounts[category]}
                </span>
              ))}
            </div>
          </div>
          <Card className="bg-elevated/75 p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-mono uppercase tracking-[0.18em] text-muted">Progress</span>
              <span className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-sm text-secondary">
                {story.level}
              </span>
            </div>
            <div className="mb-3 flex items-end justify-between">
              <span className="text-4xl font-semibold tracking-[-0.06em] text-primary">{progress}%</span>
              <span className="font-mono text-sm text-secondary">
                {correctBlanks.size}/{allBlanks.length}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full bg-accent-cyan transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-4 text-sm text-secondary">
              {answeredCount}/{allBlanks.length} {t('prepositionPractice.touched')}
            </p>
          </Card>
        </div>
      </div>

      <Card className="mb-6 overflow-hidden bg-surface/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_0%,rgba(103,232,249,0.08),transparent_22rem)]" />
        <CardContent className="relative p-8 md:p-10">
          <div className="space-y-8">
            {story.paragraphs.map((paragraph) => (
              <PrepositionTextDisplay
                key={paragraph.id}
                paragraph={paragraph}
                onBlankCorrect={handleBlankCorrect}
                onBlankChange={handleBlankChange}
                disabled={isSubmitted}
                revealAnswers={isSubmitted}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {!isSubmitted && isAllCorrect && (
        <Card className="mb-6 border-accent-green/30 bg-accent-green/10 animate-success-pulse">
          <CardContent className="flex items-center gap-4 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-green text-canvas">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-accent-green">{t('prepositionPractice.readyTitle')}</p>
              <p className="text-sm text-secondary">{t('prepositionPractice.readyDescription')}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {!isSubmitted && (
        <div className="sticky bottom-4 z-10 flex items-center justify-between gap-4 rounded-3xl border border-line bg-canvas/80 p-4 backdrop-blur-2xl">
          <div className="flex items-center gap-3 text-sm text-secondary">
            <Keyboard className="h-4 w-4 text-accent-cyan" />
            <span><span className="font-mono text-primary">⌘/Ctrl Enter</span> {t('prepositionPractice.shortcutSubmit')}</span>
            <span className="text-muted">·</span>
            <span><span className="font-mono text-primary">Alt N</span> {t('prepositionPractice.shortcutNext')}</span>
            <span className="text-muted">·</span>
            <span><span className="font-mono text-primary">Esc</span> {t('prepositionPractice.shortcutBack')}</span>
          </div>
          <Button onClick={() => void handleSubmit()} size="lg">
            {t('prepositionPractice.submit')}
          </Button>
        </div>
      )}

      {isSubmitted && (
        <Card className={isAllCorrect ? 'border-accent-green/40 bg-accent-green/10 animate-success-pulse' : 'border-feedback-warning/30 bg-feedback-warning/10'}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl">
              {isAllCorrect ? (
                <Trophy className="w-8 h-8 text-accent-green" />
              ) : (
                <CheckCircle2 className="w-8 h-8 text-feedback-warning" />
              )}
              {isAllCorrect
                ? t('prepositionPractice.allCorrect')
                : t('prepositionPractice.revealed')}
            </CardTitle>
          </CardHeader>
          {!isAllCorrect && (
            <CardContent>
              <p className="text-secondary">{t('prepositionPractice.revealedDescription')}</p>
            </CardContent>
          )}
        </Card>
      )}
    </div>
  )
}

export default PrepositionPractice
