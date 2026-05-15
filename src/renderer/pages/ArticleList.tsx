import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, BookOpen, CheckCircle2, Database } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/stores/useAppStore'
import { useDatabase } from '@/hooks/useDatabase'
import { browserDb } from '@/lib/browserDatabase'
import { getLatestAttempt, formatAttemptDate } from '@/lib/practiceAttempts'

const ArticleList: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { articles, attempts, isLoading } = useAppStore()
  const { loadArticles, insertArticles, clearArticles, loadAttempts } = useDatabase()

  useEffect(() => {
    loadArticles()
    loadAttempts()
  }, [loadArticles, loadAttempts])

  const handleSeedDatabase = async () => {
    const seedData = await browserDb.getArticles()
    await clearArticles()
    await insertArticles(seedData)
  }

  const difficultyColors: Record<string, string> = {
    A2: 'border-accent-cyan/25 bg-accent-cyan/10 text-accent-cyan',
    B1: 'border-accent-violet/25 bg-accent-violet/10 text-accent-violet',
    B2: 'border-accent-green/25 bg-accent-green/10 text-accent-green',
  }

  if (isLoading) {
    return (
      <div className="p-8 flex items-center justify-center">
        <p className="text-secondary">{t('common.loading')}</p>
      </div>
    )
  }

  return (
    <div className="px-8 py-10 max-w-5xl mx-auto">
      <div className="flex items-end justify-between gap-6 mb-8">
        <div>
          <p className="mb-3 text-sm font-mono uppercase tracking-[0.22em] text-accent-cyan">
            Practice Library
          </p>
          <h1 className="text-5xl font-bold tracking-[-0.055em] text-primary">
            {t('practice.selectArticle')}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-secondary">
            Choose a focused text and complete each cloze without unnecessary distraction.
          </p>
        </div>
        {articles.length === 0 && (
          <Button onClick={handleSeedDatabase}>
            <Database className="w-4 h-4" />
            Load Sample Articles
          </Button>
        )}
      </div>

      {articles.length === 0 ? (
        <Card className="border-dashed">
          <div className="text-center py-16 px-6">
            <p className="text-secondary mb-5 text-lg">{t('common.noData')}</p>
            <Button onClick={handleSeedDatabase}>
              <Database className="w-4 h-4" />
              Load Sample Articles
            </Button>
          </div>
        </Card>
      ) : (
        <div className="grid gap-4">
          {articles.map((article) => {
            const attempt = getLatestAttempt(attempts, 'past-tense', article.id)

            return (
            <Card
              key={article.id}
              className="group cursor-pointer overflow-hidden transition-all hover:-translate-y-0.5 hover:border-accent-green/20 hover:bg-elevated"
              onClick={() => navigate(`/practice/${article.id}`)}
            >
              <CardHeader className="flex flex-row items-center justify-between gap-5">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-line bg-white/[0.03]">
                    <BookOpen className="w-5 h-5 text-accent-green" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-base">{article.topic}</CardDescription>
                    <p className={`mt-3 flex items-center gap-2 text-sm ${attempt ? 'text-accent-green' : 'text-muted'}`}>
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
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full border px-3 py-1 text-sm font-mono font-medium ${
                      difficultyColors[article.difficulty] || 'border-line bg-white/[0.03] text-secondary'
                    }`}
                  >
                    {article.difficulty}
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted transition-all group-hover:translate-x-1 group-hover:text-accent-green" />
                </div>
              </CardHeader>
            </Card>
          )})}
        </div>
      )}
    </div>
  )
}

export default ArticleList
