<template>
  <div id="app">
    <el-container>

      <el-aside width="250px">
        <app-menu app></app-menu>
      </el-aside>

      <el-main class="main">
        <el-row>
          <el-col :span="20" :offset="2">
            <transition name="fade">
              <router-view/>
            </transition>
          </el-col>
        </el-row>
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
  font-family: 'PT Sans',Helvetica,sans-serif;
  margin: 0;
}

.main {
  background-color: #ebebeb;
}

.el-card {
  margin: 10px 0;
}

</style>
