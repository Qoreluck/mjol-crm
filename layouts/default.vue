<template>
 <el-container>
  <el-header :style="{padding: '0'}">
    <app-header-bar/>
  </el-header>
  <el-container>
  <el-aside width="200px">
    <Aside/>
  </el-aside>
  <el-main><nuxt/></el-main>
  </el-container>
</el-container>
</template>


<script>
import AppHeaderBar from '@/components/base/HeaderBar'
import Aside from '@/components/base/Aside'
export default {
  components:{
    AppHeaderBar,Aside
  }
}
</script>

