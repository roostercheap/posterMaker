import { json } from '@sveltejs/kit';

const API_KEY = 'iDd3+noeuWzqCPrJfNP3bg==2MMUvNj9Zzi45zHs';

export async function GET() {
  const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
    headers: {
      'X-Api-Key': API_KEY,
    },
  });

  const data = await response.json();

  return json(data[0]); // return the first quote
}
