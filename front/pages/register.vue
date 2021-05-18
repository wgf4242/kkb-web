<template>
  <div class="login-container">
    <el-form
      class="login-form"
      label-width="100px"
      :model="form"
      :rules="rules"
      ref="registerForm"
    >
      <div class="title-container">
        <img src="/logo.png" alt="" />
      </div>

      <el-form-item props="email" label="邮箱">
        <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>

      <el-form-item props="captcha" label="验证码" class="captcha-container">
        <div class="captcha">
          <img :src="code.captcha" alt="" @click="resetCaptcha" />
        </div>
        <el-input v-model="form.captcha" placeholder="请输入验证码"></el-input>
      </el-form-item>

      <el-form-item props="nickname" label="昵称">
        <el-input v-model="form.nickname" placeholder="请输入昵称"></el-input>
      </el-form-item>

      <el-form-item props="passwd" label="密码">
        <el-input v-model="form.passwd" placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-form-item props="repasswd" label="再次输入密码">
        <el-input
          v-model="form.repasswd"
          placeholder="请输入再次输入密码"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <!-- <button @click.prevent=""></button>  普通的直接prevent阻止就行 -->
        <el-button type="primary" @click.native.prevent="handleRegister"
          >注册</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  methods: {
    resetCaptcha() {
      this.code.captcha = "/api/captcha?_t" + new Date().getTime();
    },
    handleRegister() {
      this.$refs.registerForm.validate(async valid => {
        if (valid) {
          console.log("校验成功");
          // @todo 发送注册请求
          let obj = {
            email: this.form.email,
            nickname: this.form.nickname,
            passwd: md5(this.form.passwd),
            captcha: this.form.captcha
          };
          let ret = await this.$http.post("/user/register", obj);
          // code = 0 就是成功
          if (ret.code == 0) {
            this.$alert("注册成功", "成功", {
              confirmButtonText: "去登录",
              callback: () => {
                this.$router.push("/login");
              }
            });
          } else {
            this.$message.error(ret.message);
          }
        }
      });
    }
  },
  data() {
    return {
      form: {
        email: "",
        nickname: "",
        passwd: "",
        repasswd: "",
        captcha: ""
      },
      rules: {
        email: [
          { required: true, message: "请输入邮箱" },
          { type: "email", message: "请输入正确的邮箱格式" }
        ],
        captcha: [{ required: true, message: "请输入验证码" }],
        nickname: [{ required: true, message: "请输入昵称" }],
        passwd: [
          {
            required: true,
            patter: /^[\w_-]{6,12}$/g,
            message: "请输入6~12位密码"
          }
        ],

        repasswd: [
          {
            required: true,
            message: "请再次输入位密码"
          },
          {
            validator: (rule, value, callback) => {
              if (value !== this.form.passwd) {
                callback(new Error("两次密码不一致"));
              }
              callback();
            }
          }
        ]
      },
      code: {
        captcha: "/api/captcha"
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
