<template>
  <div class="sub-container flex">
    <header class="header-bar">
      <el-form inline size="small">
        <el-form-item label="标题">
          <el-input style="width: 500px" v-model="fields.title"></el-input>
        </el-form-item>
        <el-form-item label="发布时间">
          <el-date-picker v-model="fields.publishDate"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="工作地点">
          <el-select v-model="fields.address">
            <el-option>空</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="截止日期">
          <el-date-picker v-model="fields.endDate"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="关键词">
          <el-input v-model="fields.keywords"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="fields.description"></el-input>
        </el-form-item>
        <el-form-item label="所属地区">
          <el-select v-model="fields.province">
            <el-option>无</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学校类型">
          <el-select v-model="fields.schoolType">
            <el-option>无</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="招聘人数">
          <el-input v-model="fields.peoples"></el-input>
        </el-form-item>
        <el-form-item label="应聘方式">
          <el-input v-model="fields.registerType"></el-input>
        </el-form-item>
        <el-form-item label="所属学科">
          <el-select v-model="fields.courseType">
            <el-option>无</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="查看次数">
          <el-input v-model="fields.views"></el-input>
        </el-form-item>
      </el-form>
    </header>
    <div class="sub-container-box">
      <quillEditor
      style="height: 100%"
        v-model="fields.content"
        ref="contentQuillEditor"
        :options="editorOptions"
      ></quillEditor>
    </div>
    <footer class="sub-footer">
      <el-button type="primary" size="small">保存</el-button>
    </footer>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import {getArtilesDetail} from '../../apis'
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      fields: {
        content: '',
        title: '',
        publishDate: '',
        address: '',
        endDate: '',
        keywords: '',
        description: '',
        province: '',
        schollType: '',
        peoples: '',
        registerType: '',
        courseType: '',
        views: ''
      },
      editorOptions: {

      },
      pid: this.$route.params.id
    }
  },
  methods: {
    getArtilesDetailAction() {
      getArtilesDetail(this.pid)
      .then(res => {
        this.fields = Object.assign({}, this.fields, res.data)
      })
    }
  },
  created() {
    this.pid && this.getArtilesDetailAction()
  }
}
</script>

