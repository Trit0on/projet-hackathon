export interface Mission {
  id: string;
  title: string;
  description: string;
  action: string;
  category: 'energy' | 'water' | 'transport' | 'waste' | 'consumption' | 'food';
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedTime: string;
  impact: string;
  completed?: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
  completed?: boolean;
  score?: number;
}

export interface Action {
  id: string;
  title: string;
  description: string;
  descriptionDetail : string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeToRead: string;
  resources?: string[];
}

export interface UserProgress {
  missionsCompleted: number;
  quizzesCompleted: number;
  totalPoints: number;
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string;
}