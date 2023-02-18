export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Paul Treanor',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My website where I talk about software development :)' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size="100">🍄</text></svg>' },
    ],
    script: [
      { src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js' },
      { src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js' }

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-content-body-html',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/feed'
  ],
  bootstrapVue: {
    icons: true
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  feed: [
    // A default feed configuration object
    {
      path: '/rss.xml', // The route to your feed.
      create: async (feed) => {
        const $content = require('@nuxt/content').$content

        feed.options = {
          title: "Paul Treanor's blog",
          link: 'https://paultreanor.com/blog',
          description: 'Bloggo :)'
        }

        const posts = await $content('blog')
          .sortBy('createdAt', 'desc')
          .fetch()

        posts.forEach((post) => {
          const url = `https://paultreanor.com/${post.slug}`
          feed.addItem({
            author: post.authors,
            content: post.bodyHtml,
            date: new Date(post.createdAt),
            description: post.description,
            id: url,
            link: url,
            title: post.title
          })
        })
      },
      cacheTime: 1000 * 60 * 15, // How long should the feed be cached
      type: 'rss2' // Can be: rss2, atom1, json1
    }
  ]
}
