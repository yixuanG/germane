import React from 'react'
import { useTranslation } from 'react-i18next'
import { BookMarked } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Vocabulary: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('nav.vocabulary')}</h1>

      <Card>
        <CardHeader className="text-center">
          <BookMarked className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <CardTitle>Coming Soon!</CardTitle>
        </CardHeader>
        <CardContent className="text-center text-gray-500">
          <p>The vocabulary module is currently under development.</p>
          <p className="mt-2">Check back later for updates!</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Vocabulary
