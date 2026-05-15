import { useCallback } from 'react'
import { useAppStore } from '@/stores/useAppStore'
import type { Article, MistakeRecord, PracticeAttempt } from '@shared/types'
import { browserDb } from '@/lib/browserDatabase'

// Check if we're running in Electron
const isElectron = typeof window !== 'undefined' && 'api' in window

const getDb = () => {
  if (isElectron && window.api?.db) {
    return window.api.db
  }
  return browserDb
}

export function useDatabase() {
  const {
    setArticles,
    setMistakes,
    setAttempts,
    addMistake,
    removeMistake,
    markMistakeReviewed,
    addAttempt,
    setIsLoading,
  } = useAppStore()

  const db = getDb()

  const loadArticles = useCallback(async () => {
    setIsLoading(true)
    try {
      const articles = await db.getArticles()
      setArticles(articles)
    } catch (error) {
      console.error('Failed to load articles:', error)
    } finally {
      setIsLoading(false)
    }
  }, [setArticles, setIsLoading])

  const loadArticleById = useCallback(async (id: string) => {
    try {
      return await db.getArticleById(id)
    } catch (error) {
      console.error('Failed to load article:', error)
      return undefined
    }
  }, [])

  const insertArticles = useCallback(async (articles: Article[]) => {
    try {
      await db.insertArticles(articles)
      await loadArticles()
    } catch (error) {
      console.error('Failed to insert articles:', error)
    }
  }, [loadArticles])

  const clearArticles = useCallback(async () => {
    try {
      await db.clearArticles()
      setArticles([])
    } catch (error) {
      console.error('Failed to clear articles:', error)
    }
  }, [setArticles])

  const loadMistakes = useCallback(async () => {
    try {
      const mistakes = await db.getMistakes()
      setMistakes(mistakes)
    } catch (error) {
      console.error('Failed to load mistakes:', error)
    }
  }, [setMistakes])

  const insertMistake = useCallback(async (mistake: MistakeRecord) => {
    try {
      await db.insertMistake(mistake)
      addMistake(mistake)
    } catch (error) {
      console.error('Failed to insert mistake:', error)
    }
  }, [addMistake])

  const insertMistakes = useCallback(async (mistakes: MistakeRecord[]) => {
    try {
      await db.insertMistakes(mistakes)
      mistakes.forEach((m) => addMistake(m))
    } catch (error) {
      console.error('Failed to insert mistakes:', error)
    }
  }, [addMistake])

  const deleteMistake = useCallback(async (id: string) => {
    try {
      await db.deleteMistake(id)
      removeMistake(id)
    } catch (error) {
      console.error('Failed to delete mistake:', error)
    }
  }, [removeMistake])

  const markAsReviewed = useCallback(async (id: string) => {
    try {
      await db.markMistakeReviewed(id)
      markMistakeReviewed(id)
    } catch (error) {
      console.error('Failed to mark mistake as reviewed:', error)
    }
  }, [markMistakeReviewed])

  const loadAttempts = useCallback(async () => {
    try {
      const attempts = await db.getAttempts()
      setAttempts(attempts)
    } catch (error) {
      console.error('Failed to load attempts:', error)
    }
  }, [setAttempts])

  const insertAttempt = useCallback(async (attempt: PracticeAttempt) => {
    try {
      await db.insertAttempt(attempt)
      addAttempt(attempt)
    } catch (error) {
      console.error('Failed to insert attempt:', error)
    }
  }, [addAttempt])

  return {
    loadArticles,
    loadArticleById,
    insertArticles,
    clearArticles,
    loadMistakes,
    insertMistake,
    insertMistakes,
    deleteMistake,
    markAsReviewed,
    loadAttempts,
    insertAttempt,
  }
}
