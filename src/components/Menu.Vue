<template>
  <b-navbar toggleable="md" type="light" variant="secondary">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-navbar-brand href="/#/">Attention Trigger</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
        <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
        <template v-for="option in options">
          <b-nav-item :key="option">
            <router-link :to="option">{{option}}</router-link>
          </b-nav-item>
        </template>
      </b-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data () {
    return {
      options: ['Collection', 'Analysis', 'Debug-Info', 'Topic Model']
    }
  }
}
</script>

<style>

a {
  color: black;
}

</style>
