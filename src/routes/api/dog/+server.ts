import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  console.log('DOGAPI_KEY:', process.env.DOGAPI_KEY);
  try {
    const response = await fetch('https://api.thedogapi.com/v1/images/search', {
      headers: {
        'x-api-key': process.env.DOGAPI_KEY ?? ''
      }
    });
    if (!response.ok) throw new Error('Failed to fetch dog data');
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error('Error fetching dog data:', error);
    return new Response(JSON.stringify({ error: 'Error fetching dog data' }), { status: 500 });
  }
};