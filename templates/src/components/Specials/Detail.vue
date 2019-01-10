<template>
  <div class="sub-container flex">
    <header class="header-bar">
      <el-form inline size="small">
        <el-form-item label="标题">
          <el-input v-model="fields.title"></el-input>
        </el-form-item>
        <el-form-item label="学校">
          <el-input v-model="fields.school"></el-input>
        </el-form-item>
        <el-form-item label="工作地点">
          <el-input v-model="fields.address"></el-input>
        </el-form-item>
        <el-form-item label="发布日期">
          <el-date-picker v-model="fields.publishDate"></el-date-picker>
        </el-form-item>
        <el-form-item label="截止日期">
          <el-date-picker v-model="fields.endDate"></el-date-picker>
        </el-form-item>
      </el-form>
    </header>
    <div class="sub-container-box">
      <quillEditor style="height: 100%" v-model="fields.content" ref="contentQuillEditor" :options="editorOptions"
          class="w-text"></quillEditor>
    </div>
  </div>
</template>
<script>
import {
  quillEditor
} from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import {getSpecialById} from '../../apis.js';
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      fields: {
        content: '',
        title: '',
        school: '',
        address: '',
        publishDate: '',
        endDate: ''
      },
      editorOptions: {},
      id: this.$route.params.id
    }
  },
  methods: {
    getSpecialByIdAction() {
      getSpecialById(this.id).then(res => {
        this.fields = Object.assign({}, this.fields, res)
      })
    }
  },
  created() {
    this.id && this.getSpecialByIdAction()
  }
}
</script>

