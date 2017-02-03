<template lang="pug">
  #home(v-once)
    md-tabs(md-fixed)
      md-tab.responsive(md-label="Projects")
        md-layout(md-gutter="16")
          md-layout(v-for="card in cards.projects", md-flex-xsmall="100", md-flex-small="100", md-flex-medium="50", md-flex-large="50", md-flex-xlarge="50")
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
                      md-icon.md-accent {{ item.icon }}
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
              image: 'mockup.jpg',
              description: 'description',
              items: [
                {
                  icon: 'cloud',
                  title: 'Infrastructure',
                  subtitle: 'RaspberryPI3 + Apache2'
                },
                {
                  icon: 'build',
                  title: 'Language',
                  subtitle: 'PHP7 + Symfony2'
                },
                {
                  icon: 'storage',
                  title: 'Database',
                  subtitle: 'MySQL5 + Doctrine2'
                },
                {
                  icon: 'code',
                  title: 'Design',
                  subtitle: 'Twitter Bootstrap'
                }
              ]
            },
            {
              title: 'Expansyon',
              subtitle: 'https://www.expansyon.com',
              image: 'mockup.jpg',
              description: 'description',
              items: [
                {
                  icon: 'cloud',
                  title: 'Infrastructure',
                  subtitle: 'RaspberryPI3 + Apache2'
                },
                {
                  icon: 'build',
                  title: 'Language',
                  subtitle: 'PHP7 + Symfony2'
                },
                {
                  icon: 'storage',
                  title: 'Database',
                  subtitle: 'MySQL5 + Doctrine2'
                },
                {
                  icon: 'code',
                  title: 'Design',
                  subtitle: 'Twitter Bootstrap'
                }
              ]
            },
            {
              title: 'Heroyc',
              subtitle: 'https://www.heroyc.com',
              image: 'mockup.jpg',
              description: 'description',
              items: [
                {
                  icon: 'cloud',
                  title: 'Infrastructure',
                  subtitle: 'RaspberryPI3 + Apache2'
                },
                {
                  icon: 'build',
                  title: 'Language',
                  subtitle: 'NodeJS + Express'
                },
                {
                  icon: 'storage',
                  title: 'Database',
                  subtitle: 'MySQL5 + Sequelize'
                },
                {
                  icon: 'code',
                  title: 'Design',
                  subtitle: 'Twitter Bootstrap'
                }
              ]
            },
            {
              title: 'Annyversary',
              subtitle: 'Annyversary.apk',
              image: 'mockup.jpg',
              description: 'description',
              items: [
                {
                  icon: 'android',
                  title: 'Device',
                  subtitle: 'Cordova android APK'
                },
                {
                  icon: 'build',
                  title: 'Language',
                  subtitle: 'VueJS framework'
                },
                {
                  icon: 'storage',
                  title: 'Database',
                  subtitle: 'LocalStorage + VueLocalForage'
                },
                {
                  icon: 'code',
                  title: 'Design',
                  subtitle: 'Material Design + VueMaterial'
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
