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

.el-form-item__error, .el-form-item.is-required .el-form-item__label:before {
  color: #e01783;
}


.el-form-item.is-error .el-input__inner, .el-form-item.is-error .el-input__inner:focus, .el-form-item.is-error .el-textarea__inner, .el-form-item.is-error .el-textarea__inner:focus, .el-message-box__input input.invalid, .el-message-box__input input.invalid:focus {
  border-color: #e01783;
}

.el-form-item.is-success .el-input__inner, .el-form-item.is-success .el-input__inner:focus, .el-form-item.is-success .el-textarea__inner, .el-form-item.is-success .el-textarea__inner:focus {
  border-color: #768a60;
}

.el-checkbox-button__inner:hover {
  color: grey
}



.el-checkbox-button.is-checked .el-checkbox-button__inner {
  color: #fff;
  background-color: #79174f;
  border-color: lightgrey;
  box-shadow: none;
}

.el-checkbox-button.is-focus .el-checkbox-button__inner {
  border-color: lightgrey;  
}

.el-checkbox-button__inner {
  /* border: none;   */
}

.el-input__inner:focus, .el-textarea__inner:focus, .el-select .el-input__inner:focus {
  border-color: #79174f;
}

 .runBtn.el-button:focus,  .runBtn.el-button:hover {
  color: black;
  border-color: lightgrey;
  background-color: lightgrey;
}

.el-slider__bar {
  background-color: #79174f;
}

.el-slider__button {
  border-color: #79174f;
}

.el-input-number__decrease:hover, .el-input-number__increase:hover {
  color: #79174f;
}

.el-input-number__decrease:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled), .el-input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled) {
  border-color: #79174f;
}
</style>
