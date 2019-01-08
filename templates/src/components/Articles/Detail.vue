<template>
  <div class="sub-container">
    <header class="header-bar">
      <el-form inline size="small">
        <el-form-item label="标题">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="发布时间">
          <el-date-picker
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="工作地点">
          <el-select>
            <el-option>空</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="截止日期">
          <el-date-picker
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="关键词">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="所属地区">
          <el-select>
            <el-option>无</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学校类型">
          <el-select>
            <el-option>无</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="招聘人数">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="应聘方式">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="所属学科">
          <el-select>
            <el-option>无</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="查看次数">
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </header>
    <div class="sub-container-box">
      <quillEditor
        v-model="content"
        ref="contentQuillEditor"
        :options="editorOptions"
      ></quillEditor>
    </div>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      fields: {
        content: ''
      },
      editorOptions: {

      }
    }
  }
}
</script>

