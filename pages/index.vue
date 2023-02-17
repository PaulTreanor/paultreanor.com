<template>
  <div>
  <main class="container">
    <div>
      <div class="blurb">
        <img src="../static/me.png" alt="">
        <h2>Hi, I'm Paul</h2>
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


    <div class="home-page">
      <h2>Latest Posts</h2>
      <div class="articles">
        <div v-for="article of articles" :key="article.slug" class="article">
          <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
            <div class="article-inner">
              <div class="detail">
                <pre>{{ formatDate(article.createdAt) }}</pre>
                <h4>{{ article.title }}</h4>
                <p class="lead">
                  {{ article.short }}
                </p>
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
  head () {
    return {

    }
  },
  
  async asyncData ({ $content, params }) {
    const articles = await $content('blog')
      .only(['title', 'short', 'img', 'slug', 'author', 'createdAt'])
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

h2 {
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

p {
  margin-bottom: 5px;

}

.project {
  margin-bottom: 2.5rem;
}

.container {
    padding-top: 2rem;
  }

.emailCopy {
  cursor: pointer;
}

ion-icon {
  font-size: 2.4rem;
  margin-right: 15px;
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

/* Larger than desktop */
@media (min-width: 1000px) {
  .image {
    margin-right: 1.5rem;
  }

  /* narrower blurb on widescreen */
  .blurb {
    max-width: 700px;
    margin: 0 auto;
  }

}

img {
  max-width: 100px;
  display:block;
  margin:auto;
  margin-top: 20px;

}


/* ----- blog page CSS -------- */
.home-page {
  padding: 50px 30px;
}
h2 {
  margin-bottom: 30px;
  text-align: center;
}
.articles {
  margin: 0 auto;
  max-width: 800px;
}
.article {
  margin-bottom: 15px;
}

.article-inner .detail {
  padding-left: 15px;
  padding-right: 15px;

}
</style>
