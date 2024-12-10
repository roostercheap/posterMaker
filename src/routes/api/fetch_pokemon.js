import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon';
const OUTPUT_PATH = path.resolve('src', 'data', 'reduced_pokemon.json');

async function fetchPokemonData() {
  //this is where I can choose how many pokebouis
  const pokemonPromises = Array.from({ length: 36 }, (_, i) => 
    fetch(`${POKEMON_API_URL}/${i + 1}`)
      .then(response => response.json())
  );
  try {
    //wait for fetch
    const fullPokemonData = await Promise.all(pokemonPromises);
    const reducedData = fullPokemonData.map(pokemon => ({
      name: pokemon.name,
      id: pokemon.id,
      base_experience: pokemon.base_experience,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types.map(typeInfo => typeInfo.type.name),
      moves: pokemon.moves.slice(0, 5).map(moveInfo => ({
        name: moveInfo.move.name,
        accuracy: moveInfo.accuracy !== null ? moveInfo.accuracy : 'N/A',
        power: moveInfo.power !== null ? moveInfo.power : 'N/A'
      })),
      image: pokemon.sprites.front_default
    }));

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(reducedData, null, 2));
    console.log('Pokémon data saved to', OUTPUT_PATH);
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
  }
}
fetchPokemonData();
