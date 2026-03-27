import { create } from 'zustand'
import type { Article, MistakeRecord } from '@shared/types'

interface AppState {
  articles: Article[]
  mistakes: MistakeRecord[]
  currentArticle: Article | null
  isLoading: boolean
  setArticles: (articles: Article[]) => void
  setMistakes: (mistakes: MistakeRecord[]) => void
  setCurrentArticle: (article: Article | null) => void
  setIsLoading: (loading: boolean) => void
  addMistake: (mistake: MistakeRecord) => void
  removeMistake: (id: string) => void
  markMistakeReviewed: (id: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  articles: [],
  mistakes: [],
  currentArticle: null,
  isLoading: false,

  setArticles: (articles) => set({ articles }),
  setMistakes: (mistakes) => set({ mistakes }),
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
}))
