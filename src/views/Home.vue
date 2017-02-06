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
                md-image.zoom(v-bind:md-src="'dist/img/' + card.image")
                md-ink-ripple
                md-button.md-fab.md-fab-bottom-left(v-bind:href="card.code")
                  md-icon code
                md-button.md-fab.md-fab-bottom-right(v-bind:href="card.link")
                  md-icon play_arrow
              md-card-content.no-padding
                span.block.padding {{ card.description | lorem }}
                md-list.md-double-line.md-dense
                  md-divider
                  md-list-item(v-for="item in card.items")
                    md-icon.md-size-2x.md-accent {{ item.icon }}
                    .md-list-text-container
                      strong {{ item.title }}
                      span {{ item.subtitle }}
                    md-divider
      md-tab.responsive(md-label="Personal")
        md-layout(md-gutter="16")
          md-layout(v-for="card in cards.personal", md-flex-xsmall="100", md-flex-small="100", md-flex-medium="33", md-flex-large="33", md-flex-xlarge="33")
            md-card
              md-card-header.center
                .md-title {{ card.title }}
                .md-subhead {{ card.subtitle }}
              md-divider
              md-card-content.no-padding
                span.block.padding {{ card.description | lorem }}
                md-list.md-triple-line.md-dense
                  md-divider
                  md-list-item(v-for="item in card.items")
                    md-icon.md-size-2x.md-accent {{ item.icon }}
                    .md-list-text-container
                      strong {{ item.title }}
                      span {{ item.subtitle }}
                      i {{ item.date }}
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
              subtitle: 'Medieval fantasy turn based game',
              image: 'mockup.jpg',
              code: '#',
              link: '#',
              description: 'description',
              items: [
                {
                  icon: 'settings',
                  title: 'Infrastructure',
                  subtitle: 'RaspberryPI3 + Apache2'
                },
                {
                  icon: 'code',
                  title: 'Code',
                  subtitle: 'PHP7 + Symfony2'
                },
                {
                  icon: 'storage',
                  title: 'Database',
                  subtitle: 'MySQL5 + Doctrine2'
                },
                {
                  icon: 'view_compact',
                  title: 'Design',
                  subtitle: 'Twitter Bootstrap'
                },
                {
                  icon: 'burst_mode',
                  title: 'Assets',
                  subtitle: 'Game Icons'
                }
              ]
            },
            {
              title: 'Expansyon',
              subtitle: 'Futuristic sci fi space conquer game',
              image: 'mockup.jpg',
              code: '#',
              link: '#',
              description: 'description',
              items: [
                {
                  icon: 'settings',
                  title: 'Infrastructure',
                  subtitle: 'RaspberryPI3 + Apache2'
                },
                {
                  icon: 'code',
                  title: 'Code',
                  subtitle: 'PHP7 + Symfony2'
                },
                {
                  icon: 'storage',
                  title: 'Database',
                  subtitle: 'MySQL5 + Doctrine2'
                },
                {
                  icon: 'view_compact',
                  title: 'Design',
                  subtitle: 'Twitter Bootstrap'
                },
                {
                  icon: 'burst_mode',
                  title: 'Assets',
                  subtitle: 'Game Icons'
                }
              ]
            },
            {
              title: 'Heroyc',
              subtitle: 'Medieval rpg exploration game',
              image: 'mockup.jpg',
              code: '#',
              link: '#',
              description: 'description',
              items: [
                {
                  icon: 'settings',
                  title: 'Infrastructure',
                  subtitle: 'RaspberryPI3 + Apache2'
                },
                {
                  icon: 'code',
                  title: 'Code',
                  subtitle: 'NodeJS + Express'
                },
                {
                  icon: 'storage',
                  title: 'Database',
                  subtitle: 'MySQL5 + Sequelize'
                },
                {
                  icon: 'view_compact',
                  title: 'Design',
                  subtitle: 'Twitter Bootstrap'
                },
                {
                  icon: 'burst_mode',
                  title: 'Assets',
                  subtitle: 'Rpg Sprites'
                }
              ]
            },
            {
              title: 'Annyversary',
              subtitle: 'Guess the password gymkana game',
              image: 'mockup.jpg',
              code: '#',
              link: '#',
              description: 'description',
              items: [
                {
                  icon: 'android',
                  title: 'Device',
                  subtitle: 'Apache Cordova APK'
                },
                {
                  icon: 'code',
                  title: 'Code',
                  subtitle: 'VueJS'
                },
                {
                  icon: 'storage',
                  title: 'Database',
                  subtitle: 'LocalStorage + VueLocalForage'
                },
                {
                  icon: 'view_compact',
                  title: 'Design',
                  subtitle: 'Material Design + VueMaterial'
                },
                {
                  icon: 'burst_mode',
                  title: 'Assets',
                  subtitle: 'Google Images'
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
                  icon: 'school',
                  title: 'Intelligent Systems',
                  subtitle: 'University of Salamanca, Spain',
                  date: '2011-2012'
                },
                {
                  icon: 'school',
                  title: 'Computer Engineering',
                  subtitle: 'University of León, Spain',
                  date: '2006-2011'
                },
                {
                  icon: 'school',
                  title: 'Vocational Training in Programming',
                  subtitle: 'Helping Mary, León, Spain',
                  date: '2004-2006'
                }
              ]
            },
            {
              title: 'Skills',
              subtitle: 'Achievement unlocked',
              description: 'description',
              items: [
                {
                  icon: 'done',
                  title: 'Organized',
                  subtitle: 'Digitally speaking only',
                  date: 'Diogenes syndrom mode off'
                },
                {
                  icon: 'done',
                  title: 'Social',
                  subtitle: 'Chat and laugh is important',
                  date: 'Seriously, I need coffee'
                },
                {
                  icon: 'done',
                  title: 'Learner',
                  subtitle: 'Love new technologies',
                  date: 'Easily bored'
                }
              ]
            },
            {
              title: 'Jobs',
              subtitle: 'Pays the bills',
              description: 'description',
              items: [
                {
                  icon: 'attach_money',
                  title: 'Senior Developer',
                  subtitle: 'Xeridia SL, León, Spain',
                  date: '2016+'
                },
                {
                  icon: 'attach_money',
                  title: 'Junior Developer',
                  subtitle: 'University of León, Spain',
                  date: '2012-2015'
                },
                {
                  icon: 'attach_money',
                  title: 'IT service',
                  subtitle: 'Diary of León, Spain',
                  date: '2010-2011'
                },
                {
                  icon: 'attach_money',
                  title: 'Junior Developer',
                  subtitle: 'University of León, Spain',
                  date: '2009-2010'
                },
                {
                  icon: 'attach_money',
                  title: 'Junior Developer',
                  subtitle: 'LegioNet SL, León, Spain',
                  date: '2005-2006'
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
  .zoom
    transition: all .2s ease-in-out;
  .zoom:hover
    transform: translateY(-50%) scale(1.1) !important
    opacity: 0.9
  @media only screen and (max-width: 1023px)
    .responsive
      padding: 0
</style>
