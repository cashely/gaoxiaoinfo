<template>
  <div class="sub-container flex editorial-management">
    <div class="editor">
      <div class="sub-container-box">
        <quillEditor style="height: 100%" v-model="fields.content" ref="contentQuillEditor" :options="editorOptions"
          class="w-text"></quillEditor>
      </div>
    </div>
    <div class="menu">
      <header class="header-bar">
        <el-form inline size="small">
          <el-form-item label="标题">
            <el-input v-model="fields.title" class="title"></el-input>
          </el-form-item>
          <el-form-item label="自定义属性" class="placement">
              <el-checkbox v-model="fields.checked">置顶</el-checkbox>
              <el-input type="number" v-model="fields.checked" class="roof-placement"></el-input>
              <el-checkbox v-model="checked">专题</el-checkbox>
          </el-form-item>
          <el-form-item label="发布时间">
            <el-date-picker v-model="fields.publishDate" type="datetime" placeholder="选择日期时间" class="dateTime"></el-date-picker>
          </el-form-item>
          <el-form-item label="工作地点" class="place">
            <el-select v-model="fields.address" class="locus">
              <el-option>空</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="截止日期">
            <el-date-picker v-model="fields.endDate" type="datetime" placeholder="选择日期时间" class="deadline"></el-date-picker>
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
            <classification></classification>
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
          <el-form-item label="描述" class="describe">
            <el-input type="textarea" :row="2" placeholder="Please enter the content" v-model="textarea" class="enter_text"></el-input>
          </el-form-item>
        </el-form>
        <footer class="sub-footer">
          <el-button type="primary" size="small">保存</el-button>
        </footer>
      </header>
    </div>
  </div>
</template>
<script>
  import classification from '../Menus';
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
      quillEditor,
      classification
    },
    methods: {},
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
          checked:false,
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

<style scope>
  .editorial-management {
    flex-direction: row;
  }

  .editor{
    display: flex;
    flex: 1;
  }

  .editor .sub-container-box {
    display: flex;
    flex: 1;
    padding-left: 0px;
    text-align: left;
  }

  .editor .sub-container-box .ql-snow {
    border-left: none;
  }

  .editor .w-text .ql-container {
    height: auto;
    overflow-y: scroll;
  }

  .menu {
    overflow-y: scroll;
    height: auto;
    border-bottom: 1px solid #c9c7c7;
  }

  .el-form-item--mini.el-form-item,
  .el-form-item--small.el-form-item {
    margin-bottom: 12px;
  }

  .menu .header-bar {
    width: 237px;
    flex-direction: column
  }

  .menu .header-bar .el-form-item {
    width: 100%;
  }

  .placement .roof-placement {
    width: 50px;
  }

  .locus .el-input__suffix {
    right: 12px;
  }

  .el-input--small {
    width: 100%;
  }

  .title {
    width: 160px;
  }

  .place .el-input {
    width: 221px;
  }

  .check_select .el-input__inner {
    width: 90px;
  }

  .menu .header-bar .describe {
    width: 50%;
  }

  .el-form-item__content .enter_text {
    width: 200px;
  }

  .el-form-item__content .enter_text .el-textarea__inner {
    height: 200px;
  }

  .editorial-management .sub-footer {
    width: 60px;
    margin: 0 auto;
  }

</style>
