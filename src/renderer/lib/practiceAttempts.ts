import type { PracticeAttempt, PracticeType } from '@shared/types'

export const getLatestAttempt = (
  attempts: PracticeAttempt[],
  practiceType: PracticeType,
  exerciseId: string
) =>
  attempts
    .filter((attempt) => attempt.practiceType === practiceType && attempt.exerciseId === exerciseId)
    .sort((left, right) => right.completedAt - left.completedAt)[0]

export const formatAttemptDate = (completedAt: number) =>
  new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(completedAt)
