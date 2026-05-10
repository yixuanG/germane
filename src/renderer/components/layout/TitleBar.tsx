import React from 'react'
import { Minus, Square, X } from 'lucide-react'

const isElectron = typeof window !== 'undefined' && 'api' in window

const TitleBar: React.FC = () => {
  if (!isElectron) {
    return null
  }

  const handleMinimize = () => {
    window.api?.window?.minimize?.()
  }

  const handleMaximize = () => {
    window.api?.window?.maximize?.()
  }

  const handleClose = () => {
    window.api?.window?.close?.()
  }

  return (
    <div className="h-12 bg-canvas/80 border-b border-line flex items-center justify-between drag-region select-none backdrop-blur-2xl">
      <div className="flex items-center px-4">
        <span className="font-semibold text-secondary">Germane</span>
      </div>
      <div className="flex items-center no-drag-region">
        <button
          onClick={handleMinimize}
          className="w-12 h-full flex items-center justify-center hover:bg-white/[0.04] transition-colors"
          aria-label="Minimize"
        >
          <Minus className="w-4 h-4 text-secondary" />
        </button>
        <button
          onClick={handleMaximize}
          className="w-12 h-full flex items-center justify-center hover:bg-white/[0.04] transition-colors"
          aria-label="Maximize"
        >
          <Square className="w-4 h-4 text-secondary" />
        </button>
        <button
          onClick={handleClose}
          className="w-12 h-full flex items-center justify-center hover:bg-feedback-error/90 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-secondary" />
        </button>
      </div>
    </div>
  )
}

export default TitleBar
