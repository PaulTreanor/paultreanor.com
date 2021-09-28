<template>
  <div>
    <Header v-on:darkMode='swap'/>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: `/skeleton-${this.cur}.css`
        }
      ]
    };
  },
  data() {
    return {
      cur: "light"
    };
  },
  methods: {
    swap(value) {
      if (value) {
        this.cur = "dark";
      } else {
        this.cur = "light";
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


