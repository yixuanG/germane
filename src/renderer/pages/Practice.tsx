import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Keyboard, Sparkles, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SentenceDisplay from '@/components/practice/SentenceDisplay'
import { useAppStore } from '@/stores/useAppStore'
import { useDatabase } from '@/hooks/useDatabase'
import type { Article, BlankPart, MistakeRecord, SentencePart } from '@shared/types'

const Practice: React.FC = () => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { setCurrentArticle } = useAppStore()
  const { loadArticleById, insertMistakes } = useDatabase()

  const [article, setArticle] = useState<Article | null>(null)
  const [correctBlanks, setCorrectBlanks] = useState<Set<string>>(new Set())
  const [userAnswers, setUserAnswers] = useState<Map<string, string>>(new Map())
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    if (id) {
      loadArticleById(id).then((a) => {
        if (a) {
          setArticle(a)
          setCurrentArticle(a)
        }
      })
    }
  }, [id, loadArticleById, setCurrentArticle])

  const allBlanks = useMemo(() => {
    if (!article) return []
    const blanks: BlankPart[] = []
    article.paragraphs.forEach((p) => {
      p.sentences.forEach((s) => {
        s.parts.forEach((part) => {
          if (part.type === 'blank') {
            blanks.push(part)
          }
        })
      })
    })
    return blanks
  }, [article])

  const handleBlankCorrect = useCallback((blankId: string) => {
    setCorrectBlanks((prev) => new Set([...prev, blankId]))
  }, [])

  const handleBlankChange = useCallback((blankId: string, value: string) => {
    setUserAnswers((prev) => {
      const next = new Map(prev)
      next.set(blankId, value)
      return next
    })
  }, [])

  const reconstructSentence = useCallback((parts: SentencePart[]): string => {
    return parts
      .map((part) => {
        if (part.type === 'text') return part.content
        return `___ (${part.infinitive}) ___`
      })
      .join('')
  }, [])

  const handleSubmit = useCallback(async () => {
    if (!article) return

    setIsSubmitted(true)

    const mistakes: MistakeRecord[] = []

    allBlanks.forEach((blank) => {
      if (!correctBlanks.has(blank.id)) {
        // Find the sentence this blank belongs to
        for (const paragraph of article.paragraphs) {
          for (const sentence of paragraph.sentences) {
            const hasBlank = sentence.parts.some(
              (p) => p.type === 'blank' && p.id === blank.id
            )
            if (hasBlank) {
              mistakes.push({
                id: `mistake-${Date.now()}-${blank.id}`,
                articleId: article.id,
                articleTitle: article.title,
                sentence: reconstructSentence(sentence.parts),
                infinitive: blank.infinitive,
                correctForm: blank.correctAnswer,
                userAnswer: userAnswers.get(blank.id) || '',
                createdAt: Date.now(),
              })
              break
            }
          }
        }
      }
    })

    if (mistakes.length > 0) {
      await insertMistakes(mistakes)
    }

    setShowResult(true)
  }, [article, allBlanks, correctBlanks, insertMistakes, reconstructSentence, userAnswers])

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
        navigate('/practice')
      }

      if (event.altKey && event.key.toLowerCase() === 'n') {
        event.preventDefault()
        const inputs = Array.from(
          document.querySelectorAll<HTMLInputElement>('input[data-cloze-input="true"]:not(:disabled)')
        )
        const currentIndex = inputs.findIndex((input) => input === document.activeElement)
        const nextInput = inputs[(currentIndex + 1 + inputs.length) % inputs.length]
        nextInput?.focus()
        nextInput?.select()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleSubmit, isSubmitted, navigate])

  const isAllCorrect = allBlanks.length > 0 && correctBlanks.size === allBlanks.length
  const progress = allBlanks.length > 0 ? Math.round((correctBlanks.size / allBlanks.length) * 100) : 0

  if (!article) {
    return (
      <div className="p-8 flex items-center justify-center">
        <p className="text-secondary">{t('common.loading')}</p>
      </div>
    )
  }

  return (
    <div className="px-8 py-8 max-w-6xl mx-auto">
      <div className="mb-6">
        <Button variant="ghost" onClick={() => navigate('/practice')} className="mb-5">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('common.back')}
        </Button>
        <div className="grid gap-5 lg:grid-cols-[1fr_18rem]">
          <div>
            <p className="mb-3 text-sm font-mono uppercase tracking-[0.22em] text-accent-green">
              Focus Session
            </p>
            <h1 className="text-5xl font-bold tracking-[-0.055em] leading-[0.98] text-primary text-balance">
              {article.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-secondary">{article.topic}</p>
          </div>
          <Card className="bg-elevated/75 p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-mono uppercase tracking-[0.18em] text-muted">Progress</span>
              <span className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-sm text-secondary">
                {article.difficulty}
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
                className="h-full rounded-full bg-accent-green transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </Card>
        </div>
      </div>

      <Card className="mb-6 overflow-hidden bg-surface/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_0%,rgba(124,255,178,0.08),transparent_22rem)]" />
        <CardContent className="relative p-8 md:p-10">
          <div className="space-y-8">
            {article.paragraphs.map((paragraph) => (
              <div key={paragraph.id} className="space-y-5">
                {paragraph.sentences.map((sentence) => (
                  <p key={sentence.id} className="font-serif text-2xl leading-[2.25] tracking-[-0.01em] text-primary">
                    <SentenceDisplay
                      sentence={sentence}
                      onBlankCorrect={handleBlankCorrect}
                      onBlankChange={handleBlankChange}
                      disabled={isSubmitted}
                    />
                  </p>
                ))}
              </div>
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
              <p className="font-semibold text-accent-green">All blanks are locked in.</p>
              <p className="text-sm text-secondary">Press ⌘/Ctrl Enter to finish the article.</p>
            </div>
          </CardContent>
        </Card>
      )}

      {!isSubmitted && (
        <div className="sticky bottom-4 z-10 flex items-center justify-between gap-4 rounded-3xl border border-line bg-canvas/80 p-4 backdrop-blur-2xl">
          <div className="flex items-center gap-3 text-sm text-secondary">
            <Keyboard className="h-4 w-4 text-accent-cyan" />
            <span><span className="font-mono text-primary">⌘/Ctrl Enter</span> submit</span>
            <span className="text-muted">·</span>
            <span><span className="font-mono text-primary">Alt N</span> next blank</span>
            <span className="text-muted">·</span>
            <span><span className="font-mono text-primary">Esc</span> back</span>
          </div>
          <Button onClick={handleSubmit} size="lg">
            {t('practice.submitArticle')}
          </Button>
        </div>
      )}

      {showResult && (
        <Card className={isAllCorrect ? 'border-accent-green/40 bg-accent-green/10 animate-success-pulse' : 'border-feedback-warning/30 bg-feedback-warning/10'}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl">
              {isAllCorrect ? (
                <Trophy className="w-8 h-8 text-accent-green" />
              ) : (
                <CheckCircle2 className="w-8 h-8 text-feedback-warning" />
              )}
              {isAllCorrect
                ? t('practice.allCorrect')
                : t('practice.someMistakes')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!isAllCorrect && (
              <Button variant="outline" onClick={() => navigate('/mistakes')}>
                {t('home.viewMistakes')}
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default Practice
