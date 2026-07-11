import { defineConfig } from 'vitepress'

const isProd = process.env.NODE_ENV === 'production'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: isProd ? 'http://127.0.0.1:5500/docs/.vitepress/dist/' : 'https://fabiodncr.github.io/articoli/test',
  title: "Fabio Di Nocera",
  description: "Ricercatore in Fisica",
  srcDir: '.',
  markdown: {
    math:true,
    lineNumbers: true
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('annotation') || tag.startsWith('math') || tag.startsWith('mspace') || tag.startsWith('mrow') || tag.startsWith('mo') || tag.startsWith('mn') || tag.startsWith('mi') || tag.startsWith('msup')
      }
    }
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Pubblicazioni', link: '/pubblicazioni' },
      { text: 'Didattica & Manim', link: '/didattica' },
      { text: 'Eventi', link: '/eventi' }
    ],

    sidebar: [
      {
        text: 'Menu',
        items: [
          { text: 'Biografia', link: '/' },
          { text: 'Pubblicazioni', link: '/pubblicazioni' },
          { text: 'Didattica e Animazioni', link: '/didattica' },
          { text: 'Partecipazione a Eventi', link: '/eventi' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
      { icon: 'linkedin', link: 'https://linkedin.com' }
    ]
  },

  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css' }]
  ]
})
