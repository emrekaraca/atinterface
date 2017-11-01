<template>
  <div id="app">
    <el-container>

      <el-aside width="250px">
        <app-menu app></app-menu>
      </el-aside>

      <el-main class="main">
        <router-view/>
      </el-main>

    </el-container>
    
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  name: 'app',
  components: {
    'app-menu': Menu
  }
}
</script>

<style>

body {
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  margin: 0;
}

.main {
  background-color: lightgrey;
}

</style>
