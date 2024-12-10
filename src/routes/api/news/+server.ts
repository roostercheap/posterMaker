import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  try {
    const response = await fetch(`https://newsapi.ai/api/v1/news?apikey=${process.env.NEWS_API_KEY}&language=en`, {
      method: 'GET'
    });

    if (!response.ok) throw new Error('Failed to fetch news data');
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error('Error fetching news data:', error);
    return new Response(JSON.stringify({ error: 'Error fetching news data' }), { status: 500 });
  }
};