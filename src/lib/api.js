export async function getQuote() {
    const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=inspire', {
      method: 'GET',
      headers: {
        'X-Api-Key': 'iDd3+noeuWzqCPrJfNP3bg==2MMUvNj9Zzi45zHs',
      },
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
  
    const data = await res.json();
    return data[0]; 
  }
  