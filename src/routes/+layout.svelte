<script>
	import { page } from '$app/stores';
  </script>
  
  <style>
	.menu-bar {
		display: flex;
		justify-content: space-between; 
		align-items: center;
		background-color: rgb(82, 82, 82);
		color: rgb(147, 147, 147);
		font-family: Arial, sans-serif;
		font-weight: bold;
		padding: 10px 20px;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1000;
	}
  
	.menu-bar a {
		text-decoration: none;
		color: white;
		padding: 10px 20px;
	}
  
	.menu-bar a:hover {
		text-decoration: underline;
	}
  
	.star-icon {
  		margin-left: auto;
  		cursor: pointer;
  		display: flex;
  		align-items: center;
  		margin-right: 14px;
	}
  
	.star-icon img {
		height: 26px;
		width: 26px;
		filter: brightness(0) invert(1);
	}
  
	.content {
	  	padding-top: 60px;
	}
  </style>
  
  <div class="menu-bar">
		<a href="/">Generate</a>
		<a href="/saved">Saved</a>
		<a href="/pokemon">Pokemon</a>
		<a href="/AI">AI</a>
		<a href="/author">About Me</a>
		<a class="star-icon" href="/favorites">
			<img src="/data/star.png" alt="Favorites" />
		</a>
  </div>
  
  <div class="content">
		<slot />
  </div>
  