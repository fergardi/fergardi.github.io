<template lang="pug">
  p(v-once) Home
</template>

<script>
  export default {
    created () {
      this.$material.setCurrentTheme('home')
    }
  }
</script>

<style lang="stylus" scoped>
</style>
