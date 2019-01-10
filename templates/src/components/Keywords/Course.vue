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
      <el-button size="small" v-for="course in courses" :key="course._id">{{course.title}}</el-button>
    </div>
  </div>
</template>
<script>
import {getCourses} from '../../apis.js';
export default {
  data() {
    return {
      courses: []
    }
  },
  methods: {
    getCoursesAction() {
      getCourses().then(courses => {
        this.courses = courses
      })
    }
  },
  created() {
    this.getCoursesAction()
  }
}
</script>
