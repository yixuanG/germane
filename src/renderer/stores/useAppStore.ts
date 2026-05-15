import { create } from 'zustand'
import type { Article, MistakeRecord, PracticeAttempt } from '@shared/types'

interface AppState {
  articles: Article[]
  mistakes: MistakeRecord[]
  attempts: PracticeAttempt[]
  currentArticle: Article | null
  isLoading: boolean
  setArticles: (articles: Article[]) => void
  setMistakes: (mistakes: MistakeRecord[]) => void
  setAttempts: (attempts: PracticeAttempt[]) => void
  setCurrentArticle: (article: Article | null) => void
  setIsLoading: (loading: boolean) => void
  addMistake: (mistake: MistakeRecord) => void
  removeMistake: (id: string) => void
  markMistakeReviewed: (id: string) => void
  addAttempt: (attempt: PracticeAttempt) => void
}

export const useAppStore = create<AppState>((set) => ({
  articles: [],
  mistakes: [],
  attempts: [],
  currentArticle: null,
  isLoading: false,

  setArticles: (articles) => set({ articles }),
  setMistakes: (mistakes) => set({ mistakes }),
  setAttempts: (attempts) => set({ attempts }),
  setCurrentArticle: (article) => set({ currentArticle: article }),
  setIsLoading: (loading) => set({ isLoading: loading }),

  addMistake: (mistake) =>
    set((state) => ({ mistakes: [...state.mistakes, mistake] })),

  removeMistake: (id) =>
    set((state) => ({
      mistakes: state.mistakes.filter((m) => m.id !== id),
    })),

  markMistakeReviewed: (id) =>
    set((state) => ({
      mistakes: state.mistakes.map((m) =>
        m.id === id ? { ...m, reviewedAt: Date.now() } : m
      ),
    })),

  addAttempt: (attempt) =>
    set((state) => ({ attempts: [...state.attempts, attempt] })),
}))
