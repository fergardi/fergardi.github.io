<template lang="pug">
  #contact
    md-snackbar(ref="snackbar", md-duration="3000", md-position="top center")
      span {{ alert }}
      md-button.md-accent(v-on:click.native="close()")
        md-icon done
    md-card
      md-card-header.center
        .md-title Contact
        .md-subhead Get in touch
      md-card-content
        form#form(v-on:submit.prevent="send()")
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
            label Message
            md-textarea(v-model="message", required)
          vue-recaptcha.flex.center.captcha(sitekey="6LdmXxUUAAAAAE4DoEtzvTSqo3FIyQrutsWLYoJm", ref="recaptcha", @verify="onVerify", @expired="onExpired")
          .flex.center
            md-button.md-raised.md-primary(type="submit") Send
            md-button.md-raised(type="reset") Clear
</template>

<script>
  import axios from 'axios'
  import VueRecaptcha from 'vue-recaptcha'
  export default {
    components: { VueRecaptcha },
    data () {
      return {
        email: '',
        subject: '',
        message: '',
        alert: '',
        captcha: false
      }
    },
    methods: {
      send () {
        if (this.captcha) {
          axios.post('https://formspree.io/fergardi@gmail.com', {
            email: this.email,
            subject: this.subject,
            message: this.message
          }, {
            headers: {
              'Content-Type': 'application/json'
            },
            responseType: 'json'
          })
          .then(() => {
            document.getElementById('form').reset()
            this.$refs.recaptcha.reset()
            this.alert = 'Your email has been sent correctly! I\'ll answer ASAP.'
            this.open()
          })
          .catch(() => {
            this.alert = 'There were errors sending the email! Please try again.'
            this.open()
          })
        } else {
          this.alert = 'Please confirm the Captcha!'
          this.open()
        }
      },
      onVerify () {
        this.captcha = true
      },
      onExpired () {
        this.captcha = false
      },
      open () {
        this.$refs.snackbar.open()
      },
      close () {
        this.$refs.snackbar.close()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .captcha
    margin-bottom: 1em
</style>
