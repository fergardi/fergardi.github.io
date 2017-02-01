<template lang="pug">
  p(v-once) Help
</template>

<script>
  export default {
    created () {
      this.$material.setCurrentTheme('help')
    }
  }
</script>

<style lang="stylus" scoped>
</style>
