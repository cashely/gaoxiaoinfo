<template>
  <div class="sub-container">
    <header class="header-bar">
      
    </header>
    <div class="sub-container-box">
      <el-table
        style="width:100%"
        :data="navs"
        border
        stripe
        size="small"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-table style="width: 100%" size="small" border stripe :data="props.row.children">
              <el-table-column label="菜单标题" prop="title"></el-table-column>
              <el-table-column label="别名" prop="nick"></el-table-column>
              <el-table-column label="操作" width="200" align="center">
                <template slot-scope="scope">
                  <el-button type="primary" size="mini">编辑</el-button>
                  <el-button type="danger" size="mini">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column label="菜单标题" prop="title"></el-table-column>
        <el-table-column label="别名" prop="nick"></el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="mini">编辑</el-button>
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import {getNavs} from '../../apis.js';
export default {
  data() {
    return {
      navs: []
    }
  },
  methods: {
    getNavsAction() {
      getNavs().then(navs => {
        this.navs = navs
      })
    }
  },
  created() {
    this.getNavsAction()
  }
}
</script>

