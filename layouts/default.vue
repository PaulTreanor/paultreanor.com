<template>
  <div>
    <Header v-show="ifNotHome" @darkMode="swap" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  data () {
    return {
      cur: 'light'
    }
  },
  head () {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: '/skeleton-light.css'
        },
        {
          rel: 'stylesheet',
          href: `/skeleton-${this.cur}.css`
        }
      ]
    }
  },
  computed : {
    ifNotHome () {
      return this.$route.path !== '/'
    }
  },
  methods: {
    swap (value) {
      if (value) {
        this.cur = 'dark'
      } else {
        this.cur = 'light'
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: inter;
}

</style>
