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
/* import ../assets/css/style.css */
@import '../assets/css/style.css';

h1 {
  @apply text-slate-900 text-4xl font-open-sans font-bold;
}

h2 {
  @apply text-slate-900 text-2xl font-open-sans font-semibold py-2;
}

h3 {
  @apply text-slate-900 text-xl font-open-sans font-semibold py-2;
}

h4 {
  @apply text-slate-900 text-lg font-open-sans font-semibold py-2;
}

h5 {
  @apply text-slate-900 font-open-sans font-semibold py-2;
}

p {
  @apply text-slate-900 font-open-sans py-2;
}

li {
  @apply text-slate-900 font-open-sans py-2;
  @apply leading-4 ml-5
}

ul {
  @apply list-disc;
}

ol {
  @apply list-decimal;
}

article {
  display: block;
  margin: 0 auto;
  padding: 50px 30px;
  max-width: 800px;
  font-family: 'Open Sans', sans-serif;
  @apply leading-7;
}
h1 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
}

iframe {
  width: 100%;
  height: 400px;
}

img {
  max-width: 100%;
  @apply py-2;
}

/* Code
–––––––––––––––––––––––––––––––––––––––––––––––––– */
code {
  padding: .1rem .4rem;
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
