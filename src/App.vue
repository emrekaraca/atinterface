<template>
  <div id="app">
    <el-container>

      <el-aside width="250px">
        <app-menu app></app-menu>
      </el-aside>

      <el-main class="main">
        <el-row type="flex" justify="center">
          <el-col :span="23">
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

.el-container {
  min-height: 100vh;
}

.el-aside, main.el-main.main {
  height: inherit;
}

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

.runBtn {
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  width: 100%;
}

.closeBtn:hover {
  color: #79174f;
}
.closeBtn:active {
  color: #e01783;
}

.addBtn {
  color: #837f63
}
.addBtn:hover, .addBtn:active {
  color: #768a60
}
.el-card {
  margin: 10px 0;
}
</style>
