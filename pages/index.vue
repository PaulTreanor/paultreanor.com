<template>
  <div>

  <!-- Hero -->
  <main class="container">
    <div>
      <div class="blurb">
        <img src="../static/me.png" alt="">
        <h2 class="text-green-100">Hi, I'm Paul</h2>
        <p>I'm a fullstack developer making serverless things at <a href="https://www.fourtheorem.com/">fourTheorem</a>. This website is where I keep my notes and thoughts.</p>
        <p>Feel free to get in touch! 😄</p>
        <div class="row">
          <a href="https://github.com/PaulTreanor"><ion-icon name="logo-github" /></a>
          <a href="https://paultreanor.com/rss.xml"><ion-icon name="logo-rss" /></a>
          <a class="emailCopy" @click="copyEmailToClipboard">
            <ion-icon name="mail" />
            <span class="tooltip">copy email to clipboard</span>
          </a>
        </div>
      </div>
    </div>
  </main>

  <!-- Blog Item List -->
    <div class="home-page">
      <h2>Latest Posts</h2>

      

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

/* 

img {
  max-width: 100px;
  display:block;
  margin:auto;
  margin-top: 20px;

} */



</style>
