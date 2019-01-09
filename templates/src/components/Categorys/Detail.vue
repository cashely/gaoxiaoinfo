<template>
  <div class="sub-container">
    <div class="sub-container-box">
      <el-form>
        <el-form-item label="标题">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="所属分类">
          <Menus v-model="fields.nav"></Menus>
        </el-form-item>
        <el-form-item label="权重">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <footer class="sub-footer">
      <el-button type="primary" size="small">保存</el-button>
    </footer>
  </div>
</template>
<script>
import Menus from '../Menus'
export default {
  components: {
    Menus
  },
  data() {
    return {
      navs: [],
      fields: {
        nav: null
      }
    }
  }
}
</script>

