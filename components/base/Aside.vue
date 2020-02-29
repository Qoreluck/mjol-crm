<template>
  <el-menu router :default-active="$route.path">
    <el-menu-item index="/profile">
      <el-avatar
        :size="40"
        src="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"
      ></el-avatar>
      <span class="name">HackFlex</span>
    </el-menu-item>
    <el-menu-item index="/messages">
      <i class="el-icon-message"></i>
      <span>Сообщения</span>
      <el-badge class="badge" :value="21" />
    </el-menu-item>

    <el-menu-item index="/favourite">
      <i class="el-icon-collection-tag"></i>

      <span class="item">Избранное</span>
      <el-badge class="badge" type="primary" :value="12" />
    </el-menu-item>

    <el-menu-item index="/calendar">
      <i class="el-icon-date"></i>
      <span>Календарь</span>
    </el-menu-item>
    <el-menu-item index="/logout">
      <i class="el-icon-switch-button"></i>
      <span>Выйти</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
.name {
  font-weight: bold;
  margin-left: 5px;
}
.badge{
    margin-left: 5px;
}
</style>
