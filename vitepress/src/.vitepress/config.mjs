import { defineConfig } from 'vitepress'

export default defineConfig(({ command }) => {
  // command sarà esattamente 'build' quando compili e 'dev' quando sviluppi
  const isBuild = command === 'build'

  return {
    // Se stiamo compilando usiamo il path di GitHub, altrimenti la radice
    base: isBuild ? '/articoli/' : '/', 
    
    title: "Fabio Di Nocera",
    description: "Ricercatore in Fisica",
    srcDir: '.',
    markdown: {
      math: true,
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
            { 
              text: 'Didattica e Animazioni', 
              link: '/didattica',
              collapsed: false,
              items: [
                { text: 'Lezione 1', link: '/didattica/lezione-1' },
                { text: 'Lezione 2', link: '/didattica/lezione-2' },
                { text: 'Lezione 3', link: '/didattica/lezione-3' }
              ]
            },
            { text: 'Partecipazione a Eventi', link: '/eventi' },
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
  }
})