import type { Quiz, QuizQuestion } from '../types';
import questionsData from './questions.json';

// On récupère les questions depuis le JSON
const questions: QuizQuestion[] = questionsData.questions;

export function generateDailyQuiz(): Quiz {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  const dailyQuestions = shuffled.slice(0, 3);

  return {
    id: `quiz-${questionsData.date}`,
    title: 'Quiz Éclair du Jour',
    questions: dailyQuestions
  };
}

export function getQuizByCategory(category: string): Quiz {
  const categoryQuestions = questions.filter(q => q.category === category);

  return {
    id: `quiz-${category}`,
    title: `Quiz ${category}`,
    questions: categoryQuestions.slice(0, 3)
  };
}
