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

.el-form-item__error, .el-form-item.is-required .el-form-item__label:before {
  color: #e01783;
}


.el-form-item.is-error .el-input__inner, .el-form-item.is-error .el-input__inner:focus, .el-form-item.is-error .el-textarea__inner, .el-form-item.is-error .el-textarea__inner:focus, .el-message-box__input input.invalid, .el-message-box__input input.invalid:focus {
  border-color: #e01783;
}

.el-form-item.is-success .el-input__inner, .el-form-item.is-success .el-input__inner:focus, .el-form-item.is-success .el-textarea__inner, .el-form-item.is-success .el-textarea__inner:focus {
  border-color: #768a60;
}

</style>
