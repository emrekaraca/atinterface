<template>
  <div class="main">
    <h1>{{title}}</h1>
    <md-button class="md-icon-button md-raised">
      <md-icon>add</md-icon>
    </md-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
