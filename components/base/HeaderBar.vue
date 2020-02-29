<template>
  <el-menu
    router
    :default-active="$route.path"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    class="menu"
  >
    <el-menu-item index="/mjol">
        <span class="logo">Mjol</span>
    </el-menu-item>
    <el-menu-item index="/">Живая лента</el-menu-item>
    <el-menu-item index="/tasks">Задачи</el-menu-item>
    <el-menu-item index="/create">Новая задача</el-menu-item>
    <el-menu-item index="/analys">Анализ</el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
.menu {
  padding: 0 20px;
}
.logo{
    text-transform: uppercase;
    font-weight: bold;

}
</style>
