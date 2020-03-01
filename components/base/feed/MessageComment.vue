<template>
  <div class="wrap">
    <el-card class="comment"  v-for="comment in card.comments" :key="comment">
    <div class="header"  slot="header"> 
      <app-user :user="comment"/>
    </div>
    <div class="message" >
      <span v-for='comment in card.comments' :key="comment.text">{{comment.text}}</span>
    </div>
  </el-card>
  </div>
</template>

<script>
import AppUser from '@/components/base/feed/ui/User'
export default {
    components:{
        AppUser
    },
    props: {
        card:{
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.comment{
  margin-bottom: 10px;
  background: #f3f3f3;
}
</style>
