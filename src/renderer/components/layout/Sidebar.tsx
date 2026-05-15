import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BookOpen, FileText, AlertCircle, BookMarked, Settings, Sparkles, Languages, MapPinned } from 'lucide-react'

const Sidebar: React.FC = () => {
  const { t } = useTranslation()

  const navItems = [
    { to: '/', icon: BookOpen, label: t('nav.home') },
    { to: '/practice', icon: FileText, label: t('nav.practice') },
    { to: '/translation', icon: Languages, label: t('nav.translation') },
    { to: '/prepositions', icon: MapPinned, label: t('nav.prepositions') },
    { to: '/mistakes', icon: AlertCircle, label: t('nav.mistakes') },
    { to: '/vocabulary', icon: BookMarked, label: t('nav.vocabulary'), disabled: true },
    { to: '/settings', icon: Settings, label: t('nav.settings') },
  ]

  return (
    <div className="w-72 border-r border-line bg-canvas/55 h-full flex flex-col backdrop-blur-2xl">
      <div className="p-6 border-b border-line">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-accent-green/20 bg-accent-green/10 shadow-glow">
            <Sparkles className="w-5 h-5 text-accent-green" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-[-0.04em] text-primary">{t('app.title')}</h1>
            <p className="text-sm text-secondary mt-0.5">{t('app.subtitle')}</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all ${
                item.disabled
                  ? 'border-transparent text-muted cursor-not-allowed'
                  : isActive
                  ? 'border-accent-violet/25 bg-elevated text-primary shadow-violet'
                  : 'border-transparent text-secondary hover:border-line hover:bg-white/[0.035] hover:text-primary'
              }`
            }
            onClick={(e) => item.disabled && e.preventDefault()}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
            {item.disabled && (
              <span className="ml-auto text-xs bg-white/[0.04] text-muted px-2 py-0.5 rounded-full">
                Soon
              </span>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
