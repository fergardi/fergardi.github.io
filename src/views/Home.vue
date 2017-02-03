<template lang="pug">
  #home(v-once)
    md-tabs(md-fixed)
      md-tab.responsive(md-label="Projects")
        md-layout(md-gutter="16")
          md-layout(v-for="card in cards.projects", md-flex-xsmall="100", md-flex-small="100", md-flex-medium="25", md-flex-large="25", md-flex-xlarge="25")
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
                    md-divider
      md-tab.responsive(md-label="Personal")
        md-layout(md-gutter="16")
          md-layout(v-for="card in cards.personal", md-flex-xsmall="100", md-flex-small="100", md-flex-medium="33", md-flex-large="33", md-flex-xlarge="33")
            md-card
              md-card-header.center
                .md-title {{ card.title }}
                .md-subhead {{ card.subtitle }}
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
                    md-divider
</template>

<script>
  export default {
    data () {
      return {
        cards: {
          projects: [
            {
              title: 'Wyzard',
              subtitle: 'https://www.wyzard.es',
              image: 'wyzard.png',
              description: 'description',
              items: [
                {
                  icon: 'cloud',
                  title: 'RaspberryPI',
                  subtitle: 'Homemade server'
                },
                {
                  icon: 'build',
                  title: 'PHP Symfony',
                  subtitle: 'Code language'
                },
                {
                  icon: 'view_quilt',
                  title: 'Twitter Bootstrap',
                  subtitle: 'Mobile first'
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
                  subtitle: 'Homemade server'
                },
                {
                  icon: 'build',
                  title: 'PHP Symfony',
                  subtitle: 'Code language'
                },
                {
                  icon: 'view_quilt',
                  title: 'Twitter Bootstrap',
                  subtitle: 'Mobile first'
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
                  subtitle: 'Homemade server'
                },
                {
                  icon: 'build',
                  title: 'NodeJS',
                  subtitle: 'Code language'
                },
                {
                  icon: 'view_quilt',
                  title: 'Twitter Bootstrap',
                  subtitle: 'Mobile first'
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
                  subtitle: 'Code language'
                },
                {
                  icon: 'view_quilt',
                  title: 'Material Design',
                  subtitle: 'Mobile first'
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
                  title: 'LocalStorage',
                  subtitle: 'Database'
                },
                {
                  icon: 'autorenew',
                  title: 'SPA',
                  subtitle: 'Single Page Application'
                }
              ]
            }
          ],
          personal: [
            {
              title: 'Studies',
              subtitle: 'Boooring',
              description: 'description',
              items: [
                {
                  icon: 'done',
                  title: 'Title',
                  subtitle: 'Subtitle'
                },
                {
                  icon: 'done',
                  title: 'Title',
                  subtitle: 'Subtitle'
                }
              ]
            },
            {
              title: 'Skills',
              subtitle: 'Achievement unlocked!',
              description: 'description',
              items: [
                {
                  icon: 'done',
                  title: 'Title',
                  subtitle: 'Subtitle'
                }
              ]
            },
            {
              title: 'Jobs',
              subtitle: 'Eating purposes only',
              description: 'description',
              items: [
                {
                  icon: 'done',
                  title: 'Title',
                  subtitle: 'Subtitle'
                },
                {
                  icon: 'done',
                  title: 'Title',
                  subtitle: 'Subtitle'
                },
                {
                  icon: 'done',
                  title: 'Title',
                  subtitle: 'Subtitle'
                }
              ]
            }
          ]
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @media only screen and (max-width: 1023px)
    .responsive
      padding: 0
</style>
