const fs = require('fs');
const { OpenAI } = require('openai'); // ✅ nouveau import

const openai = new OpenAI({
    apiKey: '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', // Remplace par ta vraie clé
});

const today = new Date().toISOString().split('T')[0];

const prompt = `Génère une liste de 5 questions de quiz sur l'écologie. Chaque question doit inclure :
- une question claire
- 4 options
- l’index de la bonne réponse (0-3)
- une explication courte
- une catégorie (comme 'energy', 'food', 'waste', etc.)
Format JSON (dans un tableau).
`;

async function generateQuestions() {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',

            messages: [{ role: 'user', content: prompt }],
        });

        const content = response.choices[0].message.content;
        const parsed = JSON.parse(content);

        const output = {
            date: today,
            questions: parsed
        };

        fs.writeFileSync('./src/lib/data/questions.json', JSON.stringify(output, null, 2));
        console.log('✅ Questions générées et enregistrées dans questions.json');
    } catch (error) {
        console.error('❌ Erreur :', error.response?.data || error.message);
    }
}

generateQuestions();
