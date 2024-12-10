<script lang="ts">
    import reducedPokemon from '$data/reduced_pokemon.json';
  
    type Pokemon = {
      name: string;
      id: number;
      base_experience: number;
      height: number;
      weight: number;
      types: string[];
      moves: Array<{ name: string; accuracy: number | null; power: number | null }>;
      image: string;
    };
  
    const pokemonList: Pokemon[] = reducedPokemon;
  </script>
  
  <style>
    .pokemon-list {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 20px;
      padding: 20px;
      justify-items: center;
    }
  
    .pokemon-card {
      border: 1px solid #ddd;
      border-radius: 10px;
      padding: 16px;
      max-width: 250px;
      background-color: #f2f2f2;
      text-align: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease-in-out;
    }
  
    .pokemon-card:hover {
      transform: translateY(-10px);
    }
  
    .pokemon-image {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }
  
    .types {
      display: flex;
      justify-content: center;
      gap: 6px;
      margin-top: 8px;
    }
  
    .type {
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.9em;
      color: white;
      text-transform: capitalize;
    }
  
    .type-grass { background-color: #459d19; }
    .type-fire { background-color: #d93510; }
    .type-water { background-color: #6890F0; }
    .type-electric { background-color: #F8D030; }
    .type-bug { background-color: #A8B821; }
    .type-psychic { background-color: #F85888; }
    .type-fighting { background-color: #C03028; }
    .type-normal { background-color: #A8A878; }
    .type-flying { background-color: #A500D6; }
    .type-poison { background-color: #016412; }
    
    h2 {
      font-size: 1.2rem;
      color: #333;
      margin: 10px 0;
    }
  
    p {
      color: #555;
      font-size: 0.9rem;
    }
  
    h3 {
      font-size: 1rem;
      color: #333;
      margin-top: 10px;
    }
  
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
  
    li {
      font-size: 0.9rem;
      color: #444;
    }
  
    li:not(:last-child) {
      margin-bottom: 5px;
    }
  </style>
  
  <div class="pokemon-list">
    {#each pokemonList as pokemon}
      <div class="pokemon-card">
        <img class="pokemon-image" src={pokemon.image} alt={pokemon.name} />
        <h2>{pokemon.name} (#{pokemon.id})</h2>
        <p>Base Experience: {pokemon.base_experience}</p>
        <p>Height: {pokemon.height} dm</p>
        <p>Weight: {pokemon.weight} hg</p>
        
        <div class="types">
          {#each pokemon.types as type}
            <span class="type type-{type.toLowerCase()}">{type}</span>
          {/each}
        </div>
        
        <h3>Moves:</h3>
        <ul>
          {#each pokemon.moves as move}
            <li>{move.name}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
  