<template>
  <div class="mx-40 font-open-sans">

  <!-- Hero -->
  <main class="">
    <div class="container">
      <div class="my-10 blurb">
        <img class="pb-5" src="../static/me.png" alt="">
        <h2 class="text-3xl font-open-sans font-semi-bold py-3">Hi, I'm Paul</h2>
        <p class="font-open-sans">I'm a fullstack developer making serverless things at <a href="https://www.fourtheorem.com/">fourTheorem</a>. This website is where I keep my notes and thoughts.</p>
        <p class="font-open-sans">Feel free to get in touch! 😄</p>
        <div class="row pt-3 text-2xl">
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
      <h2 class="text-3xl font-open-sans font-semi-bold py-3">Latest Posts</h2>

      

      <div class="articles">
        <div class="search-box">
        <input type="text" placeholder="Search for tags or post titles" v-model="search" size="40"/>
      </div>
        <div v-for="article of filteredArticles" :key="article.slug" class="article">
          <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
            <div class="article-inner">
              <div class="detail">
                <pre>{{ formatDate(article.createdAt) }}</pre>
                <h5>{{ article.title }}</h5>
                <!-- <p class="lead">
                  {{ article.short }}
                </p> -->
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
        if (article.tags) {
          return article.tags.some(tag => {
            return tag.toLowerCase().includes(this.search.toLowerCase())
          })
        }
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



</style>
