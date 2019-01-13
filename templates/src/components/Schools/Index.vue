<template>
  <div class="sub-container">
    <header class="header-bar">
      <el-form inline size="small">
        <el-form-item label="学校名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="地区">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search">查询</el-button>
        </el-form-item>
      </el-form>
    </header>
    <div class="sub-container-box">
      <el-table border style="width: 100%" stripe :data="schools" size="mini">
        <el-table-column label="学校名称" prop="title"></el-table-column>
        <el-table-column label="省份" prop="province"></el-table-column>
        <el-table-column label="市" prop="city"></el-table-column>
        <el-table-column label="学校代码" prop="code"></el-table-column>
        <el-table-column label="类别" prop="grade"></el-table-column>
        <el-table-column label="操作" width="150px">
          <template slot-scope="scope">
            <el-button type="parimary" size="mini">编辑</el-button>
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import {getSchools} from '../../apis.js';
export default {
  data() {
    return {
      schools: []
    }
  },
  methods: {
    getSchoolsAction() {
      getSchools().then(schools => {
        this.schools = schools
      })
    }
  },
  created() {
    this.getSchoolsAction()
  }
}
</script>

