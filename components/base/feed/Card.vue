<template>
  <el-card shadow="hover" class="card">
    <div slot="header" class="header clearfix">
      <AppUser :user="card.creator" />
      <div class="tags">
        <el-tag type="success">{{ card.stateManager }}</el-tag>
        <el-tag type="danger">{{ card.status }}</el-tag>
      </div>
      <small class="date">{{ card.createDate }}</small>
      <el-badge value="new" />
    </div>
    <div class="main-head">
      <div class="title">{{ card.title }}</div>
      <div class="assigner">
        <span class="assigner__text">Ответсвенный:</span>
        <AppUser :user="card.assigner" />
        <div class="about">
          <small>{{ card.assigner.about }}</small>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="deadline">выполнить до: 29.02.2020</div>
      <div class="content">
        <div class="description">
          <small v-html="card.description">
            
          </small>
        </div>
        <el-button class="button">Подробнее</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
import AppUser from "@/components/base/feed/ui/User";
export default {
  components: { AppUser },
  props: {
    card: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 600px;
  margin-bottom: 10px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
.assigner {
  display: flex;
  flex-direction: column;
  &__text {
    margin-bottom: 5px;
    font-weight: 600;
  }
}
.about {
  align-self: flex-end;
}
.tags {
  margin-left: 5px;
}
.category {
  color: #409eff;
}
.content {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
.button {
  align-self: flex-end;
}
.date {
  font-weight: bold;
}

.deadline {
 font-size: 13px;
}

.fav {
  margin-top: 10px;
}
</style>
