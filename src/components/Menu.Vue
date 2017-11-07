<template>
  <div class="menuContainer">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="/"
          class="el-menu-vertical"
          background-color="#79174f"
          text-color="#7d7d7d"
          active-text-color="#fff"
          router>
          <img :src="logo()" width="80%" style="margin: 30px 0 20px 10%" />
          <el-menu-item index="/"><i class="el-icon-arrow-right"></i>Home</el-menu-item>
          <template v-for="(option, index) in options">
            <el-menu-item :index="(option).toLowerCase().replace(' ', '')" :key="option"><i class="el-icon-arrow-right"></i>{{option}}</el-menu-item>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: ['Collection', 'Analysis']
      // options: ['Collection', 'Analysis', 'Debug Info', 'Topic Model']
    }
  },
  methods: {
    logo: () => require('./../assets/logos/logo.png')
  }
}
</script>

<style>

.menuContainer {
  height: 100%; /* Ensure menuContainer fills out parent element (el-aside in App.vue) */
}

.el-row, .el-col, .el-menu-vertical {
  height: inherit; /* Ensure all menu-elements fill out parent element (menuContainer) */
}

.el-menu-vertical {
  border: none; /* Remove default border style */
}

.el-menu-item.is-active {
  background-color: rgba(115,40,83,1)!important; /* Adding extra highlight to active menu item */
}

</style>
