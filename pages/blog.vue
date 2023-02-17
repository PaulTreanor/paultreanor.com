<template>
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
</template>

<script>
export default {

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
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style scoped>
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
