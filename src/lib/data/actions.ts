import type { Action } from '../types';

export const actions: Action[] = [
  {
    category: 'waste',
    description: 'Apprenez à transformer vos déchets organiques en or noir pour vos plantes tout en réduisant de 30% le volume de vos poubelles.',
    descriptionDetail: `Le compostage domestique est un geste simple et puissant pour réduire vos déchets tout en nourrissant naturellement vos plantes.
En triant vos déchets organiques — épluchures, marc de café, coquilles d'œufs — vous pouvez créer un compost riche en nutriments.

Non seulement cela réduit jusqu'à 30 % le contenu de votre poubelle, mais cela évite aussi l'émission de méthane dans les décharges.

Pour commencer, choisissez un coin de votre jardin ou un composteur d'appartement. Alternez couches de déchets humides (restes de cuisine) et de déchets secs (papier kraft, feuilles mortes).

En quelques semaines, vous obtiendrez un engrais naturel et gratuit, parfait pour vos plantes et votre potager.`,
    difficulty: 'beginner',
    id: 'action-1',
    resources: [
      'Guide du compostage pour débutants',
      'Liste des déchets compostables',
      'Où acheter ou fabriquer un composteur'
    ],
    timeToRead: '5 min',
    title: 'Découvrez les bienfaits du compostage domestique'
  },
  {
    category: 'consumption',
    description: 'Décryptez les principaux labels environnementaux pour faire des achats plus responsables et éviter le greenwashing.',
    descriptionDetail: `Les labels écologiques permettent aux consommateurs de faire des choix plus éclairés et responsables. Mais face à la multitude d'étiquettes présentes sur les produits, il devient difficile de s'y retrouver.

Pour éviter le greenwashing, il est essentiel de comprendre la signification réelle de chaque label. Certains sont reconnus par des organismes indépendants et garantissent un véritable engagement environnemental (comme l'Écolabel européen, AB, ou FSC). D'autres peuvent être purement marketing.

Prenez quelques minutes pour consulter un guide fiable, et commencez à scanner les produits avec une application dédiée. Vous serez surpris de constater les différences entre deux produits similaires.

Un achat éclairé est un petit pas de plus vers une consommation durable.`,
    difficulty: 'intermediate',
    id: 'action-2',
    resources: [
      'Guide des labels écologiques fiables',
      'Applications pour scanner les produits',
      'Sites web de vérification des certifications'
    ],
    timeToRead: '7 min',
    title: 'Renseignez-vous sur les labels écologiques'
  },
  {
    category: 'food',
    description: 'Localisez les marchés et producteurs près de chez vous pour réduire l\'impact carbone de votre alimentation.',
    descriptionDetail: `Acheter local, c'est soutenir les producteurs de votre région tout en réduisant l'empreinte carbone liée au transport des aliments.

Commencez par identifier les marchés proches de chez vous : municipalités, AMAP, ou applications de circuits courts peuvent vous aider à trouver les bons plans. Parler directement avec un producteur, c'est aussi l'occasion de mieux connaître ce que vous mangez.

Privilégier les produits de saison et cultivés près de chez vous permet non seulement de préserver la planète, mais aussi de retrouver le goût authentique des aliments.

Une habitude simple qui a un impact puissant sur l'environnement et sur votre santé.`,
    difficulty: 'beginner',
    id: 'action-3',
    resources: [
      'Annuaire des marchés locaux',
      'Applications de circuits courts',
      'Cartes des producteurs bio'
    ],
    timeToRead: '3 min',
    title: 'Trouvez un marché de producteurs locaux'
  },
  {
    category: 'consumption',
    description: 'Évaluez précisément votre impact environnemental et identifiez les domaines où vous pouvez progresser.',
    descriptionDetail: `Connaître son empreinte carbone est le premier pas vers une transition écologique personnelle.

Des calculateurs en ligne simples et gratuits vous permettent d'évaluer l'impact de vos déplacements, de votre alimentation, de votre consommation énergétique ou encore de vos achats. En quelques clics, vous obtenez une vision claire de votre impact environnemental.

L'objectif n'est pas de culpabiliser, mais d'identifier les axes d'amélioration. Une fois votre empreinte connue, vous pouvez définir des objectifs réalistes : moins de trajets en voiture, isolation du logement, ou consommation plus responsable.

C'est un excellent point de départ pour toute personne qui souhaite agir concrètement.`,
    difficulty: 'intermediate',
    id: 'action-4',
    resources: [
      'Calculateurs d\'empreinte carbone',
      'Outils de suivi personnel',
      'Plans d\'action personnalisés'
    ],
    timeToRead: '10 min',
    title: 'Calculez votre empreinte carbone'
  },
  {
    category: 'energy',
    description: 'Découvrez les solutions simples et économiques pour améliorer l\'isolation thermique de votre habitat.',
    descriptionDetail: `Une bonne isolation permet de réduire significativement vos besoins en chauffage et climatisation, deux postes très énergivores dans un foyer.

Commencez par repérer les pertes thermiques : fenêtres mal isolées, combles non traités, murs froids… Ensuite, renseignez-vous sur les matériaux écologiques comme la ouate de cellulose, le liège ou la laine de bois.

De nombreuses aides financières existent pour vous accompagner dans ces travaux, notamment les primes énergie ou MaPrimeRénov'. Vous pouvez également faire appel à des professionnels certifiés RGE pour obtenir un diagnostic fiable.

Optimiser l'isolation, c'est faire un geste pour la planète et pour votre portefeuille.`,
    difficulty: 'advanced',
    id: 'action-5',
    resources: [
      'Guide des matériaux isolants écologiques',
      'Aides financières disponibles',
      'Professionnels certifiés RGE'
    ],
    timeToRead: '12 min',
    title: 'Optimisez l\'isolation de votre logement'
  },
  {
    category: 'water',
    description: 'Apprenez comment installer des mousseurs pour réduire le débit de vos robinets sans perdre en confort.',
    descriptionDetail: `Un mousseur mélange de l'air avec l'eau pour diminuer le débit tout en conservant une sensation de jet identique.

Installez-en sur vos robinets et économisez jusqu'à 50 % d'eau potable. C'est une opération simple qui ne nécessite qu'une clé plate et quelques minutes.`,
    difficulty: 'beginner',
    id: 'action-6',
    resources: [
      'Tutoriel vidéo d\'installation',
      'Guide des mousseurs compatibles',
      'Boutiques proposant des mousseurs'
    ],
    timeToRead: '4 min',
    title: 'Réduisez votre consommation d\'eau avec des mousseurs'
  },
  {
    category: 'transport',
    description: 'Découvrez comment organiser vos trajets pour pratiquer le covoiturage quotidiennement.',
    descriptionDetail: `Le covoiturage régulier permet de réduire les émissions de CO₂, la congestion routière et vos frais de déplacement.

Identifiez vos trajets récurrents et utilisez des applications dédiées pour trouver des partenaires. Planifiez des points de rencontre sûrs et définissez des règles de convivialité (musique, horaires).`,
    difficulty: 'intermediate',
    id: 'action-7',
    resources: [
      'Applications de covoiturage',
      'Checklist pour un covoiturage réussi'
    ],
    timeToRead: '6 min',
    title: 'Mettez en place un covoiturage quotidien'
  },
  {
    category: 'energy',
    description: 'Apprenez à utiliser les multiprises avec interrupteur pour éradiquer la consommation fantôme de vos appareils.',
    descriptionDetail: `Les appareils en veille représentent jusqu'à 10 % de la facture d'électricité.

En branchant vos équipements sur une multiprise à interrupteur, vous pouvez les éteindre tous en un geste lorsque vous ne les utilisez pas.`,
    difficulty: 'beginner',
    id: 'action-8',
    resources: [
      'Guide d\'achat des multiprises',
      'Calculateur d\'économies potentielles'
    ],
    timeToRead: '4 min',
    title: 'Éliminez la consommation fantôme'
  },
  {
    category: 'food',
    description: 'Découvrez comment planifier vos repas pour réduire le gaspillage alimentaire.',
    descriptionDetail: `La planification de repas consiste à prévoir vos menus pour la semaine, ce qui permet d'acheter uniquement les ingrédients nécessaires et d'utiliser les restes intelligemment.

En pratiquant le meal-prep, vous pouvez économiser de l'argent et réduire efficacement votre impact environnemental.`,
    difficulty: 'beginner',
    id: 'action-9',
    resources: [
      'Exemples de menus hebdomadaires',
      'Conseils pour conserver les aliments',
      'Applications de planification de repas'
    ],
    timeToRead: '5 min',
    title: 'Planifiez vos repas pour limiter le gaspillage'
  },
  {
    category: 'consumption',
    description: 'Apprenez les bases de la réparation pour prolonger la durée de vie de vos objets du quotidien.',
    descriptionDetail: `Réparer au lieu de remplacer est un moyen puissant de réduire la consommation de ressources.

Rejoignez un repair-café ou regardez des tutoriels en ligne pour apprendre à réparer vos appareils électroménagers, vos vêtements ou vos meubles.`,
    difficulty: 'intermediate',
    id: 'action-10',
    resources: [
      'Carte des repair-cafés',
      'Chaînes YouTube de réparation',
      'Liste d\'outils essentiels'
    ],
    timeToRead: '8 min',
    title: 'Initiez-vous à la réparation d\'objets'
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

export function getActionById(id: string): Action | undefined {
  return actions.find(action => action.id === id);
}
export function getAllActions(): Action[] {
  return actions;
}
