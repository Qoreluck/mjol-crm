<template>
  <div class="wrap">
    <AppLoginForm @switchForm="switchForm" v-if="login" />
    <AppRegForm @switchForm="switchForm" v-else />
  </div>
</template>

<script>
import AppLoginForm from "@/components/start/LoginForm";
import AppRegForm from "@/components/start/RegForm";
export default {
  components: { AppLoginForm, AppRegForm },
  layout: "start",
  data: () => ({
    login: true
  }),
  methods: {
    switchForm() {
      this.login = !this.login;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
}
</style>
