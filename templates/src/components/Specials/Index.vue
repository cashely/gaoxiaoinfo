<template>
  <div class="sub-container">
    <header class="header-bar">
      <el-form inline size="small">
        <el-form-item label="关键字">
          <el-input placeholder="湖北、湖南..."></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search">查询</el-button>
        </el-form-item>
      </el-form>
    </header>
    <div class="sub-container-box">
      <el-table border size="small" stripe style="width: 100%" :data="specials">
        <el-table-column prop="school" label="学校"></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="publishDate" label="发布日期" width="150"></el-table-column>
        <el-table-column prop="address" label="招聘地点" width="150"></el-table-column>
        <el-table-column prop="endDate" label="截止日期" width="150"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import {getSpecials} from '../../apis'
export default {
  data() {
    return {
      specials: []
    }
  },
  methods: {
    getSpecialsAction() {
      getSpecials().then(res => {
        this.specials = res
      })
    }
  },
  created() {
    this.getSpecialsAction()
  }
}
</script>
