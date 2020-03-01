<template>
  <el-card class="card" shadow="hover">
    <el-form
      label-position="top"
      @submit.native.prevent="onSubmit"
      :model="controls"
      :rules="rules"
      ref="form"
    >
      <h2 class="title">Регистрация в системе</h2>
      <el-form-item label="Логин" prop="login">
        <el-input v-model.trim="controls.login" />
      </el-form-item>
      <el-form-item label="Пароль" prop="password">
        <el-input v-model.trim="controls.password" type="password" />
      </el-form-item>
      <el-form-item label="Подтверждение пароля" prop="checkPass">
        <el-input
          type="password"
          v-model="controls.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="Введите ваше имя" prop="name">
        <el-input
          type="text"
          v-model="controls.name"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="Загрузите аватар" prop="avatar">
        <el-upload
          action=""
          list-type="picture-card"
          :on-change="handleImageChange"
          :on-preview="handlePictureCardPreview"
          :limit="1"
          ref="upload"
        >
          <i class="el-icon-plus"></i>
        </el-upload>

        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <div class="buttons">
          <el-button :loading="loading" native-type="submit" type="info" plain
            >Зарегистрироваться</el-button
          >
          <el-link type="info" @click.prevent="$emit('switchForm')"
            >Уже есть аккаунт</el-link
          >
        </div>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Введите пароль"));
      } else {
        if (this.controls.checkPass !== "") {
          this.$refs.form.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Введите пароль повторно"));
      } else if (value !== this.controls.password) {
        callback(new Error("Пароли не совпадают"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      dialogImageUrl: "",
      dialogVisible: false,
      image: "",
      controls: {
        login: "",
        password: "",
        checkPass: "",
        name: ""
      },
      rules: {
        login: [
          {
            required: true,
            message: "Введите логин",
            trigger: "blur"
          },
            { min: 3, max: 10, message: 'Длинна должна быть более 3 и менее 10 символов', trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, required: true, trigger: "blur" }
        ],
        checkPass: [
          { validator: validatePass2, required: true, trigger: "blur" }
        ],
        name:[ 
            {required: true,
            message: "Введите ваше имя",
            trigger: "blur"}
            ,{ min: 3, max: 25, message: 'Длинна должна быть более 3 и менее 25 символов', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          const formData = {
            login: this.controls.login,
            password: this.controls.password,
            name: this.controls.name,
            image: this.image
          };
          try {
            await this.$store.dispatch("auth/createUser", formData);
            this.$message.success("Пользователь создан");
            this.controls.login = this.controls.password = this.image = this.controls.checkPass = this.controls.name =  "";
            this.$refs.upload.clearFiles()
            this.$emit('switchForm')
            this.loading = false;
          } catch (e) {
          } finally {
            this.loading = false;
          }
        } else {
          return false;
        }
      });
    },
    handlePictureCardPreview(file, filename) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleImageChange(file, filename) {
      this.image = file.raw;
    }
  },
  async asyncData({ store }) {
    const users = await store.dispatch("auth/fetchUsers");
    return { users };
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
  flex-flow: row wrap;
  width: 100%;
}
</style>
