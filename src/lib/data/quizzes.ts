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
  },
  {
    id: 'q6',
    question: 'Quel appareil consomme le plus d’énergie dans un foyer en moyenne ?',
    options: ['Réfrigérateur', 'Télévision', 'Chauffe-eau', 'Ordinateur'],
    correctAnswer: 2,
    explanation: 'Le chauffe-eau est souvent l’un des plus gros consommateurs d’énergie dans un foyer.',
    category: 'energy'
  },
  {
    id: 'q7',
    question: 'Quel est le meilleur moment de la journée pour arroser son jardin ?',
    options: ['Le matin', 'L’après-midi', 'Le soir', 'Peu importe'],
    correctAnswer: 0,
    explanation: 'Le matin permet une meilleure absorption et évite l’évaporation excessive.',
    category: 'water'
  },
  {
    id: 'q8',
    question: 'Quel déchet met le plus de temps à se décomposer ?',
    options: ['Papier', 'Canette en aluminium', 'Mégot de cigarette', 'Verre'],
    correctAnswer: 3,
    explanation: 'Le verre peut mettre jusqu’à 4 000 ans à se décomposer.',
    category: 'waste'
  },
  {
    id: 'q9',
    question: 'Quel est le principal gaz à effet de serre ?',
    options: ['Oxygène', 'Méthane', 'Dioxyde de carbone', 'Azote'],
    correctAnswer: 2,
    explanation: 'Le dioxyde de carbone est le principal gaz à effet de serre émis par les activités humaines.',
    category: 'energy'
  },
  {
    id: 'q10',
    question: 'Quelle quantité de CO2 est émise par un vol Paris-New York aller-retour par passager ?',
    options: ['200 kg', '800 kg', '1,6 tonne', '3 tonnes'],
    correctAnswer: 2,
    explanation: 'Un vol Paris-New York aller-retour émet environ 1,6 tonne de CO2 par passager.',
    category: 'transport'
  },
  {
  id: 'q11',
  question: 'Quel gaz est le plus responsable du réchauffement climatique ?',
  options: ['Oxygène', 'Dioxyde de carbone (CO₂)', 'Hélium', 'Ozone'],
  correctAnswer: 1,
  explanation: 'Le dioxyde de carbone est le principal gaz à effet de serre émis par les activités humaines.',
  category: 'climate'
},
{
  id: 'q12',
  question: 'Combien de temps met une bouteille en plastique à se décomposer ?',
  options: ['5 ans', '50 ans', '450 ans', '1000 ans'],
  correctAnswer: 2,
  explanation: 'Une bouteille plastique peut mettre jusqu\'à 450 ans à se décomposer complètement.',
  category: 'waste'
},
{
  id: 'q13',
  question: 'Quelle source d’énergie est renouvelable ?',
  options: ['Charbon', 'Gaz naturel', 'Soleil', 'Pétrole'],
  correctAnswer: 2,
  explanation: 'L’énergie solaire est inépuisable et non polluante, contrairement aux énergies fossiles.',
  category: 'energy'
},
{
  id: 'q14',
  question: 'Pourquoi les abeilles sont-elles essentielles à l’environnement ?',
  options: ['Elles mangent les moustiques', 'Elles produisent du miel', 'Elles pollinisent les plantes', 'Elles fertilisent le sol'],
  correctAnswer: 2,
  explanation: 'Les abeilles pollinisent 75% des cultures alimentaires dans le monde.',
  category: 'biodiversity'
},
{
  id: 'q15',
  question: 'Quelle est la principale cause de l’effet de serre ?',
  options: ['Radiations solaires', 'Destruction de la couche d’ozone', 'Émissions humaines de gaz à effet de serre', 'Marées'],
  correctAnswer: 2,
  explanation: 'Les activités humaines émettent du CO₂ et d’autres gaz qui piègent la chaleur.',
  category: 'climate'
},
{
  id: 'q16',
  question: 'Quelle est la différence entre recyclage et réutilisation ?',
  options: ['Le recyclage détruit l’objet, la réutilisation non', 'Le recyclage est plus écologique', 'La réutilisation nécessite une usine', 'Il n’y a aucune différence'],
  correctAnswer: 0,
  explanation: 'La réutilisation consiste à prolonger la vie d’un objet sans le transformer.',
  category: 'waste'
},
{
  id: 'q17',
  question: 'Quel appareil consomme le plus d’électricité dans une maison ?',
  options: ['Ampoule', 'Four', 'Réfrigérateur', 'Box internet'],
  correctAnswer: 2,
  explanation: 'Le réfrigérateur consomme beaucoup car il fonctionne en continu, 24h/24.',
  category: 'energy'
},
{
  id: 'q18',
  question: 'Qu’est-ce qu’une espèce menacée ?',
  options: ['Une espèce dangereuse', 'Une espèce invasive', 'Une espèce en forte diminution', 'Une espèce en mutation'],
  correctAnswer: 2,
  explanation: 'Une espèce menacée est en voie d’extinction si aucune mesure n’est prise.',
  category: 'biodiversity'
},
{
  id: 'q19',
  question: 'Que signifie le terme "neutralité carbone" ?',
  options: ['Zéro émission de CO₂', 'Un arbre par jour', 'Équilibrer émissions et absorptions de CO₂', 'Utiliser de l’énergie solaire uniquement'],
  correctAnswer: 2,
  explanation: 'La neutralité carbone implique un équilibre entre les émissions et les absorptions de CO₂.',
  category: 'climate'
},
{
  id: 'q20',
  question: 'Quel type de déchet est le plus difficile à recycler ?',
  options: ['Verre', 'Aluminium', 'Plastique multicouche', 'Papier'],
  correctAnswer: 2,
  explanation: 'Les plastiques multicouches (ex. emballages de chips) sont très difficiles à séparer pour être recyclés.',
  category: 'waste'
},

]

;

export function generateDailyQuiz(previousIds: string[]): Quiz {
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