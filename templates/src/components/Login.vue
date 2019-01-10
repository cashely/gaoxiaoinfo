<template>
  <div class="login-box" v-show="showlogin">
    <h3>logo</h3>
    <el-input v-model="username" placeholder="请输入内容" type="text"></el-input>
    <el-input v-model="password" placeholder="请输入密码" type="password" class="in-password"></el-input>
    <span class="f-password">忘记密码？</span>
    <el-row>
      <el-button type="submit">登录</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showlogin: true,
        username: '',
        password: ''
      }
    }
  }

</script>

<style>
  .login-box {
    width: 300px;
    margin: 100px auto;
    padding: 20px 10px;
  }

  .el-input {
    margin: 10px auto;
  }

  .f-password {
    cursor: pointer;
    color: #f19149;
    font-size: 0.75rem;
    margin-left: 5px;
    float: left;
  }

  .el-button {
    background: #7cd2f8;
    width: 100%;
    color: #fff;
    margin: 10px auto;
  }

</style>
