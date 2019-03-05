<template>
  <button @click="clickTimes">You have click {{times}} times</button>
</template>

<script>
  export default {
    data () {
      return {
        times:0
      }
    },
    methods: {
      clickTimes () {
        this.times++
      }
    }
  }
</script>

<style>

</style>
