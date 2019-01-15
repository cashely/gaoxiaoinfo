<template>
  <div class="sub-container">
    <div class="sub-container-box">
      <el-form label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="fields.title"></el-input>
        </el-form-item>
        <el-form-item label="固定链接">
          <el-input v-model="fields.url"></el-input>
        </el-form-item>
        <el-form-item label="所属分类">
          <Menus v-model="fields.parentId"></Menus>
        </el-form-item>
        <el-form-item label="权重">
          <el-input v-model="fields.rank"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="fields.statu">
            <el-radio :label="1">开启</el-radio>
            <el-radio :label="0">关闭</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" v-model="fields.description"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <footer class="sub-footer">
      <el-button type="primary" size="small" @click="saveAction">保存</el-button>
    </footer>
  </div>
</template>
<script>
import Menus from '../Menus'
import {updateNavById, getNavById} from '../../apis'
export default {
  components: {
    Menus
  },
  data() {
    return {
      navs: [],
      id: this.$route.params.id,
      fields: {
        parentId: null,
        title: '',
        description: '',
        rank: '',
        url: '',
        statu: 1
      }
    }
  },
  methods: {
    updateNavByIdAction() {
      updateNavById(this.id, this.fields).then(() => {
        this.$message({
          type: 'success',
          message: '操作成功'
        });
        this.$router.back()
      })
    },
    getNavByIdAction() {
      getNavById(this.id).then(nav => {
        this.fields = nav
      })
    },
    saveAction() {
      this.id && this.updateNavByIdAction()
    }
  },
  created() {
    this.id && this.getNavByIdAction()
  }
}
</script>

