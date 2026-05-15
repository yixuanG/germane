import React, { useMemo, useRef, useState } from 'react'
import { clsx } from 'clsx'

interface PrepositionBlankInputProps {
  id: string
  answer: string
  acceptedAnswers?: string[]
  hint: string
  explanation?: string
  onCorrect: (id: string) => void
  onChange?: (id: string, value: string) => void
  disabled?: boolean
  revealAnswer?: boolean
}

const normalizeAnswer = (answer: string) =>
  answer.trim().replace(/\s+/g, ' ').toLocaleLowerCase()

const playDingSound = () => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.frequency.value = 880
    oscillator.type = 'sine'

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.2)
  } catch (error) {
    console.error('Failed to play sound:', error)
  }
}

const PrepositionBlankInput: React.FC<PrepositionBlankInputProps> = ({
  id,
  answer,
  acceptedAnswers = [],
  hint,
  explanation,
  onCorrect,
  onChange,
  disabled = false,
  revealAnswer = false,
}) => {
  const [value, setValue] = useState('')
  const [isCorrect, setIsCorrect] = useState(false)
  const [hasTried, setHasTried] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const accepted = useMemo(
    () => [answer, ...acceptedAnswers].map(normalizeAnswer),
    [acceptedAnswers, answer]
  )

  const focusNextInput = () => {
    const inputs = Array.from(
      document.querySelectorAll<HTMLInputElement>('input[data-preposition-input="true"]:not(:disabled)')
    )
    const currentIndex = inputs.findIndex((input) => input === inputRef.current)
    const nextInput = inputs[currentIndex + 1]
    nextInput?.focus()
    nextInput?.select()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isCorrect || disabled) return

    const nextValue = event.target.value
    setValue(nextValue)
    setHasTried(false)
    onChange?.(id, nextValue)

    if (accepted.includes(normalizeAnswer(nextValue))) {
      setIsCorrect(true)
      playDingSound()
      onCorrect(id)
      window.setTimeout(focusNextInput, 80)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      setHasTried(true)
      focusNextInput()
    }
  }

  const normalizedValue = normalizeAnswer(value)
  const looksOffTrack =
    normalizedValue.length > 0 &&
    !accepted.some((acceptedAnswer) => acceptedAnswer.startsWith(normalizedValue))
  const hasError = !isCorrect && normalizedValue.length > 0 && (hasTried || looksOffTrack)
  const showAnswer = revealAnswer && !isCorrect

  return (
    <span className="relative inline-flex mx-1 align-baseline">
      <span className="inline-flex flex-col items-center gap-1 align-baseline">
        <input
          ref={inputRef}
          type="text"
          data-preposition-input="true"
          value={isCorrect ? answer : value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={() => setHasTried(true)}
          disabled={isCorrect || disabled}
          aria-invalid={hasError}
          aria-label={hint}
          title={hint}
          className={clsx(
            'inline-block w-[8.75rem] rounded-2xl border px-4 py-2 text-center font-mono text-xl leading-none transition-all duration-200 focus:outline-none focus:ring-2',
            isCorrect
              ? 'border-accent-green/70 bg-accent-green/15 text-accent-green shadow-glow animate-soft-pop'
              : hasError || showAnswer
              ? 'border-feedback-error/70 bg-feedback-error/10 text-primary focus:ring-feedback-error/35'
              : 'border-line bg-elevated text-primary placeholder:text-muted focus:border-accent-cyan/60 focus:ring-accent-cyan/25'
          )}
          placeholder="..."
        />
        {isCorrect && explanation && (
          <span className="max-w-[18rem] rounded-xl border border-line bg-canvas/85 px-3 py-1 text-center text-[11px] leading-4 text-secondary shadow-violet">
            {explanation}
          </span>
        )}
        {showAnswer && (
          <span className="rounded-xl border border-feedback-error/20 bg-feedback-error/10 px-3 py-1 text-[11px] font-mono text-feedback-error">
            {answer}
          </span>
        )}
        {hasError && !showAnswer && (
          <span className="text-[11px] font-mono text-feedback-error">
            check form
          </span>
        )}
      </span>
    </span>
  )
}

export default PrepositionBlankInput
