<template>
  <header>
    <nav class="mx-40 my-5 container">
      <div class="">
        <nuxt-link to="/">
          <p class="nav-link text-4xl">
            🏠
          </p>
        </nuxt-link>
      </div>

      <!-- <div class="selector">
        <ThemeToggle @darkMode="switchMode" />
      </div> -->
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

.nav-link {
  font-family: 'Open Sans', sans-serif;
}
</style>
