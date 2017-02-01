<template lang="pug">
  .app
    md-whiteframe(md-elevation="3", v-once)
      md-toolbar
        md-button.md-icon-button.toggler(v-on:click="toggle()")
          md-icon menu
        h2.md-title(style="flex: 1") Fergardi
        router-link.md-icon-button(tag="md-button", to="/help")
          md-icon help
        router-link.md-icon-button(tag="md-button", to="/info")
          md-icon info
    md-sidenav.md-left.md-fixed(ref="sidebar", v-once)
      md-toolbar.md-account-header
        md-list.md-transparent
          md-list-item.md-avatar-list
            md-avatar.md-large
              img(src="dist/img/logo.jpg")
          md-list-item
            .md-list-text-container
              span Fergardi
              span fergardi@gmail.com
            md-button.md-icon-button.md-list-action(href="mailto:fergardi@gmail.com")
              md-icon mail
      md-list
        md-list-item(v-on:click="close()")
          router-link(to="/home")
            md-icon.md-primary home
            span Home
        md-list-item(v-on:click="close()")
          router-link(to="/help")
            md-icon.md-primary help
            span Help
        md-list-item(v-on:click="close()")
          router-link(to="/info")
            md-icon.md-primary info
            span Info
    .main      
      router-view.content.animated.fadeIn
</template>

<script>
  export default {
    methods: {
      toggle () {
        this.$refs.sidebar.toggle()
      },
      close () {
        this.$refs.sidebar.close()
      }
    }
  }
</script>

<style lang="stylus">
  body
    background: url("dist/img/background.jpg") no-repeat center center fixed
    -webkit-background-size: cover
    -moz-background-size: cover
    -o-background-size: cover
    background-size: cover
    box-sizing: border-box
  html
  body
  .app
    height: 100%
    overflow: hidden
  .app
    display: flex
    flex-flow: column
    transition: all .4s cubic-bezier(.25,.8,.25,1)
  .main
    overflow: auto
    height: 100%
  .content
    padding: 0 !important
    transition: all .4s cubic-bezier(.25,.8,.25,1)
  @media screen and (min-width: 1280px)
    .app
      padding-left: 304px
      .toggler
        display: none
      .md-sidenav-content
        top: 0
        pointer-events: auto
        transform: translate3d(0, 0, 0) !important
</style>