# Germane

A modern, offline desktop application for practicing German grammar and vocabulary.

## Features

- **Past Tense Practice**: Cloze test (fill-in-the-blanks) exercises focusing on irregular verbs in Präteritum and Perfekt
- **20 Sample Articles**: Pre-loaded content at A2-B1-B2 difficulty level (Aesop's Fables, Newton's Apple, history, science, art, etc.)
- **Addictive Learning Experience**: Instant positive feedback with satisfying "ding" sound when you get an answer right
- **Mistake Notebook**: Automatically tracks your mistakes for later review
- **Multi-language Support**: UI available in English, German, and Simplified Chinese
- **Offline-first**: All data stored locally - no internet connection required

## Tech Stack

- **Desktop Framework**: Electron (coming soon)
- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **UI & Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand
- **Localization**: react-i18next
- **Data Persistence**: lowdb (with localStorage fallback for browser testing)

## Getting Started

### Installation

```bash
npm install
```

### Development (Browser Mode)

```bash
npm run dev
```

The app will be available at http://localhost:5173

### Build

```bash
npm run build
```

Builds the React app for production to the `dist` folder.

## Project Structure

```
germane/
├── src/
│   ├── main/                 # Electron main process
│   ├── renderer/             # React app
│   │   ├── components/
│   │   │   ├── layout/      # Sidebar, TitleBar
│   │   │   ├── ui/          # shadcn components
│   │   │   └── practice/    # Cloze test components
│   │   ├── pages/           # Route pages
│   │   ├── hooks/           # Custom hooks
│   │   ├── stores/          # Zustand state
│   │   ├── i18n/            # Translations
│   │   └── lib/             # Utilities
│   └── shared/              # Shared types
├── public/
│   └── data/                # Seed data
└── dist/                    # Build output
```

## License

MIT
