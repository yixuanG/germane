import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Keyboard, Languages, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getTranslationTopicById, normalizeLanguage } from '@/lib/translationPractice'

const TranslationPractice: React.FC = () => {
  const { t, i18n } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const language = normalizeLanguage(i18n.language)
  const topic = useMemo(() => (id ? getTranslationTopicById(id) : undefined), [id])
  const firstTextareaRef = useRef<HTMLTextAreaElement>(null)

  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const answeredCount = useMemo(() => {
    if (!topic) return 0
    return topic.prompts.filter((prompt) => answers[prompt.id]?.trim()).length
  }, [answers, topic])

  const progress = topic ? Math.round((answeredCount / topic.prompts.length) * 100) : 0

  const handleSubmit = useCallback(() => {
    setIsSubmitted(true)
  }, [])

  const focusNextTextarea = useCallback(() => {
    const textareas = Array.from(
      document.querySelectorAll<HTMLTextAreaElement>('textarea[data-translation-input="true"]:not(:disabled)')
    )
    const currentIndex = textareas.findIndex((textarea) => textarea === document.activeElement)
    const nextTextarea = textareas[(currentIndex + 1 + textareas.length) % textareas.length]
    nextTextarea?.focus()
  }, [])

  useEffect(() => {
    firstTextareaRef.current?.focus()
  }, [topic?.id])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
        event.preventDefault()
        if (!isSubmitted) {
          handleSubmit()
        }
      }

      if (event.key === 'Escape') {
        event.preventDefault()
        navigate('/translation')
      }

      if (event.altKey && event.key.toLowerCase() === 'n') {
        event.preventDefault()
        focusNextTextarea()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [focusNextTextarea, handleSubmit, isSubmitted, navigate])

  if (!topic) {
    return (
      <div className="p-8 flex items-center justify-center">
        <p className="text-secondary">{t('translationPractice.notFound')}</p>
      </div>
    )
  }

  return (
    <div className="px-8 py-8 max-w-6xl mx-auto">
      <div className="mb-6">
        <Button variant="ghost" onClick={() => navigate('/translation')} className="mb-5">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('common.back')}
        </Button>
        <div className="grid gap-5 lg:grid-cols-[1fr_18rem]">
          <div>
            <p className="mb-3 text-sm font-mono uppercase tracking-[0.22em] text-accent-violet">
              {t('translationPractice.sessionKicker')}
            </p>
            <h1 className="text-5xl font-bold tracking-[-0.055em] leading-[0.98] text-primary text-balance">
              {topic.title[language]}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-secondary">{topic.description[language]}</p>
          </div>
          <Card className="bg-elevated/75 p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-mono uppercase tracking-[0.18em] text-muted">Progress</span>
              <span className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-sm text-secondary">
                C1/C2
              </span>
            </div>
            <div className="mb-3 flex items-end justify-between">
              <span className="text-4xl font-semibold tracking-[-0.06em] text-primary">{progress}%</span>
              <span className="font-mono text-sm text-secondary">
                {answeredCount}/{topic.prompts.length}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full bg-accent-violet transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </Card>
        </div>
      </div>

      <div className="space-y-5">
        {topic.prompts.map((prompt, index) => (
          <Card key={prompt.id} className="overflow-hidden bg-surface/70">
            <CardHeader className="relative pb-4">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs font-mono text-secondary">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-3 py-1 text-xs font-mono text-accent-cyan">
                      {t(`translationPractice.stance.${prompt.stance}`)}
                    </span>
                    <span className="rounded-full border border-accent-violet/20 bg-accent-violet/10 px-3 py-1 text-xs font-mono text-accent-violet">
                      {prompt.label[language]}
                    </span>
                  </div>
                  <CardTitle className="font-serif text-2xl leading-10 tracking-[-0.01em] text-primary">
                    {prompt.source[language]}
                  </CardTitle>
                </div>
                <Languages className="mt-2 h-6 w-6 shrink-0 text-accent-violet" />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <textarea
                ref={index === 0 ? firstTextareaRef : undefined}
                data-translation-input="true"
                value={answers[prompt.id] || ''}
                onChange={(event) => {
                  const value = event.target.value
                  setAnswers((previous) => ({ ...previous, [prompt.id]: value }))
                }}
                disabled={isSubmitted}
                placeholder={t('translationPractice.inputPlaceholder')}
                className="min-h-36 w-full resize-y rounded-3xl border border-line bg-elevated px-5 py-4 font-mono text-base leading-7 text-primary outline-none transition-all placeholder:text-muted focus:border-accent-violet/60 focus:ring-2 focus:ring-accent-violet/25 disabled:opacity-70"
              />

              {isSubmitted && (
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-3xl border border-accent-green/20 bg-accent-green/10 p-5">
                    <div className="mb-3 flex items-center gap-2 text-accent-green">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-mono text-sm uppercase tracking-[0.16em]">C1</span>
                    </div>
                    <p className="font-serif text-lg leading-8 text-primary">{prompt.references.c1}</p>
                  </div>
                  <div className="rounded-3xl border border-accent-violet/20 bg-accent-violet/10 p-5">
                    <div className="mb-3 flex items-center gap-2 text-accent-violet">
                      <Sparkles className="h-5 w-5" />
                      <span className="font-mono text-sm uppercase tracking-[0.16em]">C2</span>
                    </div>
                    <p className="font-serif text-lg leading-8 text-primary">{prompt.references.c2}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {!isSubmitted && (
        <div className="sticky bottom-4 z-10 mt-6 flex items-center justify-between gap-4 rounded-3xl border border-line bg-canvas/80 p-4 backdrop-blur-2xl">
          <div className="flex items-center gap-3 text-sm text-secondary">
            <Keyboard className="h-4 w-4 text-accent-cyan" />
            <span><span className="font-mono text-primary">⌘/Ctrl Enter</span> {t('translationPractice.shortcutSubmit')}</span>
            <span className="text-muted">·</span>
            <span><span className="font-mono text-primary">Alt N</span> {t('translationPractice.shortcutNext')}</span>
            <span className="text-muted">·</span>
            <span><span className="font-mono text-primary">Esc</span> {t('translationPractice.shortcutBack')}</span>
          </div>
          <Button onClick={handleSubmit} size="lg">
            {t('translationPractice.submit')}
          </Button>
        </div>
      )}
    </div>
  )
}

export default TranslationPractice
