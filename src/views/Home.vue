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
                img.zoom(v-bind:src="'dist/img/' + card.image")
                md-ink-ripple
                md-button.md-fab.md-fab-bottom-left(v-bind:href="card.code", v-if="card.code")
                  md-icon code
                md-button.md-fab.md-fab-bottom-right(v-bind:href="card.link", v-if="card.link")
                  md-icon play_arrow
              md-card-content.no-padding
                span.flex.padding {{ card.description }}
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
                span.block.padding {{ card.description }}
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
              image: 'wyzard.jpg',
              code: 'https://github.com/fergardi/archmage',
              link: 'https://www.wyzard.es',
              description: 'My first online game. In a fantasy/medieval massive competitive world, you gain a "turn" every X minutes, and you may spend your turns in different ways: exploring/conquering new lands to build in, researching/conjuring new spells/summons to power up your magical army, activating powerful legendary artifacts in yourself/enemy realms, buying/selling/trading items/troops in the store to earn tons of gold, and inn the end, defeating the 5 powerful Demigods and last standing the top1 to win and became the best Wyzard of the world. Choose between 5 different colors and ways to play.',
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
              image: 'expansyon.jpg',
              code: 'https://github.com/fergardi/armada',
              link: 'https://www.expansyon.com',
              description: 'My second online game. This time, you own a prosper but little space empire. As before, gain a "turn" every X minutes and spend it leveling up, researching new technologies, constructing new buildings, exploring and conquering new planets to increase your resource incomes, and attacking other players to lower their power. Join one of the several factions available, vote the federal laws that will rule your daily gameplay differently using your influence, and accept new quests from the cantina for glory and rewards. Again, after defeating the invincible Empyre, you need to last stand at top1 to win and became the new Empyre.',
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
              image: 'heroyc.jpg',
              code: 'https://github.com/fergardi/heroyc',
              link: 'https://www.heroyc.com',
              description: 'My third online game. Now, there is an actual world out there. In that world, buildings spawn/vanish constantly, offering challenges to the player like defeating enemies, leveling up, looting items, crafting recipes, learning spells, etc. The trick here is that you actually need to go to the spot to activate it, making it fun for people who likes to walk or bike. No winners this time, just play and level up, and try to be the top1 as long as you can.',
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
              image: 'annyversary.jpg',
              code: 'https://github.com/fergardi/VueMaterial',
              link: null,
              description: 'My fourth game. This time is offline, served as an Android APK with Cordova, for celebrating my girlfriend\'s and I first anniversary. I challenged her with like 50 freaky riddles in comics/books/movies/shows/games, using images/memes/maps/video/gifs and textual clues/tags, expecting her to break the password in order to solve the riddle and move forward to the next one, with in the end being an actual gift hidden in a secret place.',
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
            },
            {
              title: 'Portfolio',
              subtitle: 'Personal CV portolio',
              image: 'portfolio.jpg',
              code: 'https://github.com/fergardi/fergardi.github.io',
              link: 'https://fergardi.github.io',
              description: 'My personal portfolio, hosted in github pages. Minimalistic, plain and simple, WYSIWYG, fully responsive SPA for demostration purposes. Mobile first, desktop friendly. Designed all by myself, pretty cool, huh?',
              items: [
                {
                  icon: 'settings',
                  title: 'Infrastructure',
                  subtitle: 'Github pages'
                },
                {
                  icon: 'code',
                  title: 'Code',
                  subtitle: 'VueJS'
                },
                {
                  icon: 'storage',
                  title: 'Database',
                  subtitle: 'Nope'
                },
                {
                  icon: 'view_compact',
                  title: 'Design',
                  subtitle: 'Material Design + VueMaterial'
                },
                {
                  icon: 'burst_mode',
                  title: 'Assets',
                  subtitle: 'My own projects\' screenshots'
                }
              ]
            }
          ],
          personal: [
            {
              title: 'Studies',
              subtitle: 'Boooring',
              description: 'Being a science person, loved computers/videogames since day 1, so I chose them as my life career. I\'m usually a self-learning kind of guy, loving new technologies and learning everything I can, as long as fits my interests. Hate getting bored.',
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
              description: 'I allways liked computers, and more specifically, games. Wanted to be a game developer but ended being a web developer, close but not enought. So I started developing web browser games. Nowadays with the actual Android/iOS Apache Cordova support, I started to port those games to mobile apps which connects my website games to different platforms around the net. Since the discovery of NodeJS, switched from my old monolithic PHP developing skills and never looked back. Next steps? Desktop apps using Electron.',
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
              description: 'I\'ve worked in so many places right now, allways in a developer kind of job. Sometimes boring, with simple user database maintenance, list & details rendering, or content management system administration. But other times inspiring, with real time map positioning, 3d sand projections, or critical fire response systems.',
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
