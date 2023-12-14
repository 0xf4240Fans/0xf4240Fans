import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "0到100万",
  description: "如何从0赚到100万",
  srcDir: './docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '简历', link: '/resume' },
      { text: '项目', link: '/project/' },
      { text: '博客', link: '/blog/' },
      { text: '路线图', link: '/roadmap' }
    ],

    sidebar: {
      '/project/': [
        {
          text: '项目',
          items: [
            // { text: 'Markdown Examples', link: '/markdown-examples' },
            // { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ]
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],

    footer: {
      message: '<a href="https://beian.miit.gov.cn">浙ICP备2022033936号-1</a>',
      copyright: 'Copyright © 2024 0到100万'
    },

    search: {
      provider: 'local'
    }
  }
})
