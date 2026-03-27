import type { Article, MistakeRecord } from '@shared/types'

const seedArticles: Article[] = [
  {
    id: 'article-1',
    title: 'Der Hase und die Schildkröte',
    difficulty: 'A2',
    topic: 'Aesops Fabeln',
    paragraphs: [
      {
        id: 'p1',
        sentences: [
          {
            id: 's1',
            parts: [
              { type: 'text', content: 'Eines Tages ' },
              { type: 'blank', id: 'b1', infinitive: 'treffen', correctAnswer: 'traf' },
              { type: 'text', content: ' ein Hase auf eine Schildkröte.' }
            ]
          },
          {
            id: 's2',
            parts: [
              { type: 'text', content: 'Der Hase ' },
              { type: 'blank', id: 'b2', infinitive: 'lachen', correctAnswer: 'lachte' },
              { type: 'text', content: ' über die langsame Schildkröte.' }
            ]
          },
          {
            id: 's3',
            parts: [
              { type: 'text', content: '"Warum ' },
              { type: 'blank', id: 'b3', infinitive: 'machst', correctAnswer: 'machst' },
              { type: 'text', content: ' du nicht ein Rennen mit mir?", ' },
              { type: 'blank', id: 'b4', infinitive: 'fragen', correctAnswer: 'fragte' },
              { type: 'text', content: ' der Hase.' }
            ]
          }
        ]
      },
      {
        id: 'p2',
        sentences: [
          {
            id: 's4',
            parts: [
              { type: 'text', content: 'Die Schildkröte ' },
              { type: 'blank', id: 'b5', infinitive: 'stimmen', correctAnswer: 'stimmte' },
              { type: 'text', content: ' zu.' }
            ]
          },
          {
            id: 's5',
            parts: [
              { type: 'text', content: 'Sie ' },
              { type: 'blank', id: 'b6', infinitive: 'beginnen', correctAnswer: 'begannen' },
              { type: 'text', content: ' das Rennen.' }
            ]
          },
          {
            id: 's6',
            parts: [
              { type: 'text', content: 'Der Hase ' },
              { type: 'blank', id: 'b7', infinitive: 'laufen', correctAnswer: 'lief' },
              { type: 'text', content: ' sehr schnell.' }
            ]
          }
        ]
      },
      {
        id: 'p3',
        sentences: [
          {
            id: 's7',
            parts: [
              { type: 'text', content: 'Auf halbem Weg ' },
              { type: 'blank', id: 'b8', infinitive: 'halten', correctAnswer: 'hielt' },
              { type: 'text', content: ' er an und ' },
              { type: 'blank', id: 'b9', infinitive: 'schlafen', correctAnswer: 'schlief' },
              { type: 'text', content: ' ein.' }
            ]
          },
          {
            id: 's8',
            parts: [
              { type: 'text', content: 'Aber die Schildkröte ' },
              { type: 'blank', id: 'b10', infinitive: 'gehen', correctAnswer: 'ging' },
              { type: 'text', content: ' immer weiter.' }
            ]
          },
          {
            id: 's9',
            parts: [
              { type: 'text', content: 'Am Ende ' },
              { type: 'blank', id: 'b11', infinitive: 'gewinnen', correctAnswer: 'gewann' },
              { type: 'text', content: ' die Schildkröte das Rennen!' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'article-2',
    title: 'Newtons Apfel',
    difficulty: 'B1',
    topic: 'Wissenschaft',
    paragraphs: [
      {
        id: 'p1',
        sentences: [
          {
            id: 's1',
            parts: [
              { type: 'text', content: 'Isaac Newton ' },
              { type: 'blank', id: 'b1', infinitive: 'sein', correctAnswer: 'war' },
              { type: 'text', content: ' ein berühmter englischer Wissenschaftler.' }
            ]
          },
          {
            id: 's2',
            parts: [
              { type: 'text', content: 'Er ' },
              { type: 'blank', id: 'b2', infinitive: 'leben', correctAnswer: 'lebte' },
              { type: 'text', content: ' im 17. Jahrhundert.' }
            ]
          },
          {
            id: 's3',
            parts: [
              { type: 'text', content: 'Eines Tages ' },
              { type: 'blank', id: 'b3', infinitive: 'sitzen', correctAnswer: 'saß' },
              { type: 'text', content: ' er unter einem Apfelbaum.' }
            ]
          }
        ]
      },
      {
        id: 'p2',
        sentences: [
          {
            id: 's4',
            parts: [
              { type: 'text', content: 'Plötzlich ' },
              { type: 'blank', id: 'b4', infinitive: 'fallen', correctAnswer: 'fiel' },
              { type: 'text', content: ' ein Apfel vom Baum.' }
            ]
          },
          {
            id: 's5',
            parts: [
              { type: 'text', content: 'Newton ' },
              { type: 'blank', id: 'b5', infinitive: 'sehen', correctAnswer: 'sah' },
              { type: 'text', content: ' den Apfel und ' },
              { type: 'blank', id: 'b6', infinitive: 'denken', correctAnswer: 'dachte' },
              { type: 'text', content: ' nach.' }
            ]
          },
          {
            id: 's6',
            parts: [
              { type: 'text', content: '"Warum ' },
              { type: 'blank', id: 'b7', infinitive: 'fallen', correctAnswer: 'fällt' },
              { type: 'text', content: ' der Apfel nach unten?", ' },
              { type: 'blank', id: 'b8', infinitive: 'fragen', correctAnswer: 'fragte' },
              { type: 'text', content: ' er sich.' }
            ]
          }
        ]
      },
      {
        id: 'p3',
        sentences: [
          {
            id: 's7',
            parts: [
              { type: 'text', content: 'Dieser Moment ' },
              { type: 'blank', id: 'b9', infinitive: 'verändern', correctAnswer: 'veränderte' },
              { type: 'text', content: ' die Geschichte der Wissenschaft.' }
            ]
          },
          {
            id: 's8',
            parts: [
              { type: 'text', content: 'Newton ' },
              { type: 'blank', id: 'b10', infinitive: 'entwickeln', correctAnswer: 'entwickelte' },
              { type: 'text', content: ' die Theorie der Gravitation.' }
            ]
          },
          {
            id: 's9',
            parts: [
              { type: 'text', content: 'Heute ' },
              { type: 'blank', id: 'b11', infinitive: 'wissen', correctAnswer: 'wissen' },
              { type: 'text', content: ' wir: Der Apfel ' },
              { type: 'blank', id: 'b12', infinitive: 'ziehen', correctAnswer: 'zieht' },
              { type: 'text', content: ' die Erde an – und die Erde zieht den Apfel an!' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'article-3',
    title: 'Ein Tag am Strand',
    difficulty: 'A2',
    topic: 'Alltag',
    paragraphs: [
      {
        id: 'p1',
        sentences: [
          {
            id: 's1',
            parts: [
              { type: 'text', content: 'Letztes Wochenende ' },
              { type: 'blank', id: 'b1', infinitive: 'fahren', correctAnswer: 'fuhr' },
              { type: 'text', content: ' ich mit meiner Familie zum Strand.' }
            ]
          },
          {
            id: 's2',
            parts: [
              { type: 'text', content: 'Das Wetter ' },
              { type: 'blank', id: 'b2', infinitive: 'sein', correctAnswer: 'war' },
              { type: 'text', content: ' wunderschön.' }
            ]
          },
          {
            id: 's3',
            parts: [
              { type: 'text', content: 'Die Sonne ' },
              { type: 'blank', id: 'b3', infinitive: 'scheinen', correctAnswer: 'schien' },
              { type: 'text', content: ' und das Meer ' },
              { type: 'blank', id: 'b4', infinitive: 'sein', correctAnswer: 'war' },
              { type: 'text', content: ' ruhig.' }
            ]
          }
        ]
      },
      {
        id: 'p2',
        sentences: [
          {
            id: 's4',
            parts: [
              { type: 'text', content: 'Zuerst ' },
              { type: 'blank', id: 'b5', infinitive: 'bauen', correctAnswer: 'bauten' },
              { type: 'text', content: ' wir eine große Sandburg.' }
            ]
          },
          {
            id: 's5',
            parts: [
              { type: 'text', content: 'Mein kleiner Bruder ' },
              { type: 'blank', id: 'b6', infinitive: 'sammeln', correctAnswer: 'sammelte' },
              { type: 'text', content: ' Muscheln.' }
            ]
          },
          {
            id: 's6',
            parts: [
              { type: 'text', content: 'Dann ' },
              { type: 'blank', id: 'b7', infinitive: 'gehen', correctAnswer: 'gingen' },
              { type: 'text', content: ' wir schwimmen.' }
            ]
          }
        ]
      },
      {
        id: 'p3',
        sentences: [
          {
            id: 's7',
            parts: [
              { type: 'text', content: 'Das Wasser ' },
              { type: 'blank', id: 'b8', infinitive: 'fühlen', correctAnswer: 'fühlte' },
              { type: 'text', content: ' sich etwas kalt an, aber es ' },
              { type: 'blank', id: 'b9', infinitive: 'machen', correctAnswer: 'machte' },
              { type: 'text', content: ' Spaß!' }
            ]
          },
          {
            id: 's8',
            parts: [
              { type: 'text', content: 'Am späten Nachmittag ' },
              { type: 'blank', id: 'b10', infinitive: 'packen', correctAnswer: 'packten' },
              { type: 'text', content: ' wir unsere Sachen.' }
            ]
          },
          {
            id: 's9',
            parts: [
              { type: 'text', content: 'Wir ' },
              { type: 'blank', id: 'b11', infinitive: 'haben', correctAnswer: 'hatten' },
              { type: 'text', content: ' einen wunderbaren Tag!' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'article-4',
    title: 'Der erste Computer',
    difficulty: 'B1',
    topic: 'Technikgeschichte',
    paragraphs: [
      {
        id: 'p1',
        sentences: [
          {
            id: 's1',
            parts: [
              { type: 'text', content: 'Heute ' },
              { type: 'blank', id: 'b1', infinitive: 'geben', correctAnswer: 'gibt' },
              { type: 'text', content: ' es Computer überall.' }
            ]
          },
          {
            id: 's2',
            parts: [
              { type: 'text', content: 'Aber vor 80 Jahren ' },
              { type: 'blank', id: 'b2', infinitive: 'existieren', correctAnswer: 'existierten' },
              { type: 'text', content: ' sie noch nicht.' }
            ]
          },
          {
            id: 's3',
            parts: [
              { type: 'text', content: 'Der erste elektronische Computer ' },
              { type: 'blank', id: 'b3', infinitive: 'heißen', correctAnswer: 'hieß' },
              { type: 'text', content: ' ENIAC.' }
            ]
          }
        ]
      },
      {
        id: 'p2',
        sentences: [
          {
            id: 's4',
            parts: [
              { type: 'text', content: 'ENIAC ' },
              { type: 'blank', id: 'b4', infinitive: 'kommen', correctAnswer: 'kam' },
              { type: 'text', content: ' 1946 in den USA.' }
            ]
          },
          {
            id: 's5',
            parts: [
              { type: 'text', content: 'Er ' },
              { type: 'blank', id: 'b5', infinitive: 'sein', correctAnswer: 'war' },
              { type: 'text', content: ' riesig – so groß wie ein ganzes Zimmer!' }
            ]
          },
          {
            id: 's6',
            parts: [
              { type: 'text', content: 'Er ' },
              { type: 'blank', id: 'b6', infinitive: 'wiegen', correctAnswer: 'wog' },
              { type: 'text', content: ' 27 Tonnen und ' },
              { type: 'blank', id: 'b7', infinitive: 'verbrauchen', correctAnswer: 'verbrauchte' },
              { type: 'text', content: ' sehr viel Strom.' }
            ]
          }
        ]
      },
      {
        id: 'p3',
        sentences: [
          {
            id: 's7',
            parts: [
              { type: 'text', content: 'Trotzdem ' },
              { type: 'blank', id: 'b8', infinitive: 'können', correctAnswer: 'konnte' },
              { type: 'text', content: ' er komplexe Berechnungen durchführen.' }
            ]
          },
          {
            id: 's8',
            parts: [
              { type: 'text', content: 'Die Wissenschaftler ' },
              { type: 'blank', id: 'b9', infinitive: 'nutzen', correctAnswer: 'nutzten' },
              { type: 'text', content: ' ihn für militärische Zwecke.' }
            ]
          },
          {
            id: 's9',
            parts: [
              { type: 'text', content: 'Heute ' },
              { type: 'blank', id: 'b10', infinitive: 'haben', correctAnswer: 'hat' },
              { type: 'text', content: ' dein Smartphone viel mehr Rechenkraft als ENIAC!' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'article-5',
    title: 'Die Stadtbibliothek',
    difficulty: 'A2',
    topic: 'Alltag',
    paragraphs: [
      {
        id: 'p1',
        sentences: [
          {
            id: 's1',
            parts: [
              { type: 'text', content: 'Gestern ' },
              { type: 'blank', id: 'b1', infinitive: 'besuchen', correctAnswer: 'besuchte' },
              { type: 'text', content: ' ich zum ersten Mal die neue Stadtbibliothek.' }
            ]
          },
          {
            id: 's2',
            parts: [
              { type: 'text', content: 'Sie ' },
              { type: 'blank', id: 'b2', infinitive: 'öffnen', correctAnswer: 'öffnete' },
              { type: 'text', content: ' erst vor einem Monat.' }
            ]
          },
          {
            id: 's3',
            parts: [
              { type: 'text', content: 'Das Gebäude ' },
              { type: 'blank', id: 'b3', infinitive: 'sein', correctAnswer: 'ist' },
              { type: 'text', content: ' modern und hell.' }
            ]
          }
        ]
      },
      {
        id: 'p2',
        sentences: [
          {
            id: 's4',
            parts: [
              { type: 'text', content: 'Im Erdgeschoss ' },
              { type: 'blank', id: 'b4', infinitive: 'stehen', correctAnswer: 'standen' },
              { type: 'text', content: ' viele neue Bücher.' }
            ]
          },
          {
            id: 's5',
            parts: [
              { type: 'text', content: 'Ich ' },
              { type: 'blank', id: 'b5', infinitive: 'gehen', correctAnswer: 'ging' },
              { type: 'text', content: ' zum Romanregal und ' },
              { type: 'blank', id: 'b6', infinitive: 'suchen', correctAnswer: 'suchte' },
              { type: 'text', content: ' nach einem Krimi.' }
            ]
          },
          {
            id: 's6',
            parts: [
              { type: 'text', content: 'Nach zehn Minuten ' },
              { type: 'blank', id: 'b7', infinitive: 'finden', correctAnswer: 'fand' },
              { type: 'text', content: ' ich ein spannendes Buch.' }
            ]
          }
        ]
      },
      {
        id: 'p3',
        sentences: [
          {
            id: 's7',
            parts: [
              { type: 'text', content: 'Dann ' },
              { type: 'blank', id: 'b8', infinitive: 'gehen', correctAnswer: 'ging' },
              { type: 'text', content: ' ich nach oben zum Lesesaal.' }
            ]
          },
          {
            id: 's8',
            parts: [
              { type: 'text', content: 'Dort ' },
              { type: 'blank', id: 'b9', infinitive: 'sitzen', correctAnswer: 'saßen' },
              { type: 'text', content: ' viele Menschen an Tischen und ' },
              { type: 'blank', id: 'b10', infinitive: 'lesen', correctAnswer: 'lasen' },
              { type: 'text', content: '.' }
            ]
          },
          {
            id: 's9',
            parts: [
              { type: 'text', content: 'Ich ' },
              { type: 'blank', id: 'b11', infinitive: 'leihen', correctAnswer: 'lieh' },
              { type: 'text', content: ' das Buch aus und ' },
              { type: 'blank', id: 'b12', infinitive: 'gehen', correctAnswer: 'ging' },
              { type: 'text', content: ' nach Hause.' }
            ]
          }
        ]
      }
    ]
  }
]

const STORAGE_KEY = 'germane-db'

interface DatabaseData {
  articles: Article[]
  mistakes: MistakeRecord[]
}

function getDb(): DatabaseData {
  const data = localStorage.getItem(STORAGE_KEY)
  if (data) {
    return JSON.parse(data)
  }
  return {
    articles: seedArticles as Article[],
    mistakes: [],
  }
}

function saveDb(data: DatabaseData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export const browserDb = {
  getArticles: async (): Promise<Article[]> => {
    return getDb().articles
  },

  getArticleById: async (id: string): Promise<Article | undefined> => {
    return getDb().articles.find((a) => a.id === id)
  },

  insertArticle: async (article: Article): Promise<void> => {
    const db = getDb()
    db.articles.push(article)
    saveDb(db)
  },

  insertArticles: async (articles: Article[]): Promise<void> => {
    const db = getDb()
    db.articles.push(...articles)
    saveDb(db)
  },

  clearArticles: async (): Promise<void> => {
    const db = getDb()
    db.articles = []
    saveDb(db)
  },

  getMistakes: async (): Promise<MistakeRecord[]> => {
    return getDb().mistakes
  },

  insertMistake: async (mistake: MistakeRecord): Promise<void> => {
    const db = getDb()
    db.mistakes.push(mistake)
    saveDb(db)
  },

  insertMistakes: async (mistakes: MistakeRecord[]): Promise<void> => {
    const db = getDb()
    db.mistakes.push(...mistakes)
    saveDb(db)
  },

  deleteMistake: async (id: string): Promise<void> => {
    const db = getDb()
    db.mistakes = db.mistakes.filter((m) => m.id !== id)
    saveDb(db)
  },

  markMistakeReviewed: async (id: string): Promise<void> => {
    const db = getDb()
    const mistake = db.mistakes.find((m) => m.id === id)
    if (mistake) {
      mistake.reviewedAt = Date.now()
    }
    saveDb(db)
  },
}
