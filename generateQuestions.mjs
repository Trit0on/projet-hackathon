import fs from 'fs/promises';
import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
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
            model: 'gpt-4o-mini',
            messages: [{ role: 'user', content: prompt.trim() }],
        });

        const content = response.choices[0].message.content;
        const parsed = JSON.parse(content);

        const output = {
            date: today,
            questions: parsed
        };

        await fs.writeFile('./src/lib/data/questions.json', JSON.stringify(output, null, 2));
        console.log('✅ Questions générées et enregistrées dans questions.json');
    } catch (error) {
        console.error('❌ Erreur :', error.response?.data || error.message);
    }
}

generateQuestions();
