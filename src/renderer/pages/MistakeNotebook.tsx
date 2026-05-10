import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Trash2, CheckCircle2, BookOpen } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/stores/useAppStore'
import { useDatabase } from '@/hooks/useDatabase'

const MistakeNotebook: React.FC = () => {
  const { t } = useTranslation()
  const { mistakes } = useAppStore()
  const { loadMistakes, deleteMistake, markAsReviewed } = useDatabase()

  useEffect(() => {
    loadMistakes()
  }, [loadMistakes])

  const unreviewedMistakes = mistakes.filter((m) => !m.reviewedAt)
  const reviewedMistakes = mistakes.filter((m) => m.reviewedAt)

  if (mistakes.length === 0) {
    return (
      <div className="px-8 py-10 max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="mb-3 text-sm font-mono uppercase tracking-[0.22em] text-feedback-warning">
            Review Queue
          </p>
          <h1 className="text-5xl font-bold tracking-[-0.055em] text-primary">{t('mistakes.title')}</h1>
        </div>
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-secondary text-lg">{t('mistakes.noMistakes')}</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="px-8 py-10 max-w-5xl mx-auto">
      <div className="mb-8">
        <p className="mb-3 text-sm font-mono uppercase tracking-[0.22em] text-feedback-warning">
          Review Queue
        </p>
        <h1 className="text-5xl font-bold tracking-[-0.055em] text-primary">{t('mistakes.title')}</h1>
      </div>

      {unreviewedMistakes.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-primary mb-4">
            To Review ({unreviewedMistakes.length})
          </h2>
          <div className="space-y-4">
            {unreviewedMistakes.map((mistake) => (
              <Card key={mistake.id} className="border-feedback-warning/15">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-feedback-warning" />
                      <CardTitle className="text-lg">{mistake.articleTitle}</CardTitle>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => markAsReviewed(mistake.id)}
                      >
                        <CheckCircle2 className="w-4 h-4 mr-1" />
                        {t('mistakes.markReviewed')}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteMistake(mistake.id)}
                        className="text-feedback-error hover:text-feedback-error"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary mb-4 italic font-serif text-lg leading-8">"{mistake.sentence}"</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-muted">{t('mistakes.infinitive')}:</span>
                      <p className="font-mono font-medium text-primary">{mistake.infinitive}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted">{t('mistakes.correctForm')}:</span>
                      <p className="font-mono font-medium text-feedback-success">{mistake.correctForm}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {reviewedMistakes.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-primary mb-4">
            Reviewed ({reviewedMistakes.length})
          </h2>
          <div className="space-y-3 opacity-75">
            {reviewedMistakes.map((mistake) => (
              <Card key={mistake.id} className="bg-surface/55">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base text-secondary">
                      {mistake.articleTitle}
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteMistake(mistake.id)}
                      className="text-muted hover:text-feedback-error"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="text-secondary text-sm">{mistake.sentence}</p>
                  <div className="flex gap-4 mt-2 text-sm">
                    <span className="text-muted font-mono">{mistake.infinitive}</span>
                    <span className="text-muted">→</span>
                    <span className="text-feedback-success font-mono">{mistake.correctForm}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MistakeNotebook
