<template lang="pug">
  #home
    md-card(v-for="card in cards", v-bind:class="'md-' + card.theme")
      md-card-header
        .md-title {{ card.title }}
        .md-subhead {{ card.subtitle }}
      md-card-media-cover(md-solid)
        md-card-media(md-ratio="16:9")
          img(v-bind:src="'dist/img/' + card.image")
        md-card-area
          md-card-header
            .md-title {{ card.title }}
            .md-subhead {{ card.subtitle }}
      md-card-content
        span {{ card.description }}
</template>

<script>
  export default {
    data () {
      return {
        cards: [
          {
            theme: 'accent',
            title: 'title',
            subtitle: 'subtitle',
            image: 'annyversary.png',
            description: 'description'
          },
          {
            theme: 'warn',
            title: 'title',
            subtitle: 'subtitle',
            image: 'annyversary.png',
            description: 'description'
          },
          {
            theme: 'primary',
            title: 'title',
            subtitle: 'subtitle',
            image: 'annyversary.png',
            description: 'description'
          },
          {
            theme: 'accent',
            title: 'title',
            subtitle: 'subtitle',
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
