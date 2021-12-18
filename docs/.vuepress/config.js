const { description } = require('../../package')

module.exports = {

plugins: [
    '@vuepress/back-to-top',
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: true
    },
    ,
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    }]
  ],
  port: 3030,
  base: '/jace-ita/',

   head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
      ['link', {href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel :'stylesheet'}],

    ],

  title: '@jace-ita',
  description: 'Програмний модуль @jace-ita',

  /*head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],*/

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    /*repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,*/
    nav: [
          { text: 'Початок', link: '/' },
        ],

        lastUpdated: 'Останнє оновлення', // string | boolean
          // Assumes GitHub. Can also be a full GitLab url.
        repo: 'https://github.com/boldak/jace-ita',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'Github',


    sidebar: [

      {
            title: 'Вступ',
            path:"/intro/"
          },

          {
            title: 'Вимоги',
              path:"/requirements/",
          },

          {
            title: 'API сервісу',
            path:"/oas/",
            sidebarDepth: 0
          },

          {
            title: 'Специфікація модуля',
            path:"/api/"
          },

          {
            title: 'Програма випобувань',
            path:"/test/"
          }

        ],
         sidebarDepth: 0,
         displayAllHeaders: true, // Default: false

          docsDir: 'docs',
          docsBranch: 'master',



  },


  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
 /* plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]*/

}
