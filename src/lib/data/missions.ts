import type { Mission } from '../types';

export const missions: Mission[] = [
  {
    id: 'mission-1',
    title: 'Mission "Zéro Veille"',
    description: 'Débranchez tous les appareils électroniques non utilisés',
    action: 'Ce soir, débranchez tous les appareils électroniques non utilisés avant de vous coucher. Comptez combien de prises vous avez débranchées !',
    category: 'energy',
    difficulty: 'easy',
    estimatedTime: '10 minutes',
    impact: 'Économie de 5-10% sur votre facture électrique'
  },
  {
    id: 'mission-2',
    title: 'Mission "Douche Éclair"',
    description: 'Réduisez le temps de votre douche de 2 minutes',
    action: 'Chronométrez votre douche ce matin. Essayez de la réduire de 2 minutes par rapport à votre temps habituel !',
    category: 'water',
    difficulty: 'medium',
    estimatedTime: '5 minutes',
    impact: 'Économie de 20 litres d\'eau par douche'
  },
  {
    id: 'mission-3',
    title: 'Mission "Chasse au Gaspi Alimentaire"',
    description: 'Identifiez et utilisez un aliment qui risque d\'être gaspillé',
    action: 'Ouvrez votre réfrigérateur et identifiez un aliment qui risque d\'être gaspillé. Trouvez une recette rapide pour l\'utiliser aujourd\'hui !',
    category: 'food',
    difficulty: 'medium',
    estimatedTime: '15 minutes',
    impact: 'Réduction du gaspillage alimentaire domestique'
  },
  {
    id: 'mission-4',
    title: 'Mission "Transport Doux"',
    description: 'Choisissez la marche ou le vélo pour un court déplacement',
    action: 'Pour votre prochain court déplacement (moins de 2km), choisissez la marche ou le vélo au lieu de la voiture.',
    category: 'transport',
    difficulty: 'easy',
    estimatedTime: '30 minutes',
    impact: 'Réduction de 2kg de CO2 par trajet'
  },
  {
    id: 'mission-5',
    title: 'Mission "Lumière Éteinte"',
    description: 'Éteignez les lumières non essentielles pendant 1 heure',
    action: 'Pendant 1 heure ce soir, éteignez toutes les lumières non essentielles dans votre habitation.',
    category: 'energy',
    difficulty: 'easy',
    estimatedTime: '2 minutes',
    impact: 'Économie d\'énergie et sensibilisation'
  },
  {
    id: 'mission-6',
    title: 'Mission "Bouteille Réutilisable"',
    description: 'Utilisez uniquement une gourde réutilisable aujourd\'hui',
    action: 'Aujourd\'hui, utilisez uniquement une gourde ou une bouteille réutilisable pour boire. Pas de bouteille plastique à usage unique !',
    category: 'waste',
    difficulty: 'easy',
    estimatedTime: '5 minutes',
    impact: 'Éviter 1 à 3 bouteilles plastiques jetables'
  },
  {
    id: 'mission-7',
    title: 'Mission "Tri Parfait"',
    description: 'Vérifiez le tri de vos déchets pendant 2 minutes',
    action: 'Avant de jeter vos déchets, prenez 2 minutes pour vérifier que tout est correctement trié selon les règles de votre commune.',
    category: 'waste',
    difficulty: 'easy',
    estimatedTime: '5 minutes',
    impact: 'Amélioration du recyclage local'
  }
];

export function getRandomMission(): Mission {
  const randomIndex = Math.floor(Math.random() * missions.length);
  return missions[randomIndex];
}

export function getDailyMission(): Mission {
  // Use date as seed for consistent daily mission
  const today = new Date().toDateString();
  const seed = today.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  const index = Math.abs(seed) % missions.length;
  return missions[index];
}