export interface Article {
  id: string;
  title: string;
  difficulty: 'A2' | 'B1';
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
