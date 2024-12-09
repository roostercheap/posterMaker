<script lang="ts">
  let quote = '';
  let author = '';
  let imageUrl = '';
  let imageAlt = '';

  const savedQuotes: Array<{ quote: string; author: string; imageUrl: string }> = [];

  //get random quote
  const fetchQuote = async () => {
    const response = await fetch('/api/quote');
    const data = await response.json();
    quote = data.quote;
    author = data.author;

    //pull random quote
    const imageResponse = await fetch('/api/image');
    const imageData = await imageResponse.json();
    imageUrl = imageData.imageUrl;
    imageAlt = imageData.alt;
  };

  //write present quote
  const saveQuote = async () => {
  if (quote && author && imageUrl) {
    const response = await fetch('/api/sQ', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quote, author, imageUrl })
    });

    if (response.ok) {
      alert('Quote saved successfully!');
    } else {
      alert('Failed to save the quote.');
    }
  } else {
    alert('No quote to save. Please generate one first.');
  }
};
</script>

<style>
  .quote-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background-color: #f0f0f0;
    background-image: url({imageUrl});
    background-size: cover;
    background-position: center;
    padding: 20px;
    color: white;
    text-shadow: 2px 2px 5px black;
    filter: grayscale(100%);
  }

  .quote-text {
    font-size: 2rem;
    font-style: italic;
    margin-bottom: 20px;
    line-height: 1.6; /*this is the line spacing*/
  }

  .author-text {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 10px;
    line-height: 1.4; /*also increase line spacing*/
  }

  .button-container {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    position: relative;
    top: -20px; /*push the buttons upward*/
  }

  .generate-btn,
  .save-btn {
    padding: 10px 20px;
    font-size: 1.2rem;
    cursor: pointer;
    border: none;
    border-radius: 12px;
    background-color: #333;
    color: white;
    transition: background-color 0.3s ease;
  }

  .generate-btn:hover,
  .save-btn:hover {
    background-color: #555;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
  }
</style>

<div class="quote-container" style="background-image: url('{imageUrl}')">
  {#if quote}
    <p class="quote-text">"{quote}"</p>
    <p class="author-text">- {author}</p>
  {:else}
    <p class="quote-text">Click the button to generate a quote!</p>
  {/if}

  <div class="button-container">
    <button class="generate-btn" on:click={fetchQuote}>Generate Quote</button>
    <button class="save-btn" on:click={saveQuote}>Save Quote</button>
  </div>
</div>