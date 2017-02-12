<template lang="pug">
  #contact
    md-card
      md-card-header.center
        .md-title Contact
        .md-subhead Get in touch
      md-card-content
        form(@submit.stop.prevent="submit")
          md-input-container
            md-icon.md-primary mail
            label Email
            md-input(type="email", v-model="email", required)
          md-input-container
            md-icon.md-primary short_text
            label Subject
            md-input(type="text", v-model="subject", required)
          md-input-container
            md-icon.md-primary subject
            label Content
            md-textarea(v-model="content", required)
          .center
            md-button.md-raised.md-primary(type="submit") Send
            md-button.md-raised(type="reset") Clear
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        subject: '',
        content: ''
      }
    },
    methods: {
      send () {
        window.alert('hola')
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
