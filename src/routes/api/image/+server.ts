import { json } from '@sveltejs/kit';

const UNSPLASH_ACCESS_KEY = '0TZzK_1f9dv7SwJsehfcqkKVgqJRUh1OyNwNAZRkVW8';

export async function GET() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=dramatic+athletics&color=black_and_white&client_id=${UNSPLASH_ACCESS_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }

    const data = await response.json();
    return json({
      imageUrl: data.urls.regular,
      alt: data.alt_description || 'Random Unsplash image',
    });
  } catch (error) {
    console.error('Error fetching image:', error);
    return json({ error: 'Failed to fetch image' }, { status: 500 });
  }
}
