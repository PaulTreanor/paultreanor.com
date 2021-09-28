<template>
  <header>
	  <nav>
		  <nuxt-link to="/">Home</nuxt-link>
		  <nuxt-link to="/blog">Blog</nuxt-link>

			<ThemeToggle v-on:darkMode='switchMode'/>

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
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 150%;

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