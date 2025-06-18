import type { Action } from '../types';

export const actions: Action[] = [
  {
    id: 'action-1',
    title: 'Découvrez les bienfaits du compostage domestique',
    description: 'Apprenez à transformer vos déchets organiques en or noir pour vos plantes tout en réduisant de 30% le volume de vos poubelles.',
    category: 'waste',
    difficulty: 'beginner',
    timeToRead: '5 min',
    resources: [
      'Guide du compostage pour débutants',
      'Liste des déchets compostables',
      'Où acheter ou fabriquer un composteur'
    ]
  },
  {
    id: 'action-2',
    title: 'Renseignez-vous sur les labels écologiques',
    description: 'Décryptez les principaux labels environnementaux pour faire des achats plus responsables et éviter le greenwashing.',
    category: 'consumption',
    difficulty: 'intermediate',
    timeToRead: '7 min',
    resources: [
      'Guide des labels écologiques fiables',
      'Applications pour scanner les produits',
      'Sites web de vérification des certifications'
    ]
  },
  {
    id: 'action-3',
    title: 'Trouvez un marché de producteurs locaux',
    description: 'Localisez les marchés et producteurs près de chez vous pour réduire l\'impact carbone de votre alimentation.',
    category: 'food',
    difficulty: 'beginner',
    timeToRead: '3 min',
    resources: [
      'Annuaire des marchés locaux',
      'Applications de circuits courts',
      'Cartes des producteurs bio'
    ]
  },
  {
    id: 'action-4',
    title: 'Calculez votre empreinte carbone',
    description: 'Évaluez précisément votre impact environnemental et identifiez les domaines où vous pouvez progresser.',
    category: 'consumption',
    difficulty: 'intermediate',
    timeToRead: '10 min',
    resources: [
      'Calculateurs d\'empreinte carbone',
      'Outils de suivi personnel',
      'Plans d\'action personnalisés'
    ]
  },
  {
    id: 'action-5',
    title: 'Optimisez l\'isolation de votre logement',
    description: 'Découvrez les solutions simples et économiques pour améliorer l\'isolation thermique de votre habitat.',
    category: 'energy',
    difficulty: 'advanced',
    timeToRead: '12 min',
    resources: [
      'Guide des matériaux isolants écologiques',
      'Aides financières disponibles',
      'Professionnels certifiés RGE'
    ]
  }
];

export function getDailyAction(): Action {
  // Use date as seed for consistent daily action
  const today = new Date().toDateString();
  const seed = today.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  const index = Math.abs(seed) % actions.length;
  return actions[index];
}

export function getActionsByCategory(category: string): Action[] {
  return actions.filter(action => action.category === category);
}