<template>
  <el-card class="card" shadow="hover">
    <el-form
      @submit.native.prevent="onSubmit"
      :model="controls"
      :rules="rules"
      ref="form"
    >
      <h2 class="title">Вход в систему</h2>
      <el-form-item label="Логин" prop="login">
        <el-input v-model.trim="controls.login" />
      </el-form-item>
      <el-form-item label="Пароль" prop="password">
        <el-input v-model.trim="controls.password" type="password" />
      </el-form-item>
      <el-form-item>
        <div class="buttons">
          <el-button :loading="loading" native-type="submit" type="info" plain
            >Войти</el-button
          >
          <el-link type="info" @click.prevent="$emit('switchForm')">Регистрация</el-link>
        </div>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    controls: {
      login: "",
      password: ""
    },
    rules: {
      login: [
        {
          required: true,
          message: "Введите логин",
          trigger: "blur"
        }
      ],
      password: [
        {
          required: true,
          message: "Введите пароль",
          trigger: "blur"
        },
        {
          min: 6,
          message: "Пароль должен быть не менее 6 символов",
          trigger: "blur"
        }
      ]
    }
  }),
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          try {
            const formData = {
              login: this.controls.login,
              password: this.controls.password
            }
            await this.$store.dispatch('auth/login', formData)
            this.$router.push('/')
          } catch (e) {
            throw(e)
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  background: #272727;
  border-color: #292929;
  max-width: 500px;
  margin: 0 auto;
}
.title {
  color: rgb(230, 230, 230);
}
.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
