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
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('mistakes.title')}</h1>
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-gray-500 text-lg">{t('mistakes.noMistakes')}</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('mistakes.title')}</h1>

      {unreviewedMistakes.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            To Review ({unreviewedMistakes.length})
          </h2>
          <div className="space-y-4">
            {unreviewedMistakes.map((mistake) => (
              <Card key={mistake.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-gray-500" />
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
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 italic">"{mistake.sentence}"</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-gray-500">{t('mistakes.infinitive')}:</span>
                      <p className="font-medium">{mistake.infinitive}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">{t('mistakes.correctForm')}:</span>
                      <p className="font-medium text-green-700">{mistake.correctForm}</p>
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
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Reviewed ({reviewedMistakes.length})
          </h2>
          <div className="space-y-3 opacity-75">
            {reviewedMistakes.map((mistake) => (
              <Card key={mistake.id} className="bg-gray-50">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base text-gray-600">
                      {mistake.articleTitle}
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteMistake(mistake.id)}
                      className="text-gray-400 hover:text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="text-gray-600 text-sm">{mistake.sentence}</p>
                  <div className="flex gap-4 mt-2 text-sm">
                    <span className="text-gray-500">{mistake.infinitive}</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-green-600">{mistake.correctForm}</span>
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
