<template>
  <div class="sub-container">
    <header class="header-bar">
      <el-form inline size="small">
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">添加</el-button>
        </el-form-item>
      </el-form>
    </header>
    <div class="sub-container-box">
      <el-button size="small" v-for="i in 100" :key="i">广东高校</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>

