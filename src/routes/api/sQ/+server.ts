import { connectToDatabase } from '../../../data/mongo';


//get quotes from mongo
export const GET = async () => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('quotes');
    const quotes = await collection.find().toArray();
    return new Response(JSON.stringify(quotes), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return new Response('Failed to fetch quotes', { status: 500 });
  }
};

//post the quotes
export const POST = async ({ request }: { request: Request }) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('quotes');
    const { quote, author, imageUrl } = await request.json();

    // Insert the new quote
    const result = await collection.insertOne({ quote, author, imageUrl });
    return new Response(`Quote saved with ID: ${result.insertedId}`, { status: 201 });
  } catch (error) {
    console.error('Error saving quote:', error);
    return new Response('Failed to save quote', { status: 500 });
  }
};

//delete
export const DELETE = async () => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('quotes');
    await collection.deleteMany({}); //remove all
    return new Response('All quotes deleted', { status: 200 });
  } catch (error) {
    console.error('Error deleting quotes:', error);
    return new Response('Failed to delete quotes', { status: 500 });
  }
};
