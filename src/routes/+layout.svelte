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
	}
  
	.star-icon img {
	  height: 24px;
	  width: 24px;
	}
  
	.content {
	  padding-top: 60px;
	}
  </style>
  
  <div class="menu-bar">
	<a href="/">Generate</a>
	<a href="/saved">Saved</a>
	<a class="star-icon" href="/favorites">
	  <img src="/src/data/star.png" alt="Favorites" />
	</a>
  </div>
  
  <div class="content">
	<slot />
  </div>
  