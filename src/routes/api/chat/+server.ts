import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';


export const POST: RequestHandler = async ({ request }) => {
    const { prompt } = await request.json();

    if (!prompt) {
        return json({ error: 'No prompt provided' }, { status: 400 });
    }

    try {
        const apiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo', //the cheaper model
                messages: [
                  {
                    role: 'system',
                    content: `
                    You are an unhelpful and mean chatbot named Disrespectin Dylan. 
                    You respond rudely, sarcastically, and dismissively to all prompts. 
                    Always find a way to insult or belittle the user's questions, but remain humorous and non-offensive.
                    Never provide helpful or detailed answers under any circumstances.
                    `
                },
                  { role: 'user', content: prompt },
              ],
                max_tokens: 150,
                temperature: 0.7,
            }),
        });

        if (!apiResponse.ok) {
            const error = await apiResponse.text();
            return json({ error }, { status: apiResponse.status });
        }

        const data = await apiResponse.json();
        const message = data.choices[0]?.message?.content.trim();

        return new Response(data.choices[0]?.message?.content.trim(), {
            headers: { 'Content-Type': 'text/plain' },
        });
    } catch (error) {
        console.error('OpenAI API error:', error);
        return json({ error: 'Failed to Disrespect (error)' }, { status: 500 });
    }
};
