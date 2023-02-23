<template>
  <div class="mx-4 md:mx-20 lg:mx-40 font-open-sans">

  <!-- Hero -->
  <main class="">
    <div class="container">
      <div class="blurb my-11">
        <img class="mt-5 mb-7" src="../static/me.png" alt="">
        <h2 class="text-4xl font-open-sans font-bold py-4 ">Hi, I'm Paul 🐮</h2>
        <p class="text-lg font-open-sans">I'm a fullstack developer making serverless things at <a href="https://www.fourtheorem.com/">fourTheorem</a>. This website is where I keep my notes and thoughts.</p>
        <p class="text-lg font-open-sans">Feel free to get in touch!</p>
        <div class="row pt-4 text-2xl">
          <a href="https://github.com/PaulTreanor"><ion-icon name="logo-github" /></a>
          <a href="https://paultreanor.com/rss.xml"><ion-icon name="logo-rss" /></a>
          <a class="emailCopy" @click="copyEmailToClipboard">
            <ion-icon name="mail" />
            <span class="tooltip font-open-sans text-sm italic">copy email to clipboard</span>
          </a>
        </div>
      </div>
    </div>
  </main>

  <!-- Blog Item List -->
    <div class="home-page">
      <h2 class="text-4xl font-open-sans font-bold py-4">📝 Latest Notes</h2>
      <div class="articles pb-40">
        <div class="search-box py-2">
          <input type="text" placeholder="Search for tags or post titles 🔎" v-model="search" class="bg-slate-50 border border-sky-300 text-slate-900 rounded-lg active:border-sky-400 hover:border-sky-400 focus:border-sky-400 block p-2.5 w-96 max-w-full"/>
        </div>
        <div v-for="article of filteredArticles" :key="article.slug" class="my-7 max-w-2xl">
          <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
            <div class="border-slate-300 border-b-2 border-solid pb-5 no-underline">
              <div class="w-fit font-open-sans">
                <h5 class="font-open-sans text-xl text-slate-900 hover:bg-sky-200 active:focus:bg-sky-400 pb-2 w-fit no-underline">{{ article.title }}</h5>
                <!-- <p class="text-slate-700 hover:text-sky-700 active:focus:text-sky-800">
                  {{ article.short }}
                </p> -->
                <p class="font-open-sans text-slate-600 hover:bg-sky-200 active:focus:bg-sky-400 w-fit no-underline">{{ formatDate(article.createdAt) }}</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      search: ''
    }
  },

  computed: {
    filteredArticles () {
      return this.articles.filter(article => {
        // if (article.tags) {
        //   return article.tags.some(tag => {
        //     return tag.toLowerCase().includes(this.search.toLowerCase())
        //   })
        // }
        return article.title.toLowerCase().includes(this.search.toLowerCase()) 
      })
    }
  },

  async asyncData ({ $content, params }) {
    const articles = await $content('blog')
      .only(['title', 'short', 'img', 'slug', 'author', 'createdAt', 'tags'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles
    }
  },

  methods: {
    copyEmailToClipboard () {
      navigator.clipboard.writeText('treanorpaul9' + '@' + 'gmail' + '.com')
    },

    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
  
}
</script>
<style scoped>

.blurb {
  font-family: 'Open Sans'
}

.emailCopy {
  cursor: pointer;
}


.emailCopy:hover .tooltip {
  display:block;
}

.tooltip {
  display: none;
    /* margin-top: 10px; moves it down */
    position: absolute;
    z-index: 1000;
}



img {
  max-width: 100px;
  display:block;
  margin-top: 20px;

}

/* a {
    @apply text-sky-500 hover:text-sky-700 active:focus:text-sky-800;
} */



</style>
