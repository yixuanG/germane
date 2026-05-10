import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, BookOpen, AlertCircle, Keyboard, Target, Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Home: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className="min-h-full px-8 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-green/20 bg-accent-green/10 px-3 py-1.5 text-sm font-medium text-accent-green">
            <Target className="h-4 w-4" />
            Focused German grammar practice
          </div>
          <h1 className="text-6xl font-bold tracking-[-0.06em] leading-[0.95] text-primary text-balance">
            {t('home.welcome')}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-secondary">
            {t('home.description')}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <Card
            className="group relative overflow-hidden cursor-pointer border-accent-violet/20 bg-elevated/80"
            onClick={() => navigate('/practice')}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(167,139,250,0.18),transparent_24rem)] opacity-80" />
            <CardHeader className="relative pb-4">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-violet/25 bg-accent-violet/10">
                <BookOpen className="w-7 h-7 text-accent-violet" />
              </div>
              <CardTitle className="text-4xl">{t('practice.title')}</CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <p className="mb-8 max-w-xl text-lg leading-8 text-secondary">
                Practice German past tense with spacious cloze exercises, instant signal, and zero visual clutter.
              </p>
              <Button size="lg" className="group-hover:translate-x-1">
                {t('home.startPractice')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </CardContent>
          </Card>

          <Card
            className="group relative overflow-hidden cursor-pointer border-accent-cyan/20 bg-elevated/80"
            onClick={() => navigate('/translation')}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(103,232,249,0.14),transparent_24rem)] opacity-80" />
            <CardHeader className="relative pb-4">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-cyan/25 bg-accent-cyan/10">
                <Languages className="w-7 h-7 text-accent-cyan" />
              </div>
              <CardTitle className="text-4xl">{t('translationPractice.title')}</CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <p className="mb-8 max-w-xl text-lg leading-8 text-secondary">
                {t('translationPractice.homeDescription')}
              </p>
              <Button size="lg" className="group-hover:translate-x-1">
                {t('translationPractice.start')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <Card
            className="cursor-pointer transition-all hover:border-feedback-warning/30 hover:bg-elevated"
            onClick={() => navigate('/mistakes')}
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 bg-feedback-warning/10 rounded-2xl border border-feedback-warning/20">
                <AlertCircle className="w-7 h-7 text-feedback-warning" />
              </div>
              <div>
                <CardTitle className="text-2xl">{t('mistakes.title')}</CardTitle>
                <p className="mt-2 text-secondary">
                  Review weak spots with calm, readable context.
                </p>
              </div>
            </CardHeader>
          </Card>

          <Card className="bg-surface/70">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 bg-accent-cyan/10 rounded-2xl border border-accent-cyan/20">
                <Keyboard className="w-7 h-7 text-accent-cyan" />
              </div>
              <div>
                <CardTitle className="text-2xl">Keyboard-first</CardTitle>
                <p className="mt-2 text-secondary">
                  Submit with <span className="font-mono text-primary">⌘/Ctrl Enter</span>, move fast with focused inputs.
                </p>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Home
