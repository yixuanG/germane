import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url'
import { Database } from './database.js'
import type { Article, MistakeRecord, PracticeAttempt } from '../shared/types.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let mainWindow: BrowserWindow | null = null
let db: Database

const isDev = !app.isPackaged

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  })

  if (isDev) {
    mainWindow.loadURL('http://localhost:5173')
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'))
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

async function initDatabase() {
  db = new Database()
  await db.init()
}

// IPC handlers
ipcMain.handle('db:getArticles', async () => {
  return await db.getArticles()
})

ipcMain.handle('db:getArticleById', async (_event, id: string) => {
  return await db.getArticleById(id)
})

ipcMain.handle('db:insertArticle', async (_event, article: Article) => {
  await db.insertArticle(article)
})

ipcMain.handle('db:insertArticles', async (_event, articles: Article[]) => {
  await db.insertArticles(articles)
})

ipcMain.handle('db:clearArticles', async () => {
  await db.clearArticles()
})

ipcMain.handle('db:getMistakes', async () => {
  return await db.getMistakes()
})

ipcMain.handle('db:insertMistake', async (_event, mistake: MistakeRecord) => {
  await db.insertMistake(mistake)
})

ipcMain.handle('db:insertMistakes', async (_event, mistakes: MistakeRecord[]) => {
  await db.insertMistakes(mistakes)
})

ipcMain.handle('db:deleteMistake', async (_event, id: string) => {
  await db.deleteMistake(id)
})

ipcMain.handle('db:markMistakeReviewed', async (_event, id: string) => {
  await db.markMistakeReviewed(id)
})

ipcMain.handle('db:getAttempts', async () => {
  return await db.getAttempts()
})

ipcMain.handle('db:insertAttempt', async (_event, attempt: PracticeAttempt) => {
  await db.insertAttempt(attempt)
})

// Window control IPC handlers
ipcMain.handle('window:minimize', () => {
  mainWindow?.minimize()
})

ipcMain.handle('window:maximize', () => {
  if (mainWindow?.isMaximized()) {
    mainWindow.unmaximize()
  } else {
    mainWindow?.maximize()
  }
})

ipcMain.handle('window:close', () => {
  mainWindow?.close()
})

app.whenReady().then(async () => {
  await initDatabase()
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
