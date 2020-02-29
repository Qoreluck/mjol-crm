<template>
  <el-card class="card" shadow="hover">
    <div slot="header" class="header clearfix">
      <AppUser :user="card.user" :date="card.createDate"/>
    </div>
    <div class="item">
      {{ card.text }}
    </div>
     <hr>
     <div class="comments">
         <AppMessageComment :card="card"/>
     </div>
  </el-card>
</template>

<script>
import AppUser from '@/components/base/feed/ui/User'
import AppMessageComment from '@/components/base/feed/MessageComment'
export default {
    components:{AppUser,AppMessageComment},
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

.date {
  font-weight: bold;
}

.item{
    display: flex;
    justify-content: space-between;
}

.fav{
    margin: 10px 0;
}
.comments{
    margin-top: 10px;
}
hr{
    margin: 15px 0 5px 0; 
}
</style>
