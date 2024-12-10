<script>
    let audio;
  
    //music only plays when loaded
    import { onMount, onDestroy } from 'svelte';
  
    onMount(() => {
      audio = new Audio('/data/what.mp3');
      audio.loop = false; //no loop on the music
      audio.play();
    });
  
    onDestroy(() => {
      if (audio) audio.pause();
    });
  </script>
  
  <style>
    .favorites-page {
      height: 100vh;
      width: 100vw;
      background: url('/src/data/favorite.png') no-repeat center center;
      background-size: cover;
    }
  </style>
  
  <div class="favorites-page"></div>
  