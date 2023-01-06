<template>
  <div class="home">
    <el-container>
      <el-header height="80px">
        <div>
          <el-row :gutter="20">
            <el-col :span="4"
              ><img class="logo" src="../assets/logo.png"
            /></el-col>
            <el-col :span="16"><h2>后台系统</h2></el-col>
            <!-- <el-col :span="4"><span>Tina</span></el-col> -->
            <el-col class="btn-text" :span="4">
              <el-button>Tina</el-button></el-col
            >
          </el-row>

          <h2>后台系统</h2>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            router
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            :default-active="route.path"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item
              v-for="item in list"
              :key="item.path"
              :index="item.path"
            >
              <el-icon><icon-menu /></el-icon>
              <span>{{ item.meta.title }}</span>
            </el-menu-item>
            <!-- <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>订单列表</span>
            </el-menu-item>
            <el-menu-item index="3">
              <el-icon><icon-menu /></el-icon>
              <span>角色列表</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><icon-menu /></el-icon>
              <span>权限列表</span>
            </el-menu-item> -->
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const list = router.getRoutes().filter((v) => v.meta.isShow)
console.log(route, 'router')
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
// export default defineComponent({
//   name: 'HomeView',
//   components: {
//     // HelloWorld,
//   },
// })
</script>
<style lang="scss" scoped>
.logo {
  height: 80px;
}
h2 {
  text-align: center;
  color: #ffffff;
  line-height: 80px;
}
.btn-text {
  line-height: 80px;
  text-align: right;
  .el-button--text {
    color: #ffffff;
  }
}
.el-header {
  background-color: #545c64;
}
.el-aside {
  .el-menu {
    height: calc(100vh - 80px);
  }
}
.el-main {
  height: calc(100vh - 80px);
  overflow: auto;
}
</style>
