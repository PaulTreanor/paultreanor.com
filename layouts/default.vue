<template>
  <div>
    <Header v-show="ifNotHome" />
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
  computed : {
    ifNotHome () {
      return this.$route.path !== '/'
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
