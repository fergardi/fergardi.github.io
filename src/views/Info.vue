<template lang="pug">
  p(v-once) Info
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
