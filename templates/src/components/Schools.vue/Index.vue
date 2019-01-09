<template>
  <div class="sub-container">
    <header class="header-bar">
      <el-form inline size="small">
        <el-form-item label="学校名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="地区">
          <el-select></el-select>
        </el-form-item>
        <el-form-item label="学校名称">
          <el-button type="primary" icon="el-icon-search">查询</el-button>
        </el-form-item>
      </el-form>
    </header>
    <div class="sub-container-box">
      <el-table border style="width: 100%" stripe :data="schools">
        <el-table-colunm label="学校名称" prop="title"></el-table-colunm>
        <el-table-colunm label="地区" prop="province"></el-table-colunm>
        <el-table-colunm label="操作">
          <template slot-scope="scope">
            <el-button type="parimary">编辑</el-button>
            <el-button type="danger">删除</el-button>
          </template>
        </el-table-colunm>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      schools: []
    }
  }
}
</script>

