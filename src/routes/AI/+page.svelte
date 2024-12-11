<script lang="ts">
    let messages: string[] = [];
    let prompt = '';
    let loading = false;
  
    const sendMessage = async () => {
    if (!prompt.trim()) return;

    loading = true;
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            body: JSON.stringify({ prompt }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const reader = response.body?.getReader();
        const decoder = new TextDecoder('utf-8');
        let result = '';

        if (reader) {
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                result += decoder.decode(value, { stream: true });
            }
            messages = [{ role: 'assistant', content: result.trim() }, ...messages];
        }

        prompt = '';
    } catch (error) {
        console.error('Fetch error:', error);
        messages = [{ role: 'system', content: 'Error: Unable to fetch response.' }, ...messages];
    } finally {
        loading = false;
    }
};

  
    const clearChat = () => {
      messages = [];
    };
  </script>
  
  <style>
  
    .chat-box {
      background-color: #fff8e5;
      border: 1px solid black;
      border-radius: 10px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
      padding: 20px;
      width: 90%;
      max-width: 600px;
      color: #4a4a4a;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  
    .output {
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        max-height: 300px;
        overflow-y: auto;
        display: flex;
        flex-direction: column-reverse; 
    }
  
    .output-message {
      margin: 5px 0;
    }

    .output-message.system {
      font-style: italic;
      color: gray;
    }

    .output-message.assistant {
      color: rgb(102, 102, 102);
      font-weight: bold;
    }

    .output-message.user {
      color: blue;
    }
  
    form {
      display: flex;
      gap: 10px;
      width: 100%;
    }
  
    input[type='text'] {
      flex: 1;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    }
  
    button {
      padding: 10px;
      background-color: #f4ecd8;
      color: #4a4a4a;
      border: 1px solid black;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
    }

    .bold {
      font-weight: bold;
      color: #771e1e;
    }
  
    button:hover {
      background-color: #c9c2b3;
    }
  
    .chat-box p {
      font-size: 11px;
      color: #6c6c6c;
      font-style: italic;
      margin-top: -10px;
    }
  
    .clear-button {
      align-self: center;
      margin-top: 10px;
    }
  </style>
  
  
  <div class="container">
      <div class="chat-box">
        <h1>Chat with Disrepectin Dylan</h1>
        <p>(give him a second after entering a response)</p>
        <div class="output">
          {#if loading}
              <div class="output-message">The Dylan is thinking...</div>
          {/if}
          {#each messages as message (message.content)}
          <div class="output-message {message.role}">
            <span class="bold">Dylan:</span> "{message.content}"
          </div>
          {/each}
      </div>
        <form on:submit|preventDefault={async () => await sendMessage()}>
          <input type="text" bind:value={prompt} placeholder="Enter your prompt" />
          <button type="submit">Send</button>
        </form>
        <button class="clear-button" on:click={clearChat}>Clear Chat</button>
      </div>
  </div>
  