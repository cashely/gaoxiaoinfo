<template>
  <div class="sub-container">
    <header class="header-bar">
      <el-form inline size="small">
        <el-form-item label="学校名称">
          <el-input v-model="title"></el-input>
        </el-form-item>
        <el-form-item label="省区">
          <el-input v-model="province"></el-input>
        </el-form-item>
        <el-form-item label="城市">
          <el-input v-model="city"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="searchAction()">查询</el-button>
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
    <div class="block">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
         @current-change="currentChangeAction"
         :page-size="limit"
        >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import {getSchools ,getSchoolsPageInfo} from '../../apis.js';
export default {
  data() {
    return {
      schools: [],
      title: '',
      province: '',
      city: '',
      total: 0,
      limit: 20,
      page: 1
    }
  },
  methods: {
    getSchoolsAction() {
      getSchools({
        offset:(this.page-1)*this.limit,
        _k:this.title,
        province:this.province,
        city:this.city
      }).then(schools => {
        this.schools = schools
      })
    },
    searchAction() {
      this.getSchoolsAction();
      this.getSchoolsPageInfoAction()
    },
    getSchoolsPageInfoAction() {
      getSchoolsPageInfo({
        _k:this.title,
        province:this.province,
        city:this.city
      }).then(count => {
        this.total = count
      })
    },
    currentChangeAction(page) {
      this.page = page;
      this.getSchoolsAction()
    }
  },
  created() {
    this.getSchoolsAction();
    this.getSchoolsPageInfoAction()
  }
}
</script>

