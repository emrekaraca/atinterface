<template>
  <!-- Top-Level-Div - Vue will render everything into this div -->
  <div id="app">

    <!-- Top-Level element for Element-UI layout elements - More Info: http://element.eleme.io/#/en-US/component/container -->
    <el-container>

      <!-- ElementUI-container for menu-sidebar, hard-coded width -->
      <el-aside width="250px">

        <!-- Menu-component, which is imported in the script-block -->
        <app-menu app></app-menu>

      </el-aside>

      <!-- ElementUI-container for main content -->
      <el-main>
        <!-- type="flex" and justify="center" in el-row enable centering of variable-width-column - More Info: http://element.eleme.io/#/en-US/component/layout#alignment -->
        <el-row type="flex" justify="center">
          <el-col :span="23">

            <!-- native Vue.js-transition-wrapper, settings are specified in style block below - More Info: https://vuejs.org/v2/guide/transitions.html#Transitioning-Single-Elements-Components -->
            <transition name="fade">

              <!-- Router-View-Element, the page-componentes will loaded and unloaded into this element, depending on the targeted route - More Info: https://router.vuejs.org/en/ -->
              <router-view/>

            </transition>
          </el-col>
        </el-row>
      </el-main>

    </el-container>
    
  </div>
</template>

<script>
import Menu from '@/components/Menu' // Importing the Menu-component

export default {
  name: 'app',
  components: {
    'app-menu': Menu // registering the Menu-component
  }
}
</script>

<style>

body {
  font-family: 'PT Sans',Helvetica,sans-serif; /* Setting the &#-Font - the font is imported in the index.html */
  margin: 0; /* removing default margin */
}

.el-container {
  min-height: 100vh; /* Stretching top-level container to stretch at least the complete screen heigth */
}

.el-aside, main.el-main.main {
  height: inherit; /* Ensuring that the menu and the main container fill out the top-level-container */
}

.el-main {
  background-color: #ebebeb; /* Setting the background-color of the main element */
}


/* The .fade-* classes control the transition for the page-components */
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

/* ###############################
   #### Custom Element Styles ####
   ###############################
   
   => These elements are styled in the top-level-component
   => This means that THESE STYLES EXTEND TO ALL SUB-COMPONENTS!!! (because this style block is not scoped)
   => Elements that are reused across mutliple components should be styled here
   
   */

.runBtn {
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1); /* Adding shadow, to make trigger button visually similar to card-style */
  width: 100%; /* Stretching trigger-button to same width as cards */
}

.roundBtn {
  font-size: 30px;
}

.addBtn {
  color: #837f63; 
}
.addBtn:hover, .addBtn:active {
  color: #768a60
}
.el-card {
  margin: 10px 0; /* Adding space between the cards */
}

.modalDiv {
  padding: 15px;
}
</style>
