<template>
  <div id="app">
    <el-container>

      <el-aside width="250px">
        <app-menu app></app-menu>
      </el-aside>

      <el-main class="main">
        <transition name="fade">
          <router-view/>
        </transition>
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

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .4s;
}

.fade-enter-active {
  transition-delay: .4s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

body {
  font-family: "Roboto-Light", "Helvetica Neue",Helvetica,Arial,sans-serif;
  margin: 0;
}

.main {
  background-color: lightgrey;
}

.el-card {
  margin: 10px 0;
}

</style>
