<template>
  <header>
	  <nav>
			<div class="nav-buttons">
				<nuxt-link to="/">Home</nuxt-link>
				<nuxt-link to="/projects">Projects</nuxt-link>
				<nuxt-link to="/blog">Blog</nuxt-link>
			</div>
		  
			

			<div class="selector">
				<ThemeToggle class="toggle" v-on:darkMode='switchMode'/>
			</div>
			

	  </nav>
  </header>
</template>

<script>
import ThemeToggle from './ThemeToggle.vue'

export default {
	components: {
		ThemeToggle
	},
	methods: {
		switchMode (value) {
			this.$emit('darkMode', value)
		}
	}
}
</script>

<style>
header {
	padding: 15px 30px;
}

@media screen and (max-width: 380px) {
	.selector {
		display: none;
	}
}



nav {
	display: flex;
	align-items: center;
}



nav a {
	display: block;
	margin: 0 15px;
}

.nav-buttons {
	display: flex;
	font-size: 2rem;
	margin: 0 auto;
}



</style>