import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BookOpen, FileText, AlertCircle, BookMarked, Settings } from 'lucide-react'

const Sidebar: React.FC = () => {
  const { t } = useTranslation()

  const navItems = [
    { to: '/', icon: BookOpen, label: t('nav.home') },
    { to: '/practice', icon: FileText, label: t('nav.practice') },
    { to: '/mistakes', icon: AlertCircle, label: t('nav.mistakes') },
    { to: '/vocabulary', icon: BookMarked, label: t('nav.vocabulary'), disabled: true },
    { to: '/settings', icon: Settings, label: t('nav.settings') },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">{t('app.title')}</h1>
        <p className="text-sm text-gray-500 mt-1">{t('app.subtitle')}</p>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                item.disabled
                  ? 'text-gray-300 cursor-not-allowed'
                  : isActive
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
            onClick={(e) => item.disabled && e.preventDefault()}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
            {item.disabled && (
              <span className="ml-auto text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded">
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
