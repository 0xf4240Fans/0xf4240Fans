import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "0到100万",
  description: "如何从0赚到100万",
  srcDir: './docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '@2024', link: '/resume' },
      { text: '项目', link: '/project/' },
      { text: '博客', link: '/blog/' },
      { text: '周刊', link: '/hack/' },
      { text: '学术', link: '/paper/' },
      { text: '路线图', link: '/roadmap' }
    ],

    logo: '/logo.svg',

    sidebar: {
      '/project/': [
        {
          text: '项目',
          items: [
            { text: 'Easy DouYin', link: '/project/easydouyin/index' }
          ]
        }
      ],
      '/hack/': [
        {
          text: '周刊',
          items: [
            { text: '202401', link: '/hack/2024/week01' }
          ]
        }
      ],
      '/paper/': [
        {
          text: '学术',
          items: [
            { text: '如何读论文', link: '/paper/how-to-read-paper' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/0xf4240Fans' }
    ],

    footer: {
      message: '<a href="https://beian.miit.gov.cn">浙ICP备2022033936号-1</a>',
      copyright: 'Copyright © 2024 0到100万'
    },

    search: {
      provider: 'local'
    }
  }
})
