<template lang="pug">
  .app
    md-toolbar.md-dense
      md-button.md-icon-button.toggler(v-on:click.native="toggle()")
        md-icon menu
      span.expand
      h2.md-title Fergardi
      span.expand
      md-button.md-icon-button.searcher
        md-icon search
    md-sidenav.md-left.md-fixed(ref="sidebar")
      md-toolbar.md-account-header
        md-list.md-transparent
          md-list-item.md-avatar-list
            span.expand
            md-avatar.md-large
              img(src="dist/img/logo.jpg")
            span.expand
          md-list-item
            .md-list-text-container
              span Fergardi
              span fergardi@gmail.com
            md-button.md-icon-button.md-list-action(href="mailto:fergardi@gmail.com")
              md-icon mail
      md-list
        md-list-item
          router-link(exact, to="/portfolio")
            md-icon.md-accent devices
            span Portfolio
        md-list-item
          router-link(exact, to="/contact")
            md-icon.md-accent send
            span Contact
    .scroll
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
    // background: url("dist/img/background.jpg") no-repeat center center fixed
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
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)
  .scroll
    overflow: auto
    height: 100%
  .content
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)
  .router-link-active
    background-color: rgba(153, 153, 153, 0.2);
  .expand
    flex: 1
  .no-padding
    padding: 0 !important
  .padding
    padding: 16px !important
  .md-card
    width: 100%
    margin-bottom: 16px
    box-shadow: none
  .center
    text-align: center
  .block
    display: block
  .flex
    display: flex
    flex: 1
  .md-sidenav .md-toolbar .md-list-item *
    color: inherit
  .searcher
    visibility: hidden
  /* MEDIAS*/
  // from desktop on show sidebar
  @media only screen and (min-width: 1280px)
    .app
      padding-left: 304px
      .toggler
        visibility: hidden
      .md-sidenav-content
        top: 0
        pointer-events: auto
        transform: translate3d(0, 0, 0) !important
  // tablet landscape
  // @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  // tablet portrait
  // @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  // mobile landscape
  // @media only screen and (min-device-width: 321px)
  // mobile portrait
  // @media only screen and (max-device-width: 320px)
</style>