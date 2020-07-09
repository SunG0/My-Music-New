<template>
  <el-container class="app">
  <el-header class="header">My Music</el-header>
  <el-container>
    <el-aside width="200px" class="aside">
      <el-menu
      :default-active="$route.path" router>
      
      <el-menu-item index="/find">
        <i class="el-icon-search"></i>
        <span slot="title">发现音乐</span>
      </el-menu-item>
      <el-menu-item index="/newMusic">
        <i class="el-icon-tickets"></i>
        <span slot="title">最新音乐</span>
      </el-menu-item>
      <el-menu-item index="/newMv">
        <i class="el-icon-video-camera"></i>
        <span slot="title">最新MV</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
html,body{
  height: 100%;
}
.app{
  height: 100%;
}
.header{
  font-size: 26px;
  line-height: 60px;
  text-align: right;
  margin-right: 50px;
  background-color: #f9f9f9;
}
.aside{
  background-color: #f9f9f9;
}
</style>