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
      <el-table @row-click="routerDetailAction" border size="small" stripe style="width: 100%" :data="pages">
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="publishDate" label="发布日期" width="150"></el-table-column>
        <el-table-column prop="address" label="招聘地点" width="150"></el-table-column>
        <el-table-column prop="endDate" label="截止日期" width="150"></el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
         @current-change="currentChangeAction"
        >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import {getArtilesData, getArticlePageInfo} from '../../apis'
export default {
  data() {
    return {
      pages: [],
      total: 0,
      page: 1,
      limit: 20
    }
  },
  methods: {
    getArtilesDataAction() {
      getArtilesData({
        offset: (this.page - 1) * 20
      }).then(res => {
        this.pages = res.data
      })
    },
    getArticlePageInfoAction() {
      getArticlePageInfo().then(count => {
        this.total = count
      })
    },
    routerDetailAction(row, event, column) {
      this.$router.push({
        path: `/index/articles/${row._id}`
      })
    },
    currentChangeAction(page) {
      this.page = page;
      this.getArtilesDataAction();
    }
  },
  created() {
    this.getArtilesDataAction()
    this.getArticlePageInfoAction()
  }
}
</script>
