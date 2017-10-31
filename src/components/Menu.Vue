<template>
  <b-navbar toggleable="md" type="light" variant="danger">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-navbar-brand href="/#/">Attention Trigger</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
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
      options: ['Home', 'Indsamling', 'Analyse', 'Debug-Info']
    }
  }
}
</script>

<style>

a {
  color: black;
}

</style>
