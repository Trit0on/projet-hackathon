import type { Quiz, QuizQuestion } from '../types';

const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Combien de litres d\'eau consomme en moyenne une douche de 5 minutes ?',
    options: ['25 litres', '50 litres', '75 litres', '100 litres'],
    correctAnswer: 2,
    explanation: 'Une douche de 5 minutes consomme environ 75 litres d\'eau avec un pommeau standard.',
    category: 'water'
  },
  {
    id: 'q2',
    question: 'Quel pourcentage de l\'électricité domestique est consommé par les appareils en veille ?',
    options: ['2-3%', '5-10%', '15-20%', '25-30%'],
    correctAnswer: 1,
    explanation: 'Les appareils en veille consomment entre 5 et 10% de l\'électricité domestique, soit environ 50€ par an.',
    category: 'energy'
  },
  {
    id: 'q3',
    question: 'Combien de temps met une bouteille en plastique à se décomposer dans la nature ?',
    options: ['50 ans', '150 ans', '450 ans', '1000 ans'],
    correctAnswer: 2,
    explanation: 'Une bouteille en plastique met environ 450 ans à se décomposer complètement dans la nature.',
    category: 'waste'
  },
  {
    id: 'q4',
    question: 'Quelle est la distance maximale recommandée pour privilégier le vélo à la voiture ?',
    options: ['1 km', '3 km', '5 km', '10 km'],
    correctAnswer: 2,
    explanation: 'Pour des trajets de moins de 5 km, le vélo est souvent plus rapide et écologique que la voiture en milieu urbain.',
    category: 'transport'
  },
  {
    id: 'q5',
    question: 'Quel pourcentage de la nourriture produite dans le monde est gaspillée ?',
    options: ['10%', '20%', '30%', '40%'],
    correctAnswer: 2,
    explanation: 'Environ 30% de la nourriture produite dans le monde est gaspillée, soit 1,3 milliard de tonnes par an.',
    category: 'food'
  }
];

export function generateDailyQuiz(): Quiz {
  // Select 3 random questions for daily quiz
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  const dailyQuestions = shuffled.slice(0, 3);
  
  return {
    id: `quiz-${new Date().toISOString().split('T')[0]}`,
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