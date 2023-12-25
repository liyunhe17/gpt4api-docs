import { defineUserConfig, defaultTheme } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'GPT4API 开发者文档',
  description: '解放开发者，一处调用，多个API尽掌控！',
  plugins: [
    docsearchPlugin({
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
            }
          }
        }
      }
    }),
  ],
  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'GPT4API', link: 'https://gpt4api.shop' }
    ],
    logo: '/logo.png',
    contributors: false,
  })
})