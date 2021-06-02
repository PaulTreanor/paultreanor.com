<template>
  <header>
	  <nav>
		  <nuxt-link to="/">Home</nuxt-link>
		  <nuxt-link to="/blog">Blog</nuxt-link>
	  </nav>
  </header>
</template>

<style>
header {
	padding: 15px 30px;
	background-color: #FFF;
	display: flex;
	justify-content: center;
	align-items: center;

}

nav {
	display: flex;
	align-items: center;
	margin: 0 -15px;
}
nav a {
	display: block;
	margin: 0 15px;
}
</style>