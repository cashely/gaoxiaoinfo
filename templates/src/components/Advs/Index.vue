<template>
  <div class="sub-container">
    <header class="header-bar">
      <el-form inline size="small">
        <el-form-item>
          <el-button type="primary" @click="showDialogAction" icon="el-icon-plus">添加</el-button>
        </el-form-item>
        <el-form-item label="广告区">
          <el-select v-model="conditions.type" placeholder="全部">
            <el-option lable="全部" value="">全部</el-option>
            <el-option lable="A" value="A">A</el-option>
            <el-option lable="B" value="B">B</el-option>
            <el-option lable="C" value="C">C</el-option>
            <el-option lable="D" value="D">D</el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchAction" icon="el-icon-search">搜索</el-button>
        </el-form-item>
      </el-form>
    </header>
    <div class="sub-container-box">
      <el-table border size="small" stripe style="width: 100%" :data="advs">
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="type" label="广告区" width="80" align="center"></el-table-column>
        <el-table-column label="状态" width="100" align="center">
          <template slot-scope="scope">
            <el-tag :type="scope.row.statu ? 'success' : 'danger'">{{scope.row.statu ? '开启' : '关闭'}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" width="100">
          <template slot-scope="scope">
            {{_m(scope.row.createdAt).format('YYYY-MM-DD')}}
          </template>
        </el-table-column>
        <el-table-column label="开始日期" width="100">
          <template slot-scope="scope">
            {{_m(scope.row.publishDate).format('YYYY-MM-DD')}}
          </template>
        </el-table-column>
        <el-table-column label="结束日期" width="100">
          <template slot-scope="scope">
            {{_m(scope.row.endDate).format('YYYY-MM-DD')}}
          </template>
        </el-table-column>
        <el-table-column prop="description" label="备注" width="200"></el-table-column>
        <el-table-column label="操作" width="100" align="center">
          <template slot-scope="scope">
            <el-button icon="el-icon-info" type="danger" size="mini" @click="deleteAdvByIdAction">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <AdvForm v-model="showForm" @success="getAdvsByTypeAction"></AdvForm>
  </div>
</template>
<script>
import AdvForm from './AdvForm'
import {getAdvsByType, deleteAdvById} from '../../apis'
import _m from 'moment'
export default {
  components: {
    AdvForm
  },
  data() {
    return {
      showDialog: false,
      showForm: false,
      advs: [],
      conditions: {
        type: ''
      }
    }
  },
  methods: {
    showDialogAction() {
      this.showForm = true
    },
    getAdvsByTypeAction() {
      getAdvsByType({
        type: this.conditions.type
      }).then(advs => {
        this.advs = advs
      })
    },
    searchAction() {
      this.getAdvsByTypeAction();
    },
    _m,
    deleteAdvByIdAction(id) {
      this.$confirm('您确定要删除这条数据吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteAdvById(id).then(res => {
        this.$messge({
            type: 'success',
            message: '删除成功'
          })
        }).catch(error => {
          this.$messge({
            type: 'error',
            message: '操作失败'
          })
        })
      })
    }
  },
  created() {
    this.getAdvsByTypeAction()
  }
}
</script>

