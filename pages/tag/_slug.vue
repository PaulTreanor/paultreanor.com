<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      .where({
        tags: { $contains: params.slug }
      })
      .fetch()
    return {
      articles
    }
  }
}
</script>