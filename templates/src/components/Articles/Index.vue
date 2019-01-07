<template>
  <div class="sub-container">
    <header class="search-bar">
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
      <el-table border size="small" stripe style="width: 100%" :data="pages">
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="publishDate" label="发布日期" width="150"></el-table-column>
        <el-table-column prop="address" label="招聘地点" width="150"></el-table-column>
        <el-table-column prop="endDate" label="截止日期" width="150"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import {getArtilesData} from '../../apis'
export default {
  data() {
    return {
      pages: []
    }
  },
  methods: {
    getArtilesDataAction() {
      getArtilesData().then(res => {
        this.pages = res
      })
    }
  },
  created() {
    this.getArtilesDataAction()
  }
}
</script>

<style lang="less">
.search-bar {
  padding: 10px;
  text-align: left;
}
.sub-container-box {
  padding: 0 10px;
}
</style>
