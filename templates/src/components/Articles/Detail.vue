<template>
  <div class="sub-container flex">
    <div class="editor">
      <div class="sub-container-box">
        <quillEditor style="height: 100%" v-model="fields.content" ref="contentQuillEditor" :options="editorOptions"></quillEditor>
      </div>
    </div>
    <div class="menu">
      <header class="header-bar">
        <el-form inline size="small">
          <el-form-item label="标题">
            <el-input v-model="fields.title" class="title"></el-input>
          </el-form-item>
          <el-form-item label="自定义属性">
            <el-checkbox v-model="fields.checked">置顶</el-checkbox>
            <el-input type="number" v-model="number"></el-input>
            <el-checkbox v-model="fields.checked">专题</el-checkbox>
          </el-form-item>
          <el-form-item label="发布时间">
            <el-date-picker v-model="fields.publishDate" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-form-item>
          <el-form-item label="工作地点" class="place">
            <el-select v-model="fields.address">
              <el-option>空</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="截止日期">
            <el-date-picker v-model="fields.endDate" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-form-item>
          <el-form-item label="学校类型">
            <el-select v-model="fields.schoolType" class="check_select">
              <el-option>无</el-option>
            </el-select>
          </el-form-item>
          <br>
          <el-form-item label="所属地区">
            <el-select v-model="fields.province" class="check_select">
              <el-option>无</el-option>
            </el-select>
          </el-form-item>
          <br>
          <el-form-item label="所属学科">
            <el-select v-model="fields.courseType" class="check_select">
              <el-option>无</el-option>
            </el-select>
          </el-form-item>
          <br>
          <el-form-item label="所属分类">
            <el-select v-model="fields.courseType" class="check_select">
              <el-option>无</el-option>
            </el-select>
          </el-form-item>
          <br>
          <el-form-item label="招聘人数">
            <el-input v-model="fields.peoples"></el-input>
          </el-form-item>
          <br>
          <el-form-item label="应聘方式">
            <el-input v-model="fields.registerType"></el-input>
          </el-form-item>
          <br>
          <el-form-item label="关键词">
            <el-input v-model="fields.keywords" class="keyword"></el-input>
          </el-form-item>
          <br>
          <el-form-item label="查看次数">
            <el-input v-model="fields.views"></el-input>
          </el-form-item>
          <br>
          <el-form-item label="描述">
            <el-input type="textarea" :row="2" placeholder="Please enter the content" v-model="textarea" class="enter_text"></el-input>
          </el-form-item>
        </el-form>
      </header>
    </div>
    <footer class="sub-footer">
      <el-button type="primary" size="small">保存</el-button>
    </footer>
  </div>
</template>
<script>
  import {
    quillEditor
  } from "vue-quill-editor"; //调用编辑器
  import "quill/dist/quill.core.css";
  import "quill/dist/quill.snow.css";
  import "quill/dist/quill.bubble.css";
  import {
    getArtilesDetail
  } from "../../apis";
  export default {
    components: {
      quillEditor
    },
    data() {
      return {
        fields: {
          content: "",
          title: "",
          publishDate: "",
          address: "",
          endDate: "",
          keywords: "",
          description: "",
          province: "",
          schollType: "",
          peoples: "",
          registerType: "",
          courseType: "",
          views: "",
          checked: true,
          number: "",
          textarea: ''
        },
        editorOptions: {},
        pid: this.$route.params.id
      };
    },
    methods: {
      getArtilesDetailAction() {
        getArtilesDetail(this.pid).then(res => {
          this.fields = Object.assign({}, this.fields, res.data);
        });
      }
    },
    created() {
      this.pid && this.getArtilesDetailAction();
    }
  };

</script>

<style>
  .editor {
    float: left;
  }

  .menu {
    float: left;
    height:700px;
    overflow-y: scroll;
  }

  .el-form-item {
    height: 33px;
    line-height: 33px;
  }

  .el-input--small {
    width: 80px;
  }

  .title {
    width: 260px;
    margin-left: 28px;
  }

  .place .el-input {
    width: 221px;
  }

  .check_select .el-input__inner {
    width: 90px;
  }

  .keyword {
    margin-left: 15px;
  }

  .enter_text{
    width:350px;
  }

  .enter_text textarea{
    height: 100px;
  }

</style>
