# Germane

## About

Germane is an offline-first desktop app for practicing German through focused, text-based exercises. It combines grammar drills with richer writing-oriented practice so learners can move from recognizing forms to using them naturally in context.

The current app includes past-tense cloze practice, C1/C2 paragraph translation training, preposition practice across short narratives and mature expository texts, and a mistake notebook for reviewing missed grammar items. It is designed for fast feedback, keyboard-friendly study sessions, and local-first learning without requiring an internet connection.

## Features

- **Past tense practice** with article-based cloze exercises for German verb forms
- **Paragraph translation practice** for TestDaF and Goethe-style argumentative writing, with C1/C2 reference answers
- **Preposition practice** covering verb-preposition patterns, place/direction usage, and noun-preposition combinations
- **Contextual texts** ranging from short narratives to explanatory and argumentative passages
- **Instant feedback** with responsive visual states and positive audio confirmation on correct answers
- **Mistake notebook** for reviewing missed past-tense items
- **Multilingual interface** in English, German, and Simplified Chinese
- **Offline-first persistence** with local data storage and browser-mode fallback for development

## Tech Stack

- **Desktop**: Electron
- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **UI & Styling**: Tailwind CSS + shadcn/ui patterns
- **State Management**: Zustand
- **Localization**: react-i18next
- **Persistence**: lowdb with a localStorage fallback for browser testing

## Getting Started

```bash
npm install
npm run dev
```

The browser development build runs at `http://localhost:5173`.

To build the app:

```bash
npm run build
```

## Project Structure

```text
germane/
├── src/
│   ├── main/                 # Electron main process, IPC, local database
│   ├── renderer/             # React application
│   │   ├── components/       # Layout and exercise UI
│   │   ├── pages/            # Route pages
│   │   ├── hooks/            # Data hooks
│   │   ├── stores/           # Zustand state
│   │   ├── i18n/             # Locale files
│   │   └── lib/              # Exercise data and helpers
│   └── shared/               # Shared types
├── public/                   # Static assets and seed data
└── dist/                     # Build output
```

## License

MIT
