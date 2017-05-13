<template>
  <div>
    <el-row class="tac">
      <el-col :span="4">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <router-link :to="{ path: 'village/economics' }"><el-menu-item index="1"><i class="el-icon-menu"></i>选项1</el-menu-item></router-link>
          <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'village',
    data() {
      return {

      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>