module.exports = {
  /**
   * Headers of the page
   */
  head: {
    title: 'waitforme',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /**
   * Vue Plugin
   */
  plugins: ['~plugins/vuetify'],
  /**
   * Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /**
   * Build configuration
   */
  build: {
    /**
     * Run ESLint on save
     */
    vendor: ['vuetify'],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
}
