<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active="home"
        class="el-menu-vertical"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router="true">
        <el-menu-item index="home"><i class="el-icon-arrow-right"></i>Home</el-menu-item>
        <template v-for="(option, index) in options">
          <el-menu-item :index="(option).toLowerCase().replace(' ', '')" :key="option"><i class="el-icon-arrow-right"></i>{{option}}</el-menu-item>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      options: ['Collection', 'Analysis', 'Debug Info', 'Topic Model']
    }
  },
  methods: {

  }
}
</script>

<style>

a {
  color: black;
}

.el-menu-vertical {
  height: 100vh;
  border: none;
}


</style>
