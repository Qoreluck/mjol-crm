<template>
  <el-container class="container">
    <el-main class="main">
      <nuxt />
    </el-main>
  </el-container>
</template>


<style lang="scss" scoped>
.container{
    width: 100%;
    background: #222;
    min-height: 100vh;
}
.main{
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../assets/images/bg.jpg') center no-repeat;
    background-size: contain; 
}
</style>
