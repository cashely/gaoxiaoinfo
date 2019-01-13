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
      <div class="tag-box">
        <el-button size="small" v-for="school in schools" :key="school._id" class="tag">{{school.title}}</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import {getHighs} from '../../apis.js';
export default {
  data() {
    return {
      schools: []
    }
  },
  methods: {
    getSchoolsAction() {
      getHighs().then(schools => {
        this.schools = schools
      })
    }
  },
  created() {
    this.getSchoolsAction()
  }
}
</script>

