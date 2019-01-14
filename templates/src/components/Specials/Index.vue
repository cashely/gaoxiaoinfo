<template>
  <div class="sub-container">
    <header class="header-bar">
      <el-form inline size="small">
        <el-form-item label="省区">
          <el-input placeholder="湖北、湖南..." v-model="title"></el-input>
        </el-form-item>
        <el-form-item label="招聘地点">
          <el-input placeholder="" v-model="address"></el-input>
        </el-form-item>
        <el-form-item label="学校">
          <el-input placeholder="" v-model="school"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="searchAction()">查询</el-button>
        </el-form-item>
      </el-form>
    </header>
    <div class="sub-container-box">
      <el-table border size="small" stripe style="width: 100%" :data="specials"  @row-click="routerDetailAction">
        <el-table-column prop="school" label="学校" width="300"></el-table-column>
        <el-table-column prop="title" label="标题">
          <template slot-scope="scope">
            <el-tag type="danger" size="mini">专题</el-tag> {{scope.row.title}}
          </template>
        </el-table-column>
        <el-table-column prop="publishDate" label="发布日期" width="100"></el-table-column>
        <el-table-column prop="address" label="招聘地点" width="100"></el-table-column>
        <el-table-column prop="endDate" label="截止日期" width="100"></el-table-column>
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
import {getSpecials, getSpecialPageInfo} from '../../apis'
export default {
  data() {
    return {
      specials: [],
      total: 0,
      title: '',
      address: '',
      school: '',
      limit: 20,
      page: 1
    }
  },
  methods: {
    getSpecialsAction() {
      getSpecials({
        offset:(this.page-1)*this.limit,
        _k:this.title,
        address:this.address,
        school:this.school
      }).then(res => {
        this.specials = res
      })
    },
    searchAction() {
      this.getSpecialsAction();
      this.getSpecialPageInfoAction()
    },
    getSpecialPageInfoAction() {
      getSpecialPageInfo({
        _k:this.title,
        address:this.address,
        shool:this.school
      }).then(count => {
        this.total = count
      })
    },
    currentChangeAction(page) {
      this.page = page;
      this.getSpecialsAction()
    },
    routerDetailAction(row) {
      this.$router.push({
        path: `/index/special/${row._id}`
      })
    }
  },
  created() {
    this.getSpecialsAction();
    this.getSpecialPageInfoAction()
  }
}
</script>
