import React, { useState, useRef, useEffect } from 'react'
import { clsx } from 'clsx'

interface ClozeInputProps {
  id: string
  infinitive: string
  correctAnswer: string
  onCorrect: (id: string) => void
  onChange?: (id: string, value: string) => void
  disabled?: boolean
}

const ClozeInput: React.FC<ClozeInputProps> = ({
  id,
  infinitive,
  correctAnswer,
  onCorrect,
  onChange,
  disabled = false,
}) => {
  const [value, setValue] = useState('')
  const [isCorrect, setIsCorrect] = useState(false)
  const [hasTried, setHasTried] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const playDingSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.value = 880 // A5 note
      oscillator.type = 'sine'

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.2)
    } catch (error) {
      console.error('Failed to play sound:', error)
    }
  }

  const focusNextInput = () => {
    const inputs = Array.from(
      document.querySelectorAll<HTMLInputElement>('input[data-cloze-input="true"]:not(:disabled)')
    )
    const currentIndex = inputs.findIndex((input) => input === inputRef.current)
    const nextInput = inputs[currentIndex + 1]
    nextInput?.focus()
    nextInput?.select()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isCorrect) return

    const newValue = e.target.value
    setValue(newValue)
    setHasTried(false)
    onChange?.(id, newValue)

    if (newValue === correctAnswer) {
      setIsCorrect(true)
      playDingSound()
      onCorrect(id)
      window.setTimeout(focusNextInput, 80)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setHasTried(true)
      focusNextInput()
    }
  }

  useEffect(() => {
    if (!isCorrect && !disabled) {
      inputRef.current?.focus()
    }
  }, [isCorrect, disabled])

  const normalizedValue = value.trim().toLocaleLowerCase()
  const normalizedAnswer = correctAnswer.toLocaleLowerCase()
  const isOffTrack = normalizedValue.length > 0 && !normalizedAnswer.startsWith(normalizedValue)
  const hasError = !isCorrect && normalizedValue.length > 0 && (hasTried || isOffTrack)

  return (
    <span className="relative inline-flex mx-1 align-baseline">
      <input
        ref={inputRef}
        type="text"
        data-cloze-input="true"
        value={isCorrect ? correctAnswer : value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={() => setHasTried(true)}
        disabled={isCorrect || disabled}
        aria-invalid={hasError}
        className={clsx(
          'inline-block min-w-[8.5rem] rounded-2xl border px-4 py-2 text-center font-mono text-xl leading-none transition-all duration-200 focus:outline-none focus:ring-2',
          isCorrect
            ? 'border-accent-green/70 bg-accent-green/15 text-accent-green shadow-glow animate-soft-pop'
            : hasError
            ? 'border-feedback-error/70 bg-feedback-error/10 text-primary focus:ring-feedback-error/35'
            : 'border-line bg-elevated text-primary placeholder:text-muted focus:border-accent-cyan/60 focus:ring-accent-cyan/25'
        )}
        placeholder={`(${infinitive})`}
      />
      {hasError && (
        <span className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-mono text-feedback-error">
          check form
        </span>
      )}
    </span>
  )
}

export default ClozeInput
