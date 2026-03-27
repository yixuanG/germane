import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { BookOpen, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Home: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t('home.welcome')}
        </h1>
        <p className="text-lg text-gray-600">{t('home.description')}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/practice')}>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <CardTitle>{t('practice.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Practice German past tense with engaging cloze tests.
            </p>
            <Button>{t('home.startPractice')}</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/mistakes')}>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-3 bg-amber-100 rounded-lg">
              <AlertCircle className="w-8 h-8 text-amber-600" />
            </div>
            <CardTitle>{t('mistakes.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Review your mistakes and track your learning progress.
            </p>
            <Button variant="outline">{t('home.viewMistakes')}</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home
