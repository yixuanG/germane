export interface Article {
  id: string;
  title: string;
  difficulty: 'A2' | 'B1' | 'B2';
  topic: string;
  paragraphs: Paragraph[];
}

export interface Paragraph {
  id: string;
  sentences: Sentence[];
}

export interface Sentence {
  id: string;
  parts: SentencePart[];
}

export type SentencePart = TextPart | BlankPart;

export interface TextPart {
  type: 'text';
  content: string;
}

export interface BlankPart {
  type: 'blank';
  id: string;
  infinitive: string;
  correctAnswer: string;
  hint?: string;
}

export interface MistakeRecord {
  id: string;
  articleId: string;
  articleTitle: string;
  sentence: string;
  infinitive: string;
  correctForm: string;
  userAnswer?: string;
  createdAt: number;
  reviewedAt?: number;
}

export interface DatabaseSchema {
  articles: Article[];
  mistakes: MistakeRecord[];
}

export type SupportedLanguage = 'en' | 'de' | 'zh';

export interface LocalizedText {
  en: string;
  de: string;
  zh: string;
}

export type TranslationStance = 'pro' | 'con' | 'balanced';

export interface TranslationPrompt {
  id: string;
  stance: TranslationStance;
  label: LocalizedText;
  source: LocalizedText;
  references: {
    c1: string;
    c2: string;
  };
}

export interface TranslationTopic {
  id: string;
  title: LocalizedText;
  examFocus: string[];
  description: LocalizedText;
  prompts: TranslationPrompt[];
}
