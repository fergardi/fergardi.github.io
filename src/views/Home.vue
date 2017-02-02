<template lang="pug">
  #home
    h2.md-heading hola
    md-tabs(md-fixed)
      md-tab(md-label="personal", md-icon="done")
        md-layout
          md-layout(md-flex-small="100", md-flex-medium="50", md-flex-large="50", md-flex-xlarge="50")
            p izquierda
          md-layout(md-flex-small="100", md-flex-medium="50", md-flex-large="50", md-flex-xlarge="50")
            p derecha
      md-tab.no-padding(md-label="projects", md-icon="done")
        md-layout
          md-layout(v-for="card in cards", md-flex-small="100", md-flex-medium="50", md-flex-large="50", md-flex-xlarge="50")
            md-card(v-bind:class="'md-' + card.theme")
              md-card-header
                .md-title {{ card.title }}
                .md-subhead {{ card.subtitle }}
              md-card-media-cover(md-solid)
                md-card-media(md-ratio="16:9")
                  md-image(v-bind:md-src="'dist/img/' + card.image")
                md-card-area
                  md-card-header
                    .md-title {{ card.title }}
                    .md-subhead {{ card.subtitle }}
              md-card-content
                span {{ card.description }}
      md-tab(md-label="skills", md-icon="done")
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
            theme: 'wyzard',
            title: 'Wyzard',
            subtitle: 'https://www.wyzard.es',
            image: 'annyversary.png',
            description: 'description'
          },
          {
            theme: 'expansyon',
            title: 'Expansyon',
            subtitle: 'https://www.expansyon.com',
            image: 'annyversary.png',
            description: 'description'
          },
          {
            theme: 'heroyc',
            title: 'Heroyc',
            subtitle: 'https://www.heroyc.com',
            image: 'annyversary.png',
            description: 'description'
          },
          {
            theme: 'annyversary',
            title: 'Annyversary',
            subtitle: 'Annyversary.apk',
            image: 'annyversary.png',
            description: 'description'
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
