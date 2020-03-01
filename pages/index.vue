<template>
  <div>
    <div class="item" v-for="card in feed"  :key="card.id">
      <app-card  :card="card" v-if="card.type === 'task'" />
      <app-message :card="card" v-else />
    </div>
  </div>
</template>

<script>
import AppCard from "@/components/base/feed/Card";
import AppMessage from "@/components/base/feed/Message";
export default {
  components: {
    AppCard,
    AppMessage
  },
  data(){
    return{
      feed: []
    }
  },
  middleware:['auth'],
  async asyncData({store}){
    const tasks = await store.dispatch('tasks/fetchTasks')
    const messages = await store.dispatch('feedMessages/fetchMessages')
    return {tasks, messages}
  },
  mounted(){
    this.feed.push(...this.tasks,...this.messages)
    this.feed.sort(() => {
      this.feed.map(e => e.createDate)
    })
  }
};
</script>

<style></style>
