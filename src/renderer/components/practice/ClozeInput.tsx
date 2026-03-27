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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isCorrect) return

    const newValue = e.target.value
    setValue(newValue)
    onChange?.(id, newValue)

    if (newValue === correctAnswer) {
      setIsCorrect(true)
      playDingSound()
      onCorrect(id)
    }
  }

  useEffect(() => {
    if (!isCorrect && !disabled) {
      inputRef.current?.focus()
    }
  }, [isCorrect, disabled])

  return (
    <span className="inline-block mx-1">
      <input
        ref={inputRef}
        type="text"
        value={isCorrect ? correctAnswer : value}
        onChange={handleChange}
        disabled={isCorrect || disabled}
        className={clsx(
          'inline-block px-2 py-1 border-b-2 text-center min-w-[80px] transition-all',
          isCorrect
            ? 'bg-green-100 border-green-500 text-green-800 font-medium'
            : 'bg-white border-gray-300 focus:border-blue-500 focus:outline-none text-gray-900'
        )}
        placeholder={`(${infinitive})`}
      />
    </span>
  )
}

export default ClozeInput
