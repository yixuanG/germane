import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { BookOpen } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/stores/useAppStore'
import { useDatabase } from '@/hooks/useDatabase'
import { browserDb } from '@/lib/browserDatabase'

const ArticleList: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { articles, isLoading } = useAppStore()
  const { loadArticles, insertArticles, clearArticles } = useDatabase()

  useEffect(() => {
    loadArticles()
  }, [loadArticles])

  const handleSeedDatabase = async () => {
    const seedData = await browserDb.getArticles()
    await clearArticles()
    await insertArticles(seedData)
  }

  const difficultyColors: Record<string, string> = {
    A2: 'bg-blue-100 text-blue-800',
    B1: 'bg-purple-100 text-purple-800',
  }

  if (isLoading) {
    return (
      <div className="p-8 flex items-center justify-center">
        <p>{t('common.loading')}</p>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t('practice.selectArticle')}</h1>
        {articles.length === 0 && (
          <Button onClick={handleSeedDatabase}>Load Sample Articles</Button>
        )}
      </div>

      {articles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">{t('common.noData')}</p>
          <Button onClick={handleSeedDatabase}>Load Sample Articles</Button>
        </div>
      ) : (
        <div className="grid gap-4">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => navigate(`/practice/${article.id}`)}
            >
              <CardHeader className="flex flex-row items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-gray-500" />
                    {article.title}
                  </CardTitle>
                  <CardDescription>{article.topic}</CardDescription>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    difficultyColors[article.difficulty] || 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {article.difficulty}
                </span>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default ArticleList
