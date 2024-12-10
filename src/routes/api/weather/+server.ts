import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
  const city = url.searchParams.get('city');

  if (!city) {
    return new Response(JSON.stringify({ error: 'Needs a city Please' }), { status: 400 });
  }
  //bug catcher
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`);
    if (!response.ok) throw new Error('Failed to get data');
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response(JSON.stringify({ error: 'Error fetching data' }), { status: 500 });
  }
};