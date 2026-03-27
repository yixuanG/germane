import React from 'react'
import type { Sentence } from '@shared/types'
import ClozeInput from './ClozeInput'

interface SentenceDisplayProps {
  sentence: Sentence
  onBlankCorrect: (id: string) => void
  onBlankChange?: (id: string, value: string) => void
  disabled?: boolean
}

const SentenceDisplay: React.FC<SentenceDisplayProps> = ({
  sentence,
  onBlankCorrect,
  onBlankChange,
  disabled = false,
}) => {
  return (
    <span className="leading-relaxed">
      {sentence.parts.map((part, index) => {
        if (part.type === 'text') {
          return <span key={`text-${index}`}>{part.content}</span>
        }
        return (
          <ClozeInput
            key={part.id}
            id={part.id}
            infinitive={part.infinitive}
            correctAnswer={part.correctAnswer}
            onCorrect={onBlankCorrect}
            onChange={onBlankChange}
            disabled={disabled}
          />
        )
      })}
    </span>
  )
}

export default SentenceDisplay
