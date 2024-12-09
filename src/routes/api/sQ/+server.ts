import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.resolve('src/data/sQ.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Check if the file is empty
    if (!fileContent.trim()) {
      return new Response('No data found in the JSON file', { status: 404 });
    }

    const savedQuotes = JSON.parse(fileContent);

    return new Response(JSON.stringify(savedQuotes), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return new Response('Error reading the JSON file', { status: 500 });
  }
}

export async function POST({ request }) {
  try {
    const { quote, author, imageUrl } = await request.json();
    const filePath = path.resolve('src/data/sQ.json');
    const fileContent = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : '[]';
    const savedQuotes = fileContent ? JSON.parse(fileContent) : [];

    // Add new quote to the list
    savedQuotes.push({ quote, author, imageUrl });

    // Write updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(savedQuotes, null, 2));

    return new Response('Quote saved successfully', { status: 200 });
  } catch (error) {
    console.error('Error saving quote:', error);
    return new Response('Error saving quote', { status: 500 });
  }
}

export async function DELETE() {
  try {
    const filePath = path.resolve('src/data/sQ.json');
    fs.writeFileSync(filePath, '[]'); // Clear the file by writing an empty array
    return new Response('All quotes cleared successfully', { status: 200 });
  } catch (error) {
    console.error('Error clearing quotes:', error);
    return new Response('Error clearing quotes', { status: 500 });
  }
}
