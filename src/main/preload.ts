import { contextBridge, ipcRenderer } from 'electron'
import type { Article, MistakeRecord } from '../shared/types.js'

export interface Api {
  db: {
    getArticles: () => Promise<Article[]>
    getArticleById: (id: string) => Promise<Article | undefined>
    insertArticle: (article: Article) => Promise<void>
    insertArticles: (articles: Article[]) => Promise<void>
    clearArticles: () => Promise<void>
    getMistakes: () => Promise<MistakeRecord[]>
    insertMistake: (mistake: MistakeRecord) => Promise<void>
    insertMistakes: (mistakes: MistakeRecord[]) => Promise<void>
    deleteMistake: (id: string) => Promise<void>
    markMistakeReviewed: (id: string) => Promise<void>
  }
  window: {
    minimize: () => Promise<void>
    maximize: () => Promise<void>
    close: () => Promise<void>
  }
}

const api: Api = {
  db: {
    getArticles: () => ipcRenderer.invoke('db:getArticles'),
    getArticleById: (id: string) => ipcRenderer.invoke('db:getArticleById', id),
    insertArticle: (article: Article) => ipcRenderer.invoke('db:insertArticle', article),
    insertArticles: (articles: Article[]) => ipcRenderer.invoke('db:insertArticles', articles),
    clearArticles: () => ipcRenderer.invoke('db:clearArticles'),
    getMistakes: () => ipcRenderer.invoke('db:getMistakes'),
    insertMistake: (mistake: MistakeRecord) => ipcRenderer.invoke('db:insertMistake', mistake),
    insertMistakes: (mistakes: MistakeRecord[]) => ipcRenderer.invoke('db:insertMistakes', mistakes),
    deleteMistake: (id: string) => ipcRenderer.invoke('db:deleteMistake', id),
    markMistakeReviewed: (id: string) => ipcRenderer.invoke('db:markMistakeReviewed', id),
  },
  window: {
    minimize: () => ipcRenderer.invoke('window:minimize'),
    maximize: () => ipcRenderer.invoke('window:maximize'),
    close: () => ipcRenderer.invoke('window:close'),
  },
}

contextBridge.exposeInMainWorld('api', api)
