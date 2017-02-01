<template lang="pug">
  #info(v-once)
    p Info
</template>

<script>
  export default {
    created () {
      this.$material.setCurrentTheme('info')
    }
  }
</script>

<style lang="stylus" scoped>
</style>
