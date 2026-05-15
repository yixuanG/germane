import React from 'react'
import type { PrepositionParagraph } from '@shared/types'
import PrepositionBlankInput from './PrepositionBlankInput'

interface PrepositionTextDisplayProps {
  paragraph: PrepositionParagraph
  onBlankCorrect: (id: string) => void
  onBlankChange?: (id: string, value: string) => void
  disabled?: boolean
  revealAnswers?: boolean
}

const PrepositionTextDisplay: React.FC<PrepositionTextDisplayProps> = ({
  paragraph,
  onBlankCorrect,
  onBlankChange,
  disabled = false,
  revealAnswers = false,
}) => {
  return (
    <p className="font-serif text-2xl leading-[2.35] tracking-[-0.01em] text-primary">
      {paragraph.parts.map((part, index) => {
        if (part.type === 'text') {
          return <span key={`text-${index}`}>{part.content}</span>
        }

        return (
          <PrepositionBlankInput
            key={part.id}
            id={part.id}
            answer={part.answer}
            acceptedAnswers={part.acceptedAnswers}
            hint={part.hint}
            explanation={part.explanation}
            onCorrect={onBlankCorrect}
            onChange={onBlankChange}
            disabled={disabled}
            revealAnswer={revealAnswers}
          />
        )
      })}
    </p>
  )
}

export default PrepositionTextDisplay
