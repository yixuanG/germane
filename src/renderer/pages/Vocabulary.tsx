import React from 'react'
import { useTranslation } from 'react-i18next'
import { BookMarked } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Vocabulary: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="px-8 py-10 max-w-4xl mx-auto">
      <div className="mb-8">
        <p className="mb-3 text-sm font-mono uppercase tracking-[0.22em] text-accent-cyan">
          Roadmap
        </p>
        <h1 className="text-5xl font-bold tracking-[-0.055em] text-primary">{t('nav.vocabulary')}</h1>
      </div>

      <Card>
        <CardHeader className="text-center">
          <BookMarked className="w-16 h-16 text-accent-cyan mx-auto mb-4" />
          <CardTitle className="text-3xl">Coming Soon!</CardTitle>
        </CardHeader>
        <CardContent className="text-center text-secondary text-lg">
          <p>The vocabulary module is currently under development.</p>
          <p className="mt-2">Check back later for updates!</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Vocabulary
