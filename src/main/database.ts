import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import path from 'path'
import type { DatabaseSchema, Article, MistakeRecord, PracticeAttempt } from '../shared/types.js'

// Determine the user data directory based on platform
const getUserDataPath = (): string => {
  if (process.platform === 'darwin') {
    return path.join(process.env.HOME || '', 'Library', 'Application Support', 'Germane')
  } else if (process.platform === 'win32') {
    return path.join(process.env.APPDATA || '', 'Germane')
  }
  return path.join(process.env.HOME || '', '.germane')
}

const defaultData: DatabaseSchema = {
  articles: [],
  mistakes: [],
  attempts: [],
}

export class Database {
  private db: Low<DatabaseSchema>

  constructor() {
    const userDataPath = getUserDataPath()
    const dbPath = path.join(userDataPath, 'db.json')
    const adapter = new JSONFile<DatabaseSchema>(dbPath)
    this.db = new Low(adapter, defaultData)
  }

  async init(): Promise<void> {
    await this.db.read()
    if (!this.db.data) {
      this.db.data = defaultData
    }
    if (!this.db.data.articles) {
      this.db.data.articles = []
    }
    if (!this.db.data.mistakes) {
      this.db.data.mistakes = []
    }
    if (!this.db.data.attempts) {
      this.db.data.attempts = []
    }
    await this.db.write()
  }

  async getArticles(): Promise<Article[]> {
    await this.db.read()
    return this.db.data!.articles
  }

  async getArticleById(id: string): Promise<Article | undefined> {
    await this.db.read()
    return this.db.data!.articles.find(a => a.id === id)
  }

  async insertArticle(article: Article): Promise<void> {
    await this.db.read()
    this.db.data!.articles.push(article)
    await this.db.write()
  }

  async insertArticles(articles: Article[]): Promise<void> {
    await this.db.read()
    this.db.data!.articles.push(...articles)
    await this.db.write()
  }

  async clearArticles(): Promise<void> {
    await this.db.read()
    this.db.data!.articles = []
    await this.db.write()
  }

  async getMistakes(): Promise<MistakeRecord[]> {
    await this.db.read()
    return this.db.data!.mistakes
  }

  async insertMistake(mistake: MistakeRecord): Promise<void> {
    await this.db.read()
    this.db.data!.mistakes.push(mistake)
    await this.db.write()
  }

  async insertMistakes(mistakes: MistakeRecord[]): Promise<void> {
    await this.db.read()
    this.db.data!.mistakes.push(...mistakes)
    await this.db.write()
  }

  async deleteMistake(id: string): Promise<void> {
    await this.db.read()
    this.db.data!.mistakes = this.db.data!.mistakes.filter(m => m.id !== id)
    await this.db.write()
  }

  async markMistakeReviewed(id: string): Promise<void> {
    await this.db.read()
    const mistake = this.db.data!.mistakes.find(m => m.id === id)
    if (mistake) {
      mistake.reviewedAt = Date.now()
    }
    await this.db.write()
  }

  async getAttempts(): Promise<PracticeAttempt[]> {
    await this.db.read()
    return this.db.data!.attempts
  }

  async insertAttempt(attempt: PracticeAttempt): Promise<void> {
    await this.db.read()
    this.db.data!.attempts.push(attempt)
    await this.db.write()
  }
}
