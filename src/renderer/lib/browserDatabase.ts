import type { Article, MistakeRecord, PracticeAttempt } from '@shared/types'

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
  },
  // Neue A2 Artikel (5 Stück)
  {
    id: 'article-6',
    title: 'Mein erster Tag in der neuen Schule',
    difficulty: 'A2',
    topic: 'Schule',
    paragraphs: [
      {
        id: 'p1',
        sentences: [
          {
            id: 's1',
            parts: [
              { type: 'text', content: 'Gestern ' },
              { type: 'blank', id: 'b1', infinitive: 'sein', correctAnswer: 'war' },
              { type: 'text', content: ' mein erster Tag in der neuen Schule.' }
            ]
          },
          {
            id: 's2',
            parts: [
              { type: 'text', content: 'Ich ' },
              { type: 'blank', id: 'b2', infinitive: 'aufstehen', correctAnswer: 'stand auf' },
              { type: 'text', content: ' um sieben Uhr.' }
            ]
          },
          {
            id: 's3',
            parts: [
              { type: 'text', content: 'Meine Mutter ' },
              { type: 'blank', id: 'b3', infinitive: 'machen', correctAnswer: 'machte' },
              { type: 'text', content: ' mir Frühstück.' }
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
              { type: 'text', content: 'Auf dem Schulhof ' },
              { type: 'blank', id: 'b4', infinitive: 'treffen', correctAnswer: 'traf' },
              { type: 'text', content: ' ich meine neue Klasse.' }
            ]
          },
          {
            id: 's5',
            parts: [
              { type: 'text', content: 'Ein Junge ' },
              { type: 'blank', id: 'b5', infinitive: 'kommen', correctAnswer: 'kam' },
              { type: 'text', content: ' zu mir und ' },
              { type: 'blank', id: 'b6', infinitive: 'sprechen', correctAnswer: 'sprach' },
              { type: 'text', content: ' mich an.' }
            ]
          },
          {
            id: 's6',
            parts: [
              { type: 'text', content: 'Sein Name ' },
              { type: 'blank', id: 'b7', infinitive: 'sein', correctAnswer: 'war' },
              { type: 'text', content: ' Tim und er ' },
              { type: 'blank', id: 'b8', infinitive: 'zeigen', correctAnswer: 'zeigte' },
              { type: 'text', content: ' mir die Schule.' }
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
              { type: 'text', content: 'Im Unterricht ' },
              { type: 'blank', id: 'b9', infinitive: 'lernen', correctAnswer: 'lernten' },
              { type: 'text', content: ' wir Mathematik und Deutsch.' }
            ]
          },
          {
            id: 's8',
            parts: [
              { type: 'text', content: 'Die Lehrerin ' },
              { type: 'blank', id: 'b10', infinitive: 'sein', correctAnswer: 'war' },
              { type: 'text', content: ' sehr freundlich.' }
            ]
          },
          {
            id: 's9',
            parts: [
              { type: 'text', content: 'Am Nachmittag ' },
              { type: 'blank', id: 'b11', infinitive: 'fahren', correctAnswer: 'fuhr' },
              { type: 'text', content: ' ich glücklich nach Hause.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'article-7',
    title: 'Der verlorene Schlüssel',
    difficulty: 'A2',
    topic: 'Alltag',
    paragraphs: [
      {
        id: 'p1',
        sentences: [
          {
            id: 's1',
            parts: [
              { type: 'text', content: 'Gestern Nachmittag ' },
              { type: 'blank', id: 'b1', infinitive: 'kommen', correctAnswer: 'kam' },
              { type: 'text', content: ' ich von der Arbeit nach Hause.' }
            ]
          },
          {
            id: 's2',
            parts: [
              { type: 'text', content: 'Vor der Haustür ' },
              { type: 'blank', id: 'b2', infinitive: 'suchen', correctAnswer: 'suchte' },
              { type: 'text', content: ' ich meinen Schlüssel.' }
            ]
          },
          {
            id: 's3',
            parts: [
              { type: 'text', content: 'Er ' },
              { type: 'blank', id: 'b3', infinitive: 'sein', correctAnswer: 'war' },
              { type: 'text', content: ' nicht in meiner Tasche!' }
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
              { type: 'text', content: 'Ich ' },
              { type: 'blank', id: 'b4', infinitive: 'denken', correctAnswer: 'dachte' },
              { type: 'text', content: ': Wo habe ich ihn ' },
              { type: 'blank', id: 'b5', infinitive: 'lassen', correctAnswer: 'gelassen' },
              { type: 'text', content: '?' }
            ]
          },
          {
            id: 's5',
            parts: [
              { type: 'text', content: 'Plötzlich ' },
              { type: 'blank', id: 'b6', infinitive: 'wissen', correctAnswer: 'wusste' },
              { type: 'text', content: ' ich es: Im Büro!' }
            ]
          },
          {
            id: 's6',
            parts: [
              { type: 'text', content: 'Ich ' },
              { type: 'blank', id: 'b7', infinitive: 'laufen', correctAnswer: 'lief' },
              { type: 'text', content: ' zurück zum Büro.' }
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
              { type: 'text', content: 'Glücklicherweise ' },
              { type: 'blank', id: 'b8', infinitive: 'sein', correctAnswer: 'war' },
              { type: 'text', content: ' mein Kollege noch da.' }
            ]
          },
          {
            id: 's8',
            parts: [
              { type: 'text', content: 'Er ' },
              { type: 'blank', id: 'b9', infinitive: 'öffnen', correctAnswer: 'öffnete' },
              { type: 'text', content: ' die Tür für mich.' }
            ]
          },
          {
            id: 's9',
            parts: [
              { type: 'text', content: 'Der Schlüssel ' },
              { type: 'blank', id: 'b10', infinitive: 'liegen', correctAnswer: 'lag' },
              { type: 'text', content: ' auf meinem Schreibtisch!' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'article-8',
    title: 'Das Geburtstagsfest meiner Oma',
    difficulty: 'A2',
    topic: 'Familie',
    paragraphs: [
      {
        id: 'p1',
        sentences: [
          {
            id: 's1',
            parts: [
              { type: 'text', content: 'Am Sonntag ' },
              { type: 'blank', id: 'b1', infinitive: 'feiern', correctAnswer: 'feierten' },
              { type: 'text', content: ' wir den 75. Geburtstag meiner Oma.' }
            ]
          },
          {
            id: 's2',
            parts: [
              { type: 'text', content: 'Alle Verwandten ' },
              { type: 'blank', id: 'b2', infinitive: 'kommen', correctAnswer: 'kamen' },
              { type: 'text', content: ' zu uns nach Hause.' }
            ]
          },
          {
            id: 's3',
            parts: [
              { type: 'text', content: 'Meine Mutter ' },
              { type: 'blank', id: 'b3', infinitive: 'backen', correctAnswer: 'backte' },
              { type: 'text', content: ' einen großen Kuchen.' }
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
              { type: 'text', content: 'Oma ' },
              { type: 'blank', id: 'b4', infinitive: 'erhalten', correctAnswer: 'erhielt' },
              { type: 'text', content: ' viele Geschenke.' }
            ]
          },
          {
            id: 's5',
            parts: [
              { type: 'text', content: 'Ich ' },
              { type: 'blank', id: 'b5', infinitive: 'schenken', correctAnswer: 'schenkte' },
              { type: 'text', content: ' ihr ein Buch.' }
            ]
          },
          {
            id: 's6',
            parts: [
              { type: 'text', content: 'Sie ' },
              { type: 'blank', id: 'b6', infinitive: 'lesen', correctAnswer: 'las' },
              { type: 'text', content: ' gerne Kriminalgeschichten.' }
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
              { type: 'text', content: 'Am Nachmittag ' },
              { type: 'blank', id: 'b7', infinitive: 'gehen', correctAnswer: 'gingen' },
              { type: 'text', content: ' wir gemeinsam spazieren.' }
            ]
          },
          {
            id: 's8',
            parts: [
              { type: 'text', content: 'Oma ' },
              { type: 'blank', id: 'b8', infinitive: 'erzählen', correctAnswer: 'erzählte' },
              { type: 'text', content: ' uns Geschichten aus ihrer Jugend.' }
            ]
          },
          {
            id: 's9',
            parts: [
              { type: 'text', content: 'Es ' },
              { type: 'blank', id: 'b9', infinitive: 'sein', correctAnswer: 'war' },
              { type: 'text', content: ' ein schöner Tag für alle!' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'article-9',
    title: 'Ein Wochenende auf dem Land',
    difficulty: 'A2',
    topic: 'Natur',
    paragraphs: [
      {
        id: 'p1',
        sentences: [
          {
            id: 's1',
            parts: [
              { type: 'text', content: 'Letztes Wochenende ' },
              { type: 'blank', id: 'b1', infinitive: 'fahren', correctAnswer: 'fuhren' },
              { type: 'text', content: ' wir zu meinen Großeltern aufs Land.' }
            ]
          },
          {
            id: 's2',
            parts: [
              { type: 'text', content: 'Die Fahrt ' },
              { type: 'blank', id: 'b2', infinitive: 'dauern', correctAnswer: 'dauerte' },
              { type: 'text', content: ' etwa zwei Stunden.' }
            ]
          },
          {
            id: 's3',
            parts: [
              { type: 'text', content: 'Die Landschaft ' },
              { type: 'blank', id: 'b3', infinitive: 'sein', correctAnswer: 'war' },
              { type: 'text', content: ' sehr schön.' }
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
              { type: 'text', content: 'Großvater ' },
              { type: 'blank', id: 'b4', infinitive: 'nehmen', correctAnswer: 'nahm' },
              { type: 'text', content: ' mich zum Fischen mit.' }
            ]
          },
          {
            id: 's5',
            parts: [
              { type: 'text', content: 'Wir ' },
              { type: 'blank', id: 'b5', infinitive: 'gehen', correctAnswer: 'gingen' },
              { type: 'text', content: ' zum See in der Nähe.' }
            ]
          },
          {
            id: 's6',
            parts: [
              { type: 'text', content: 'Aber wir ' },
              { type: 'blank', id: 'b6', infinitive: 'fangen', correctAnswer: 'fingen' },
              { type: 'text', content: ' keinen Fisch.' }
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
              { type: 'text', content: 'Abends ' },
              { type: 'blank', id: 'b7', infinitive: 'machen', correctAnswer: 'machten' },
              { type: 'text', content: ' wir ein Feuer im Garten.' }
            ]
          },
          {
            id: 's8',
            parts: [
              { type: 'text', content: 'Wir ' },
              { type: 'blank', id: 'b8', infinitive: 'sitzen', correctAnswer: 'saßen' },
              { type: 'text', content: ' zusammen um das Feuer.' }
            ]
          },
          {
            id: 's9',
            parts: [
              { type: 'text', content: 'Ich ' },
              { type: 'blank', id: 'b9', infinitive: 'möchten', correctAnswer: 'möchte' },
              { type: 'text', content: ' bald wieder zurückkommen!' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'article-10',
    title: 'Mein neues Fahrrad',
    difficulty: 'A2',
    topic: 'Hobby',
    paragraphs: [
      {
        id: 'p1',
        sentences: [
          {
            id: 's1',
            parts: [
              { type: 'text', content: 'Für meinen Geburtstag ' },
              { type: 'blank', id: 'b1', infinitive: 'bekommen', correctAnswer: 'bekam' },
              { type: 'text', content: ' ich ein neues Fahrrad.' }
            ]
          },
          {
            id: 's2',
            parts: [
              { type: 'text', content: 'Es ' },
              { type: 'blank', id: 'b2', infinitive: 'sein', correctAnswer: 'war' },
              { type: 'text', content: ' rot und schwarz.' }
            ]
          },
          {
            id: 's3',
            parts: [
              { type: 'text', content: 'Ich ' },
              { type: 'blank', id: 'b3', infinitive: 'sein', correctAnswer: 'war' },
              { type: 'text', content: ' sehr glücklich!' }
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
              { type: 'text', content: 'Gleich am nächsten Tag ' },
              { type: 'blank', id: 'b4', infinitive: 'probieren', correctAnswer: 'probierte' },
              { type: 'text', content: ' ich es aus.' }
            ]
          },
          {
            id: 's5',
            parts: [
              { type: 'text', content: 'Mein Vater ' },
              { type: 'blank', id: 'b5', infinitive: 'helfen', correctAnswer: 'half' },
              { type: 'text', content: ' mir, die Höhe richtig einzustellen.' }
            ]
          },
          {
            id: 's6',
            parts: [
              { type: 'text', content: 'Zuerst ' },
              { type: 'blank', id: 'b6', infinitive: 'fahren', correctAnswer: 'fuhr' },
              { type: 'text', content: ' ich vorsichtig.' }
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
              { type: 'text', content: 'Aber bald ' },
              { type: 'blank', id: 'b7', infinitive: 'fahren', correctAnswer: 'fuhr' },
              { type: 'text', content: ' ich schneller.' }
            ]
          },
          {
            id: 's8',
            parts: [
              { type: 'text', content: 'Das Fahrrad ' },
              { type: 'blank', id: 'b8', infinitive: 'fahren', correctAnswer: 'fährt' },
              { type: 'text', content: ' sich super gut.' }
            ]
          },
          {
            id: 's9',
            parts: [
              { type: 'text', content: 'Jetzt ' },
              { type: 'blank', id: 'b9', infinitive: 'fahren', correctAnswer: 'fahre' },
              { type: 'text', content: ' ich jeden Tag damit zur Schule!' }
            ]
          }
        ]
      }
    ]
  },
  // Neue B1 Artikel (5 Stück)
  {
    id: 'article-11',
    title: 'Die Brüder Grimm',
    difficulty: 'B1',
    topic: 'Literatur',
    paragraphs: [
      {
        id: 'p1',
        sentences: [
          {
            id: 's1',
            parts: [
              { type: 'text', content: 'Jacob und Wilhelm Grimm ' },
              { type: 'blank', id: 'b1', infinitive: 'sein', correctAnswer: 'waren' },
              { type: 'text', content: ' deutsche Sprachwissenschaftler und Schriftsteller.' }
            ]
          },
          {
            id: 's2',
            parts: [
              { type: 'text', content: 'Sie ' },
              { type: 'blank', id: 'b2', infinitive: 'leben', correctAnswer: 'lebten' },
              { type: 'text', content: ' im 18. und 19. Jahrhundert.' }
            ]
          },
          {
            id: 's3',
            parts: [
              { type: 'text', content: 'Heute ' },
              { type: 'blank', id: 'b3', infinitive: 'wissen', correctAnswer: 'kennt' },
              { type: 'text', content: ' man sie vor allem durch ihre Märchensammlung.' }
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
              { type: 'text', content: 'Die Brüder ' },
              { type: 'blank', id: 'b4', infinitive: 'sammeln', correctAnswer: 'sammelten' },
              { type: 'text', content: ' traditionelle deutsche Volksmärchen.' }
            ]
          },
          {
            id: 's5',
            parts: [
              { type: 'text', content: 'Sie ' },
              { type: 'blank', id: 'b5', infinitive: 'reisen', correctAnswer: 'reisten' },
              { type: 'text', content: ' durch Deutschland und ' },
              { type: 'blank', id: 'b6', infinitive: 'hören', correctAnswer: 'hörten' },
              { type: 'text', content: ' sich die Geschichten von verschiedenen Erzählern an.' }
            ]
          },
          {
            id: 's6',
            parts: [
              { type: 'text', content: '1812 ' },
              { type: 'blank', id: 'b7', infinitive: 'erscheinen', correctAnswer: 'erschien' },
              { type: 'text', content: ' die erste Auflage der "Kinder- und Hausmärchen".' }
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
              { type: 'text', content: 'Zu den bekanntesten Märchen ' },
              { type: 'blank', id: 'b8', infinitive: 'gehören', correctAnswer: 'gehören' },
              { type: 'text', content: ' "Hänsel und Gretel", "Rotkäppchen" und "Aschenputtel".' }
            ]
          },
          {
            id: 's8',
            parts: [
              { type: 'text', content: 'Diese Geschichten ' },
              { type: 'blank', id: 'b9', infinitive: 'werden', correctAnswer: 'wurden' },
              { type: 'text', content: ' in über 160 Sprachen übersetzt.' }
            ]
          },
          {
            id: 's9',
            parts: [
              { type: 'text', content: 'Bis heute ' },
              { type: 'blank', id: 'b10', infinitive: 'faszinieren', correctAnswer: 'faszinieren' },
              { type: 'text', content: ' sie Kinder und Erwachsene weltweit.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'article-12',
    title: 'Die Berliner Mauer',
    difficulty: 'B1',
    topic: 'Geschichte',
    paragraphs: [
      {
        id: 'p1',
        sentences: [
          {
            id: 's1',
            parts: [
              { type: 'text', content: 'Nach dem Zweiten Weltkrieg ' },
              { type: 'blank', id: 'b1', infinitive: 'teilen', correctAnswer: 'teilten' },
              { type: 'text', content: ' die Siegermächte Deutschland in vier Zonen auf.' }
            ]
          },
          {
            id: 's2',
            parts: [
              { type: 'text', content: 'Berlin ' },
              { type: 'blank', id: 'b2', infinitive: 'liegen', correctAnswer: 'lag' },
              { type: 'text', content: ' vollständig in der sowjetischen Zone.' }
            ]
          },
          {
            id: 's3',
            parts: [
              { type: 'text', content: 'Aber auch die Hauptstadt ' },
              { type: 'blank', id: 'b3', infinitive: 'werden', correctAnswer: 'wurde' },
              { type: 'text', content: ' in vier Sektoren geteilt.' }
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
              { type: 'text', content: 'Im Laufe der Zeit ' },
              { type: 'blank', id: 'b4', infinitive: 'entwickeln', correctAnswer: 'entwickelten' },
              { type: 'text', content: ' sich politische Unterschiede zwischen Ost und West.' }
            ]
          },
          {
            id: 's5',
            parts: [
              { type: 'text', content: 'Viele Menschen ' },
              { type: 'blank', id: 'b5', infinitive: 'fliehen', correctAnswer: 'flohen' },
              { type: 'text', content: ' aus der DDR nach Westdeutschland.' }
            ]
          },
          {
            id: 's6',
            parts: [
              { type: 'text', content: 'Deshalb ' },
              { type: 'blank', id: 'b6', infinitive: 'bauen', correctAnswer: 'bauten' },
              { type: 'text', content: ' die DDR-Regierung 1961 die Berliner Mauer.' }
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
              { type: 'text', content: 'Die Mauer ' },
              { type: 'blank', id: 'b7', infinitive: 'teilen', correctAnswer: 'teilte' },
              { type: 'text', content: ' Familien und Freunde für fast 30 Jahre.' }
            ]
          },
          {
            id: 's8',
            parts: [
              { type: 'text', content: 'Doch am 9. November 1989 ' },
              { type: 'blank', id: 'b8', infinitive: 'fallen', correctAnswer: 'fiel' },
              { type: 'text', content: ' die Mauer schließlich.' }
            ]
          },
          {
            id: 's9',
            parts: [
              { type: 'text', content: 'Ein Jahr später ' },
              { type: 'blank', id: 'b9', infinitive: 'sein', correctAnswer: 'war' },
              { type: 'text', content: ' Deutschland wieder einheitlich.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'article-13',
    title: 'Ludwig van Beethoven',
    difficulty: 'B1',
    topic: 'Musik',
    paragraphs: [
      {
        id: 'p1',
        sentences: [
          {
            id: 's1',
            parts: [
              { type: 'text', content: 'Ludwig van Beethoven ' },
              { type: 'blank', id: 'b1', infinitive: 'kommen', correctAnswer: 'kam' },
              { type: 'text', content: ' 1770 in Bonn auf die Welt.' }
            ]
          },
          {
            id: 's2',
            parts: [
              { type: 'text', content: 'Schon als Kind ' },
              { type: 'blank', id: 'b2', infinitive: 'zeigen', correctAnswer: 'zeigte' },
              { type: 'text', content: ' er großes musikalisches Talent.' }
            ]
          },
          {
            id: 's3',
            parts: [
              { type: 'text', content: 'Sein Vater ' },
              { type: 'blank', id: 'b3', infinitive: 'wollen', correctAnswer: 'wollte' },
              { type: 'text', content: ' aus ihm ein Wunderkind machen.' }
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
              { type: 'text', content: 'Mit 22 Jahren ' },
              { type: 'blank', id: 'b4', infinitive: 'ziehen', correctAnswer: 'zog' },
              { type: 'text', content: ' Beethoven nach Wien.' }
            ]
          },
          {
            id: 's5',
            parts: [
              { type: 'text', content: 'Dort ' },
              { type: 'blank', id: 'b5', infinitive: 'studieren', correctAnswer: 'studierte' },
              { type: 'text', content: ' er bei Joseph Haydn.' }
            ]
          },
          {
            id: 's6',
            parts: [
              { type: 'text', content: 'Er ' },
              { type: 'blank', id: 'b6', infinitive: 'arbeiten', correctAnswer: 'arbeitete' },
              { type: 'text', content: ' hart und ' },
              { type: 'blank', id: 'b7', infinitive: 'komponieren', correctAnswer: 'komponierte' },
              { type: 'text', content: ' wunderbare Musik.' }
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
              { type: 'text', content: 'Mit etwa 28 Jahren ' },
              { type: 'blank', id: 'b8', infinitive: 'beginnen', correctAnswer: 'begann' },
              { type: 'text', content: ' Beethoven, sein Gehör zu verlieren.' }
            ]
          },
          {
            id: 's8',
            parts: [
              { type: 'text', content: 'Trotzdem ' },
              { type: 'blank', id: 'b9', infinitive: 'schaffen', correctAnswer: 'schuf' },
              { type: 'text', content: ' er seine größten Werke in dieser Zeit.' }
            ]
          },
          {
            id: 's9',
            parts: [
              { type: 'text', content: 'Heute ' },
              { type: 'blank', id: 'b10', infinitive: 'gelten', correctAnswer: 'gilt' },
              { type: 'text', content: ' er als einer der größten Komponisten aller Zeiten.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'article-14',
    title: 'Mein Auslandssemester in Spanien',
    difficulty: 'B1',
    topic: 'Erfahrung',
    paragraphs: [
      {
        id: 'p1',
        sentences: [
          {
            id: 's1',
            parts: [
              { type: 'text', content: 'Letztes Jahr ' },
              { type: 'blank', id: 'b1', infinitive: 'verbringen', correctAnswer: 'verbrachte' },
              { type: 'text', content: ' ich ein Auslandssemester in Barcelona.' }
            ]
          },
          {
            id: 's2',
            parts: [
              { type: 'text', content: 'Ich ' },
              { type: 'blank', id: 'b2', infinitive: 'studieren', correctAnswer: 'studierte' },
              { type: 'text', content: ' Spanische Literatur an der Universität.' }
            ]
          },
          {
            id: 's3',
            parts: [
              { type: 'text', content: 'Die Vorlesungen ' },
              { type: 'blank', id: 'b3', infinitive: 'sein', correctAnswer: 'waren' },
              { type: 'text', content: ' sehr interessant.' }
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
              { type: 'text', content: 'Ich ' },
              { type: 'blank', id: 'b4', infinitive: 'wohnen', correctAnswer: 'wohnte' },
              { type: 'text', content: ' bei einer spanischen Familie.' }
            ]
          },
          {
            id: 's5',
            parts: [
              { type: 'text', content: 'Das ' },
              { type: 'blank', id: 'b5', infinitive: 'helfen', correctAnswer: 'half' },
              { type: 'text', content: ' mir sehr, die Sprache zu lernen.' }
            ]
          },
          {
            id: 's6',
            parts: [
              { type: 'text', content: 'Jeden Abend ' },
              { type: 'blank', id: 'b6', infinitive: 'essen', correctAnswer: 'aßen' },
              { type: 'text', content: ' wir gemeinsam zu Abend.' }
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
              { type: 'text', content: 'In den Semesterferien ' },
              { type: 'blank', id: 'b7', infinitive: 'reisen', correctAnswer: 'reiste' },
              { type: 'text', content: ' ich durch Spanien und Portugal.' }
            ]
          },
          {
            id: 's8',
            parts: [
              { type: 'text', content: 'Ich ' },
              { type: 'blank', id: 'b8', infinitive: 'besuchen', correctAnswer: 'besuchte' },
              { type: 'text', content: ' viele Sehenswürdigkeiten.' }
            ]
          },
          {
            id: 's9',
            parts: [
              { type: 'text', content: 'Diese Erfahrung ' },
              { type: 'blank', id: 'b9', infinitive: 'ändern', correctAnswer: 'änderte' },
              { type: 'text', content: ' mein Leben nachhaltig.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'article-15',
    title: 'Die Entdeckung Amerikas',
    difficulty: 'B1',
    topic: 'Geschichte',
    paragraphs: [
      {
        id: 'p1',
        sentences: [
          {
            id: 's1',
            parts: [
              { type: 'text', content: 'Christoph Kolumbus ' },
              { type: 'blank', id: 'b1', infinitive: 'kommen', correctAnswer: 'kam' },
              { type: 'text', content: ' 1451 in Genua zur Welt.' }
            ]
          },
          {
            id: 's2',
            parts: [
              { type: 'text', content: 'Schon früh ' },
              { type: 'blank', id: 'b2', infinitive: 'interessieren', correctAnswer: 'interessierte' },
              { type: 'text', content: ' er sich für Navigation und Seefahrt.' }
            ]
          },
          {
            id: 's3',
            parts: [
              { type: 'text', content: 'Er ' },
              { type: 'blank', id: 'b3', infinitive: 'glauben', correctAnswer: 'glaubte' },
              { type: 'text', content: ', dass man Indien nach Westen erreichen könnte.' }
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
              { type: 'text', content: 'Nach Jahren der Suche ' },
              { type: 'blank', id: 'b4', infinitive: 'finden', correctAnswer: 'fand' },
              { type: 'text', content: ' er Unterstützung bei der spanischen Königin Isabella.' }
            ]
          },
          {
            id: 's5',
            parts: [
              { type: 'text', content: 'Am 3. August 1492 ' },
              { type: 'blank', id: 'b5', infinitive: 'sich aufmachen', correctAnswer: 'machte sich auf' },
              { type: 'text', content: ' er mit drei Schiffen von Spanien aus.' }
            ]
          },
          {
            id: 's6',
            parts: [
              { type: 'text', content: 'Die Reise ' },
              { type: 'blank', id: 'b6', infinitive: 'dauern', correctAnswer: 'dauerte' },
              { type: 'text', content: ' länger als erwartet.' }
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
              { type: 'text', content: 'Am 12. Oktober 1492 ' },
              { type: 'blank', id: 'b7', infinitive: 'erreichen', correctAnswer: 'erreichten' },
              { type: 'text', content: ' sie schließlich eine Insel.' }
            ]
          },
          {
            id: 's8',
            parts: [
              { type: 'text', content: 'Kolumbus ' },
              { type: 'blank', id: 'b8', infinitive: 'glauben', correctAnswer: 'glaubte' },
              { type: 'text', content: ', er sei in Indien angekommen.' }
            ]
          },
          {
            id: 's9',
            parts: [
              { type: 'text', content: 'Tatsächlich ' },
              { type: 'blank', id: 'b9', infinitive: 'entdecken', correctAnswer: 'entdeckte' },
              { type: 'text', content: ' er den amerikanischen Kontinent!' }
            ]
          }
        ]
      }
    ]
  },
  // Neue B2 Artikel (5 Stück)
  {
    id: 'article-16',
    title: 'Die Renaissance',
    difficulty: 'B2',
    topic: 'Kunstgeschichte',
    paragraphs: [
      {
        id: 'p1',
        sentences: [
          {
            id: 's1',
            parts: [
              { type: 'text', content: 'Die Renaissance ' },
              { type: 'blank', id: 'b1', infinitive: 'beginnen', correctAnswer: 'begann' },
              { type: 'text', content: ' im 14. Jahrhundert in Italien.' }
            ]
          },
          {
            id: 's2',
            parts: [
              { type: 'text', content: 'Sie ' },
              { type: 'blank', id: 'b2', infinitive: 'stellen', correctAnswer: 'stellte' },
              { type: 'text', content: ' eine Wiederbelebung antiker Kultur und Philosophie dar.' }
            ]
          },
          {
            id: 's3',
            parts: [
              { type: 'text', content: 'Die Menschen ' },
              { type: 'blank', id: 'b3', infinitive: 'beginnen', correctAnswer: 'begannen' },
              { type: 'text', content: ' wieder, den Menschen in den Mittelpunkt zu stellen.' }
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
              { type: 'text', content: 'In Florenz ' },
              { type: 'blank', id: 'b4', infinitive: 'entstehen', correctAnswer: 'entstanden' },
              { type: 'text', content: ' unter der Medici-Familie revolutionäre Kunstwerke.' }
            ]
          },
          {
            id: 's5',
            parts: [
              { type: 'text', content: 'Künstler wie Leonardo da Vinci und Michelangelo ' },
              { type: 'blank', id: 'b5', infinitive: 'schaffen', correctAnswer: 'schufen' },
              { type: 'text', content: ' Meisterwerke, die heute Weltberühmt sind.' }
            ]
          },
          {
            id: 's6',
            parts: [
              { type: 'text', content: 'Sie ' },
              { type: 'blank', id: 'b6', infinitive: 'verbinden', correctAnswer: 'verbinden' },
              { type: 'text', content: ' künstlerische Schönheit mit wissenschaftlicher Genauigkeit.' }
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
              { type: 'text', content: 'Aber nicht nur in der Kunst, ' },
              { type: 'blank', id: 'b7', infinitive: 'sondern auch', correctAnswer: 'sondern auch' },
              { type: 'text', content: ' in der Wissenschaft gab es Fortschritte.' }
            ]
          },
          {
            id: 's8',
            parts: [
              { type: 'text', content: 'Galileo Galilei ' },
              { type: 'blank', id: 'b8', infinitive: 'herausfordern', correctAnswer: 'herausforderte' },
              { type: 'text', content: ' traditionelle Weltbilder.' }
            ]
          },
          {
            id: 's9',
            parts: [
              { type: 'text', content: 'Die Erfindung des Buchdrucks durch Gutenberg ' },
              { type: 'blank', id: 'b9', infinitive: 'ermöglichen', correctAnswer: 'ermöglichte' },
              { type: 'text', content: ' schließlich die Verbreitung von Wissen im ganzen Kontinent.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'article-17',
    title: 'Klimawandel und seine Folgen',
    difficulty: 'B2',
    topic: 'Umwelt',
    paragraphs: [
      {
        id: 'p1',
        sentences: [
          {
            id: 's1',
            parts: [
              { type: 'text', content: 'Der Klimawandel ' },
              { type: 'blank', id: 'b1', infinitive: 'stellen', correctAnswer: 'stellt' },
              { type: 'text', content: ' eine der größten Herausforderungen unserer Zeit dar.' }
            ]
          },
          {
            id: 's2',
            parts: [
              { type: 'text', content: 'Wissenschaftler ' },
              { type: 'blank', id: 'b2', infinitive: 'warnen', correctAnswer: 'warnen' },
              { type: 'text', content: ' schon seit Jahrzehnten vor den Folgen.' }
            ]
          },
          {
            id: 's3',
            parts: [
              { type: 'text', content: 'Doch erst in den letzten Jahren ' },
              { type: 'blank', id: 'b3', infinitive: 'beginnen', correctAnswer: 'beginnen' },
              { type: 'text', content: ' die Menschen, die Dringlichkeit zu verstehen.' }
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
              { type: 'text', content: 'Die globale Durchschnittstemperatur ' },
              { type: 'blank', id: 'b4', infinitive: 'steigen', correctAnswer: 'ist gestiegen' },
              { type: 'text', content: ' seit der Industrialisierung um etwa 1,2 Grad Celsius.' }
            ]
          },
          {
            id: 's5',
            parts: [
              { type: 'text', content: 'Das ' },
              { type: 'blank', id: 'b5', infinitive: 'führen', correctAnswer: 'führt' },
              { type: 'text', content: ' zu schmelzenden Polkappen und steigenden Meeresspiegeln.' }
            ]
          },
          {
            id: 's6',
            parts: [
              { type: 'text', content: 'Extremwetterereignisse wie Überschwemmungen und Dürren ' },
              { type: 'blank', id: 'b6', infinitive: 'zunehmen', correctAnswer: 'nehmen' },
              { type: 'text', content: ' weiter zu.' }
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
              { type: 'text', content: 'Aber es gibt auch Hoffnung: Viele Länder ' },
              { type: 'blank', id: 'b7', infinitive: 'arbeiten', correctAnswer: 'arbeiten' },
              { type: 'text', content: ' nun an Lösungen.' }
            ]
          },
          {
            id: 's8',
            parts: [
              { type: 'text', content: 'Erneuerbare Energien wie Wind- und Solarenergie ' },
              { type: 'blank', id: 'b8', infinitive: 'werden', correctAnswer: 'werden' },
              { type: 'text', content: ' immer wichtiger.' }
            ]
          },
          {
            id: 's9',
            parts: [
              { type: 'text', content: 'Jeder Einzelne ' },
              { type: 'blank', id: 'b9', infinitive: 'können', correctAnswer: 'kann' },
              { type: 'text', content: ' einen Beitrag leisten, indem er sein Verhalten ändert.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'article-18',
    title: 'Das deutsche Bildungssystem',
    difficulty: 'B2',
    topic: 'Bildung',
    paragraphs: [
      {
        id: 'p1',
        sentences: [
          {
            id: 's1',
            parts: [
              { type: 'text', content: 'Das deutsche Bildungssystem ' },
              { type: 'blank', id: 'b1', infinitive: 'unterscheiden', correctAnswer: 'unterscheidet' },
              { type: 'text', content: ' sich erheblich von Systemen anderer Länder.' }
            ]
          },
          {
            id: 's2',
            parts: [
              { type: 'text', content: 'Grundsätzlich ' },
              { type: 'blank', id: 'b2', infinitive: 'liegen', correctAnswer: 'liegt' },
              { type: 'text', content: ' die Bildungshoheit bei den einzelnen Bundesländern.' }
            ]
          },
          {
            id: 's3',
            parts: [
              { type: 'text', content: 'Das ' },
              { type: 'blank', id: 'b3', infinitive: 'führen', correctAnswer: 'führt' },
              { type: 'text', content: ' zu regionalen Unterschieden im Bildungsangebot.' }
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
              { type: 'text', content: 'Nach der vierjährigen Grundschule ' },
              { type: 'blank', id: 'b4', infinitive: 'kommen', correctAnswer: 'kommen' },
              { type: 'text', content: ' die Kinder auf verschiedene weiterführende Schulen.' }
            ]
          },
          {
            id: 's5',
            parts: [
              { type: 'text', content: 'Die Hauptschule ' },
              { type: 'blank', id: 'b5', infinitive: 'vorbereiten', correctAnswer: 'bereitet' },
              { type: 'text', content: ' auf eine berufliche Ausbildung vor.' }
            ]
          },
          {
            id: 's6',
            parts: [
              { type: 'text', content: 'Das Gymnasium ' },
              { type: 'blank', id: 'b6', infinitive: 'führen', correctAnswer: 'führt' },
              { type: 'text', content: ' zum Abitur, der Hochschulzugangsberechtigung.' }
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
              { type: 'text', content: 'Kritiker ' },
              { type: 'blank', id: 'b7', infinitive: 'meinen', correctAnswer: 'meinen' },
              { type: 'text', content: ', dass die frühe Trennung soziale Ungleichheit verstärkt.' }
            ]
          },
          {
            id: 's8',
            parts: [
              { type: 'text', content: 'Sie ' },
              { type: 'blank', id: 'b8', infinitive: 'fordern', correctAnswer: 'fordern' },
              { type: 'text', content: ' mehr Gemeinschaftsschulen für alle Kinder.' }
            ]
          },
          {
            id: 's9',
            parts: [
              { type: 'text', content: 'Trotzdem ' },
              { type: 'blank', id: 'b9', infinitive: 'gelten', correctAnswer: 'gilt' },
              { type: 'text', content: ' das deutsche Bildungsystem international als solide.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'article-19',
    title: 'Die Geschichte des Automobils',
    difficulty: 'B2',
    topic: 'Technik',
    paragraphs: [
      {
        id: 'p1',
        sentences: [
          {
            id: 's1',
            parts: [
              { type: 'text', content: 'Die Geschichte des Automobils ' },
              { type: 'blank', id: 'b1', infinitive: 'beginnen', correctAnswer: 'beginnt' },
              { type: 'text', content: ' nicht etwa erst mit dem Benz-Patent-Motorwagen 1886.' }
            ]
          },
          {
            id: 's2',
            parts: [
              { type: 'text', content: 'Schon vorher ' },
              { type: 'blank', id: 'b2', infinitive: 'geben', correctAnswer: 'gab' },
              { type: 'text', content: ' zahlreiche Versuche mit Dampf- und Elektrofahrzeugen.' }
            ]
          },
          {
            id: 's3',
            parts: [
              { type: 'text', content: 'Den Durchbruch ' },
              { type: 'blank', id: 'b3', infinitive: 'schaffen', correctAnswer: 'schaffte' },
              { type: 'text', content: ' aber der Verbrennungsmotor.' }
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
              { type: 'text', content: 'Carl Benz und Gottlieb Daimler ' },
              { type: 'blank', id: 'b4', infinitive: 'entwickeln', correctAnswer: 'entwickelten' },
              { type: 'text', content: ' unabhängig voneinander die ersten praktischen Automobile.' }
            ]
          },
          {
            id: 's5',
            parts: [
              { type: 'text', content: 'Anfangs ' },
              { type: 'blank', id: 'b5', infinitive: 'sein', correctAnswer: 'waren' },
              { type: 'text', content: ' Autos Luxusobjekte für Reiche.' }
            ]
          },
          {
            id: 's6',
            parts: [
              { type: 'text', content: 'Das änderte sich, als Henry Ford 1913 die Fließbandproduktion ' },
              { type: 'blank', id: 'b6', infinitive: 'einführen', correctAnswer: 'einführte' },
              { type: 'text', content: '.' }
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
              { type: 'text', content: 'Plötzlich ' },
              { type: 'blank', id: 'b7', infinitive: 'werden', correctAnswer: 'wurden' },
              { type: 'text', content: ' Autos erschwinglich für breite Bevölkerungsgruppen.' }
            ]
          },
          {
            id: 's8',
            parts: [
              { type: 'text', content: 'Heute ' },
              { type: 'blank', id: 'b8', infinitive: 'stehen', correctAnswer: 'stehen' },
              { type: 'text', content: ' wir wieder vor einem Wandel: dem Übergang zum Elektroauto.' }
            ]
          },
          {
            id: 's9',
            parts: [
              { type: 'text', content: 'Vielleicht ' },
              { type: 'blank', id: 'b9', infinitive: 'erleben', correctAnswer: 'erleben' },
              { type: 'text', content: ' wir in ein paar Jahrzehnten das Ende des Verbrennungsmotors.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'article-20',
    title: 'Psychologie des Glücks',
    difficulty: 'B2',
    topic: 'Wissenschaft',
    paragraphs: [
      {
        id: 'p1',
        sentences: [
          {
            id: 's1',
            parts: [
              { type: 'text', content: 'Was ' },
              { type: 'blank', id: 'b1', infinitive: 'machen', correctAnswer: 'macht' },
              { type: 'text', content: ' uns wirklich glücklich?' }
            ]
          },
          {
            id: 's2',
            parts: [
              { type: 'text', content: 'Diese Frage ' },
              { type: 'blank', id: 'b2', infinitive: 'befassen', correctAnswer: 'befasst' },
              { type: 'text', content: ' Philosophen seit Jahrhunderten.' }
            ]
          },
          {
            id: 's3',
            parts: [
              { type: 'text', content: 'Heute ' },
              { type: 'blank', id: 'b3', infinitive: 'untersuchen', correctAnswer: 'untersuchen' },
              { type: 'text', content: ' auch Psychologen dieses Thema wissenschaftlich.' }
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
              { type: 'text', content: 'Viele Menschen ' },
              { type: 'blank', id: 'b4', infinitive: 'glauben', correctAnswer: 'glauben' },
              { type: 'text', content: ', dass Reichtum glücklich macht.' }
            ]
          },
          {
            id: 's5',
            parts: [
              { type: 'text', content: 'Aber Studien ' },
              { type: 'blank', id: 'b5', infinitive: 'zeigen', correctAnswer: 'zeigen' },
              { type: 'text', content: ', dass Geld nur bis zu einem bestimmten Punkt glücklich macht.' }
            ]
          },
          {
            id: 's6',
            parts: [
              { type: 'text', content: 'Sobald die Grundbedürfnisse ' },
              { type: 'blank', id: 'b6', infinitive: 'befriedigen', correctAnswer: 'befriedigt' },
              { type: 'text', content: ' sind, steigert mehr Geld das Wohlbefinden kaum.' }
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
              { type: 'text', content: 'Viel wichtiger ' },
              { type: 'blank', id: 'b7', infinitive: 'sein', correctAnswer: 'sind' },
              { type: 'text', content: ' soziale Beziehungen und ein Sinn im Leben.' }
            ]
          },
          {
            id: 's8',
            parts: [
              { type: 'text', content: 'Menschen mit starken Freundschaften und Familienbindungen ' },
              { type: 'blank', id: 'b8', infinitive: 'leben', correctAnswer: 'leben' },
              { type: 'text', content: ' nachweislich länger und glücklicher.' }
            ]
          },
          {
            id: 's9',
            parts: [
              { type: 'text', content: 'Auch Dankbarkeit und das Geben an Andere ' },
              { type: 'blank', id: 'b9', infinitive: 'steigern', correctAnswer: 'steigern' },
              { type: 'text', content: ' nachweislich das eigene Glücksempfinden.' }
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
  attempts: PracticeAttempt[]
}

function getDb(): DatabaseData {
  const data = localStorage.getItem(STORAGE_KEY)
  if (data) {
    const parsed = JSON.parse(data) as Partial<DatabaseData>
    return {
      articles: parsed.articles || [],
      mistakes: parsed.mistakes || [],
      attempts: parsed.attempts || [],
    }
  }
  return {
    articles: seedArticles as Article[],
    mistakes: [],
    attempts: [],
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

  getAttempts: async (): Promise<PracticeAttempt[]> => {
    return getDb().attempts || []
  },

  insertAttempt: async (attempt: PracticeAttempt): Promise<void> => {
    const db = getDb()
    db.attempts = db.attempts || []
    db.attempts.push(attempt)
    saveDb(db)
  },
}
