<template>
  <div class="sub-container">
    <header class="header-bar">
      <el-form inline size="small">
        <el-form-item label="文章标题">
          <el-input placeholder="" v-model="title"></el-input>
        </el-form-item>
        <el-form-item label="所属省份">
          <el-input v-model="province" placeholder="请选择">
          </el-input>
        </el-form-item>
        <el-form-item label="招聘地点">
          <el-input placeholder="" v-model="address"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="searchAction()">查询</el-button>
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
         :page-size="limit"
        >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import {getArtilesData, getArticlePageInfo, getProvinces} from '../../apis'
export default {
  data() {
    return {
      pages: [],
      title: '',
      provinces: [],
      province: '',
      address: '',
      course: '',
      school: '',
      total: 0,
      page: 1,
      limit: 20
    }
  },
  computed: {
      computedProvinces() {
        return this.provinces.filter(province => province.type === 0).map(province => {
          province.children = this.provinces.filter(p => p.parentId === province._id && p.type !== 0);
          return province;
        })
      },
      computedUnType() {
        return this.provinces.filter(province => (province.type !== 0 ) && !province.parentId)
      }
    },
  methods: {
    getArtilesDataAction() {
      getArtilesData({
        offset: (this.page - 1) * 20,
        _k:this.title,
        province: this.province,
        address:this.address
      }).then(res => {
        this.pages = res.data
      })
    },
    getProvincesAction() {
        getProvinces().then(provinces => {
          this.provinces = provinces
        })
      },
    searchAction() {
      this.getArtilesDataAction();
      this.getArticlePageInfoAction()
    },
      getProvincesAction() {
        getProvinces().then(provinces => {
          this.provinces = provinces
        })
      },
    getArticlePageInfoAction() {
      getArticlePageInfo({
        _k:this.title,
        province:this.province,
        address:this.address
      }).then(count => {
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
    this.getProvincesAction()
  }
}
</script>
