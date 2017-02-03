<template lang="pug">
  #home
    md-tabs(md-fixed)
      md-tab(md-label="projects", id="projects")
        md-layout(md-gutter="16")
          md-layout(v-for="card in cards", md-flex-small="100", md-flex-medium="50", md-flex-large="50", md-flex-xlarge="50")
            md-card
              md-card-header.center
                .md-title {{ card.title }}
                .md-subhead {{ card.subtitle }}
              md-card-media(md-ratio="16:9")
                md-image(v-bind:md-src="'dist/img/' + card.image")
              md-card-content.no-padding
                span.block.padding {{ card.description | lorem }}
                md-list.md-double-line
                  md-divider
                  md-list-item(v-for="item in card.items")
                    md-avatar.md-large
                      md-icon.md-primary {{ item.icon }}
                    .md-list-text-container
                      span {{ item.title }}
                      span {{ item.subtitle }}
      md-tab(md-label="personal")
        md-layout
          md-layout(md-flex-small="100", md-flex-medium="50", md-flex-large="50", md-flex-xlarge="50")
            p izquierda
          md-layout(md-flex-small="100", md-flex-medium="50", md-flex-large="50", md-flex-xlarge="50")
            p derecha
</template>

<script>
  export default {
    data () {
      return {
        cards: [
          {
            title: 'Wyzard',
            subtitle: 'https://www.wyzard.es',
            image: 'wyzard.png',
            description: 'description',
            items: [
              {
                icon: 'cloud',
                title: 'RaspberryPI',
                subtitle: 'Own server'
              },
              {
                icon: 'build',
                title: 'PHP Symfony',
                subtitle: 'Code language'
              },
              {
                icon: 'view_quilt',
                title: 'Twitter Bootstrap',
                subtitle: 'Mobile first responsive'
              },
              {
                icon: 'code',
                title: 'HTML5',
                subtitle: 'Template system'
              },
              {
                icon: 'palette',
                title: 'CSS3',
                subtitle: 'Web Desing'
              },
              {
                icon: 'storage',
                title: 'MySQL',
                subtitle: 'Database'
              },
              {
                icon: 'https',
                title: 'HTTPS',
                subtitle: 'Let\'s Encrypt'
              },
              {
                icon: 'shopping_cart',
                title: 'PayPal',
                subtitle: 'Microtransactions'
              }
            ]
          },
          {
            title: 'Expansyon',
            subtitle: 'https://www.expansyon.com',
            image: 'expansyon.png',
            description: 'description',
            items: [
              {
                icon: 'cloud',
                title: 'RaspberryPI',
                subtitle: 'Own server'
              },
              {
                icon: 'build',
                title: 'PHP Symfony',
                subtitle: 'Code language'
              },
              {
                icon: 'view_quilt',
                title: 'Twitter Bootstrap',
                subtitle: 'Mobile first responsive'
              },
              {
                icon: 'code',
                title: 'HTML5',
                subtitle: 'Template system'
              },
              {
                icon: 'palette',
                title: 'CSS3',
                subtitle: 'Web Desing'
              },
              {
                icon: 'storage',
                title: 'MySQL',
                subtitle: 'Database'
              },
              {
                icon: 'https',
                title: 'HTTPS',
                subtitle: 'Let\'s Encrypt'
              },
              {
                icon: 'shopping_cart',
                title: 'PayPal',
                subtitle: 'Microtransactions'
              }
            ]
          },
          {
            title: 'Heroyc',
            subtitle: 'https://www.heroyc.com',
            image: 'heroyc.png',
            description: 'description',
            items: [
              {
                icon: 'cloud',
                title: 'RaspberryPI',
                subtitle: 'Own server'
              },
              {
                icon: 'build',
                title: 'NodeJS',
                subtitle: 'Code language'
              },
              {
                icon: 'view_quilt',
                title: 'Twitter Bootstrap',
                subtitle: 'Mobile first responsive'
              },
              {
                icon: 'code',
                title: 'HTML5',
                subtitle: 'Template system'
              },
              {
                icon: 'palette',
                title: 'CSS3',
                subtitle: 'Web Desing'
              },
              {
                icon: 'storage',
                title: 'MySQL',
                subtitle: 'Database'
              },
              {
                icon: 'https',
                title: 'HTTPS',
                subtitle: 'Let\'s Encrypt'
              },
              {
                icon: 'translate',
                title: 'Translations',
                subtitle: 'I18n capable'
              },
              {
                icon: 'place',
                title: 'Map support',
                subtitle: 'Leaflet'
              },
              {
                icon: 'shopping_cart',
                title: 'PayPal',
                subtitle: 'Microtransactions'
              }
            ]
          },
          {
            title: 'Annyversary',
            subtitle: 'Annyversary.apk',
            image: 'annyversary.png',
            description: 'description',
            items: [
              {
                icon: 'android',
                title: 'Cordova',
                subtitle: 'From web to mobile APK'
              },
              {
                icon: 'build',
                title: 'VueJS',
                subtitle: 'NodeJS MVVM framework'
              },
              {
                icon: 'autorenew',
                title: 'SPA',
                subtitle: 'Single Page Application'
              },
              {
                icon: 'view_quilt',
                title: 'Material Design',
                subtitle: 'Mobile first responsive'
              },
              {
                icon: 'code',
                title: 'HTML5',
                subtitle: 'Template system'
              },
              {
                icon: 'palette',
                title: 'CSS3',
                subtitle: 'Web Desing'
              }
            ]
          }
        ]
      }
    },
    created () {
      this.$material.setCurrentTheme('home')
    }
  }
</script>

<style lang="stylus" scoped>
  @media only screen and (max-width: 1023px)
    #projects
      padding: 0
</style>
