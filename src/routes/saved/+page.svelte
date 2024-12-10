<script lang="ts">
  import { onMount } from 'svelte';

  let savedQuotes: Array<{ quote: string; author: string; imageUrl: string }> = [];

  const fetchSavedQuotes = async () => {
    const response = await fetch('/api/sQ');
    const data = await response.json();
    savedQuotes = data;
  };

  const clearSavedQuotes = async () => {
    const response = await fetch('/api/sQ', { method: 'DELETE' });
    if (response.ok) {
      savedQuotes = [];
      alert('All quotes cleared successfully!');
    } else {
      alert('Error clearing quotes!');
    }
  };

  onMount(() => {
    fetchSavedQuotes();
  });
</script>

<style>
  .saved-quotes-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      padding: 20px;
      justify-items: center;
  }

  .no-quotes-message {
      text-align: center;
      font-size: 1.5rem;
      color: #666;
      margin: 20px auto;
      grid-column: span 4;
  }

  .quote-card {
      background-color: white;
      border: 1px solid #ddd;
      padding: 10px;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .quote-text {
      font-size: 1rem;
      font-style: italic;
      margin-bottom: 10px;
      line-height: 1.4;
  }

  .author-text {
      font-size: 1.1rem;
      font-weight: bold;
      margin-top: 5px;
  }

  .quote-image {
      max-width: 100%;
      height: auto;
      margin-top: 10px;
  }

  .clear-button-container {
      text-align: center;
      margin-top: 20px;
      padding: 20px 0;
  }

  .clear-button {
      padding: 10px 20px;
      background-color: #ff6347;
      color: white;
      border: none;
      border-radius: 12px;
      cursor: pointer;
  }

  .clear-button:hover {
      background-color: #ff4500;
  }
</style>

<div class="saved-quotes-container">
  {#if savedQuotes.length === 0}
    <p class="no-quotes-message">No saved quotes yet!</p>
  {:else}
    {#each savedQuotes as { quote, author, imageUrl }}
      <div class="quote-card">
        <p class="quote-text">"{quote}"</p>
        <p class="author-text">- {author}</p>
        <img class="quote-image" src={imageUrl} alt={author} />
      </div>
    {/each}
  {/if}
</div>

<div class="clear-button-container">
  <button class="clear-button" on:click={clearSavedQuotes}>Clear All Quotes</button>
</div>
