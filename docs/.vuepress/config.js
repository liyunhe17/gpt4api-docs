import { defineUserConfig } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'GPT4API 开发者文档',
  description: 'GPT4API 开发者文档',
  plugins: [
    docsearchPlugin({
      // 配置项
    }),
  ]
})