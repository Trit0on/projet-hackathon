import type { Mission } from '../types';

export const missions: Mission[] = [
	{
		action: 'Ce soir, débranchez tous les appareils électroniques non utilisés avant de vous coucher. Comptez combien de prises vous avez débranchées !',
		category: 'energy',
		description: 'Débranchez tous les appareils électroniques non utilisés',
		difficulty: 'easy',
		estimatedTime: '10 minutes',
		id: 'mission-1',
		impact: 'Économie de 5-10% sur votre facture électrique',
		title: 'Mission "Zéro Veille"'
	},
	{
		action: 'Chronométrez votre douche ce matin et essayez de la réduire de 2 minutes par rapport à votre temps habituel !',
		category: 'water',
		description: 'Réduisez le temps de votre douche de 2 minutes',
		difficulty: 'medium',
		estimatedTime: '5 minutes',
		id: 'mission-2',
		impact: 'Économie de 20 litres d\'eau par douche',
		title: 'Mission "Douche Éclair"'
	},
	{
		action: 'Ouvrez votre réfrigérateur et identifiez un aliment qui risque d\'être gaspillé. Trouvez une recette rapide pour l\'utiliser aujourd\'hui !',
		category: 'food',
		description: 'Identifiez et utilisez un aliment qui risque d\'être gaspillé',
		difficulty: 'medium',
		estimatedTime: '15 minutes',
		id: 'mission-3',
		impact: 'Réduction du gaspillage alimentaire domestique',
		title: 'Mission "Chasse au Gaspi Alimentaire"'
	},
	{
		action: 'Pour votre prochain court déplacement (moins de 2 km), choisissez la marche ou le vélo au lieu de la voiture.',
		category: 'transport',
		description: 'Choisissez la marche ou le vélo pour un court déplacement',
		difficulty: 'easy',
		estimatedTime: '30 minutes',
		id: 'mission-4',
		impact: 'Réduction de 2 kg de CO₂ par trajet',
		title: 'Mission "Transport Doux"'
	},
	{
		action: 'Pendant 1 heure ce soir, éteignez toutes les lumières non essentielles dans votre habitation.',
		category: 'energy',
		description: 'Éteignez les lumières non essentielles pendant 1 heure',
		difficulty: 'easy',
		estimatedTime: '2 minutes',
		id: 'mission-5',
		impact: 'Économie d\'énergie et sensibilisation',
		title: 'Mission "Lumière Éteinte"'
	},
	{
		action: 'Aujourd\'hui, utilisez uniquement une gourde ou une bouteille réutilisable pour boire. Pas de bouteille plastique à usage unique !',
		category: 'waste',
		description: 'Utilisez uniquement une gourde réutilisable aujourd\'hui',
		difficulty: 'easy',
		estimatedTime: '5 minutes',
		id: 'mission-6',
		impact: 'Éviter 1 à 3 bouteilles plastiques jetables',
		title: 'Mission "Bouteille Réutilisable"'
	},
	{
		action: 'Avant de jeter vos déchets, prenez 2 minutes pour vérifier que tout est correctement trié selon les règles de votre commune.',
		category: 'waste',
		description: 'Vérifiez le tri de vos déchets pendant 2 minutes',
		difficulty: 'easy',
		estimatedTime: '5 minutes',
		id: 'mission-7',
		impact: 'Amélioration du recyclage local',
		title: 'Mission "Tri Parfait"'
	},
	{
		action: 'Aujourd\'hui, baissez la température de votre chauffage de 1 °C par rapport à votre habitude. Notez si vous ressentez une différence !',
		category: 'energy',
		description: 'Baissez votre chauffage de 1 °C pendant une journée',
		difficulty: 'easy',
		estimatedTime: '1 minute',
		id: 'mission-8',
		impact: 'Économie de 7 % sur votre consommation de chauffage',
		title: 'Mission "Température Idéale"'
	},
	{
		action: 'Cuisinez un repas en utilisant uniquement ce qui reste dans votre réfrigérateur et vos placards. Soyez créatif !',
		category: 'food',
		description: 'Préparez un repas en utilisant tous les restes',
		difficulty: 'medium',
		estimatedTime: '30 minutes',
		id: 'mission-9',
		impact: 'Réduction du gaspillage et des achats superflus',
		title: 'Mission "Cuisine Zéro Déchet"'
	},
	{
		action: 'Aujourd\'hui, prenez systématiquement les escaliers au lieu de l\'ascenseur, que ce soit chez vous, au travail ou ailleurs.',
		category: 'transport',
		description: 'Prenez les escaliers au lieu de l\'ascenseur toute la journée',
		difficulty: 'medium',
		estimatedTime: '5 minutes par trajet',
		id: 'mission-10',
		impact: 'Économie d\'énergie et exercice physique',
		title: 'Mission "Escaliers Power"'
	},
	{
		action: 'Pendant le brossage de vos dents, fermez systématiquement le robinet. Calculez le temps d\'économie d\'eau !',
		category: 'water',
		description: 'Fermez le robinet pendant le brossage de dents',
		difficulty: 'easy',
		estimatedTime: '3 minutes',
		id: 'mission-11',
		impact: 'Économie de 12 litres d\'eau par brossage',
		title: 'Mission "Robinet Fermé"'
	},
	{
		action: 'Lors de vos prochaines courses, comparez systématiquement les emballages et choisissez les produits les moins emballés.',
		category: 'waste',
		description: 'Choisissez des produits avec moins d\'emballage lors de vos courses',
		difficulty: 'medium',
		estimatedTime: '20 minutes',
		id: 'mission-12',
		impact: 'Réduction des déchets d\'emballage',
		title: 'Mission "Emballage Minimal"'
	},
	{
		action: 'Préparez votre déjeuner à la maison au lieu d\'acheter un plat préparé ou de commander. Utilisez des contenants réutilisables !',
		category: 'food',
		description: 'Préparez votre repas du midi à la maison',
		difficulty: 'medium',
		estimatedTime: '15 minutes',
		id: 'mission-13',
		impact: 'Réduction de l\'empreinte carbone et des emballages',
		title: 'Mission "Lunch Box Maison"'
	},
	{
		action: 'Pour votre prochain déplacement en voiture, proposez à un ami, collègue ou voisin de vous accompagner ou de covoiturer.',
		category: 'transport',
		description: 'Organisez un covoiturage pour un déplacement',
		difficulty: 'medium',
		estimatedTime: '10 minutes',
		id: 'mission-14',
		impact: 'Division par 2 de l\'empreinte carbone du trajet',
		title: 'Mission "Covoiturage Express"'
	},
	{
		action: 'Ce soir, éteignez votre box internet pendant 2 heures et profitez-en pour faire une activité sans écran.',
		category: 'energy',
		description: 'Éteignez votre box internet pendant 2 heures',
		difficulty: 'medium',
		estimatedTime: '1 minute',
		id: 'mission-15',
		impact: 'Économie d\'énergie et pause numérique',
		title: 'Mission "Débranché Numérique"'
	},
	{
		action: 'Trouvez un emballage ou objet que vous alliez jeter et transformez-le en quelque chose d\'utile : pot pour plante, rangement, etc.',
		category: 'waste',
		description: 'Transformez un déchet en objet utile',
		difficulty: 'medium',
		estimatedTime: '20 minutes',
		id: 'mission-16',
		impact: 'Réduction des déchets et créativité',
		title: 'Mission "Récup\' Créative"'
	},
	{
		action: 'Vérifiez quels fruits sont de saison actuellement et ne consommez que ceux-ci aujourd\'hui. Découvrez de nouveaux goûts !',
		category: 'food',
		description: 'Consommez uniquement des fruits de saison aujourd\'hui',
		difficulty: 'easy',
		estimatedTime: '5 minutes',
		id: 'mission-17',
		impact: 'Réduction de l\'empreinte carbone alimentaire',
		title: 'Mission "Fruits de Saison"'
	},
	{
		action: 'Attendez que votre lave-vaisselle soit complètement plein avant de le lancer, même si cela signifie attendre demain.',
		category: 'water',
		description: 'Ne lancez le lave-vaisselle que quand il est plein',
		difficulty: 'easy',
		estimatedTime: '2 minutes',
		id: 'mission-18',
		impact: 'Économie d\'eau et d\'énergie',
		title: 'Mission "Lave-Vaisselle Plein"'
	},
	{
		action: 'Si vous devez acheter quelque chose aujourd\'hui, cherchez d\'abord dans les brocantes, sites de seconde main ou magasins d\'occasion.',
		category: 'waste',
		description: 'Achetez un objet d\'occasion au lieu de neuf',
		difficulty: 'medium',
		estimatedTime: '30 minutes',
		id: 'mission-19',
		impact: 'Réduction de la production et des déchets',
		title: 'Mission "Seconde Main"'
	},
	{
		action: 'Programmez votre chauffage pour qu\'il baisse automatiquement quand vous n\'êtes pas chez vous. Réglez-le pour aujourd\'hui !',
		category: 'energy',
		description: 'Programmez votre chauffage selon vos horaires',
		difficulty: 'medium',
		estimatedTime: '10 minutes',
		id: 'mission-20',
		impact: 'Économie d\'énergie automatique',
		title: 'Mission "Chauffage Intelligent"'
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
