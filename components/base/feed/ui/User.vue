<template>
  <div class="user">
      <el-avatar :size="40" :src="user.avatarURL"></el-avatar>
      <span class="name">{{ user.name }}</span>
    </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.user {
  display: flex;
  align-items: center;
}
.title {
  font-weight: bold;
}
.name {
  margin-left: 8px;
  font-size: 18px;
}

.date {
  font-weight: bold;
}
</style>
