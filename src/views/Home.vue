<template lang="pug">
  #home
    h1.md-title.padding About me
    p.padding hello
    h1.md-title.padding Projects
    md-layout
      md-layout(v-for="card in cards", md-flex-small="100", md-flex-medium="50", md-flex-large="50", md-flex-xlarge="50")
        md-card
          md-card-header
            .md-title {{ card.title }}
            .md-subhead {{ card.subtitle }}
          md-card-media(md-ratio="16:9")
            md-image(v-bind:md-src="'dist/img/' + card.image")
          md-card-content
            span {{ card.description }}
            md-list.md-double-line
              md-list-item(v-for="item in card.items")
                md-avatar.md-large
                  md-icon.md-primary {{ item.icon }}
                .md-list-text-container
                  span {{ item.title }}
                  span {{ item.subtitle }}
                md-divider
</template>

<script>
  export default {
    data () {
      return {
        cards: [
          {
            title: 'Wyzard',
            subtitle: 'https://www.wyzard.es',
            image: 'wyzard.jpg',
            description: 'description',
            items: [
              {
                icon: 'cloud',
                title: 'RaspberryPI3',
                subtitle: 'Own server'
              },
              {
                icon: 'build',
                title: 'PHP Symfony2',
                subtitle: 'Code language'
              },
              {
                icon: 'view_quilt',
                title: 'Bootstrap3',
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
                title: 'MySQL5',
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
            image: 'expansyon.jpg',
            description: 'description',
            items: [
              {
                icon: 'cloud',
                title: 'RaspberryPI3',
                subtitle: 'Own server'
              },
              {
                icon: 'build',
                title: 'PHP Symfony2',
                subtitle: 'Code language'
              },
              {
                icon: 'view_quilt',
                title: 'Bootstrap3',
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
                title: 'MySQL5',
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
            image: 'heroyc.jpg',
            description: 'description',
            items: [
              {
                icon: 'cloud',
                title: 'RaspberryPI3',
                subtitle: 'Own server'
              },
              {
                icon: 'build',
                title: 'NodeJS',
                subtitle: 'Code language'
              },
              {
                icon: 'view_quilt',
                title: 'Bootstrap3',
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
                title: 'MySQL5',
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
                icon: 'shopping_cart',
                title: 'PayPal',
                subtitle: 'Microtransactions'
              }
            ]
          },
          {
            title: 'Annyversary',
            subtitle: 'Annyversary.apk',
            image: 'annyversary.jpg',
            description: 'description',
            items: [
              {
                icon: 'android',
                title: 'Cordova',
                subtitle: 'From web to mobile'
              },
              {
                icon: 'build',
                title: 'VueJS',
                subtitle: 'NodeJS MVVM framework'
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
</style>
