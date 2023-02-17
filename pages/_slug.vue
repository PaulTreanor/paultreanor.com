<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>
<script>

export default {
  async asyncData ({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    return { article }
  }
}
</script>

<style>

article {
  display: block;
  margin: 0 auto;
  padding: 50px 30px;
  max-width: 800px;
}
h1 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
  font-family: 'inter', sans-serif;
}

iframe {
  width: 100%;
  height: 400px;
}

img {
  max-width: 100%;
}

/* Code
–––––––––––––––––––––––––––––––––––––––––––––––––– */
code {
  padding: .2rem .5rem;
  margin: 0 .2rem;
  font-size: 90%;
  white-space: nowrap;
  background: #F1F1F1;
  border: 1px solid #E1E1E1;
  border-radius: 4px; }
pre > code {
  display: block;
  padding: 1rem 1.5rem;
  white-space: pre; }

@media screen and (max-width: 750px) {
    iframe {
        max-width: 100% !important;
        width: auto !important;
        height: auto !important;
    }
}

</style>
