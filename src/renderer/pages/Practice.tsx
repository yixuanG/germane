import React, { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
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

  const getAllBlanks = (): BlankPart[] => {
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
  }

  const reconstructSentence = (parts: SentencePart[]): string => {
    return parts
      .map((part) => {
        if (part.type === 'text') return part.content
        return `___ (${part.infinitive}) ___`
      })
      .join('')
  }

  const handleSubmit = async () => {
    if (!article) return

    setIsSubmitted(true)

    const allBlanks = getAllBlanks()
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
  }

  const isAllCorrect = correctBlanks.size === getAllBlanks().length

  if (!article) {
    return (
      <div className="p-8 flex items-center justify-center">
        <p>{t('common.loading')}</p>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-6">
        <Button variant="ghost" onClick={() => navigate('/practice')} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('common.back')}
        </Button>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{article.title}</h1>
            <p className="text-gray-600">{article.topic}</p>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              article.difficulty === 'A2'
                ? 'bg-blue-100 text-blue-800'
                : 'bg-purple-100 text-purple-800'
            }`}
          >
            {article.difficulty}
          </span>
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          {article.paragraphs.map((paragraph) => (
            <div key={paragraph.id} className="mb-6 last:mb-0">
              {paragraph.sentences.map((sentence) => (
                <p key={sentence.id} className="mb-3 text-lg">
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
        </CardContent>
      </Card>

      {!isSubmitted && (
        <div className="flex justify-end gap-4">
          <Button onClick={handleSubmit} size="lg">
            {t('practice.submitArticle')}
          </Button>
        </div>
      )}

      {showResult && (
        <Card className={isAllCorrect ? 'border-green-500' : 'border-amber-500'}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {isAllCorrect ? (
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              ) : (
                <CheckCircle2 className="w-6 h-6 text-amber-600" />
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
