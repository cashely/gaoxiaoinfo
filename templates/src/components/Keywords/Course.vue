<template>
  <div class="sub-container flex">
    <header class="header-bar">
      <el-form inline size="small">
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="showAddDialogAction">添加</el-button>
        </el-form-item>
      </el-form>
    </header>
    <div class="sub-container-box">
      <el-container style="height: 100%">
        <div class="drag-left">
          <div class="el-card box-card is-always-shadow" @drop.prevent="dropAction($event, course._id)" @dragover.prevent="dragOverCardAction" @dragleave.prevent="dragEndCardAction" v-for="course in coursesP" :key="course._id">
            <div class="el-card__header">
              <div class="clearfix">
                <span>{{course.title}}</span>
              </div>
            </div>
            <div class="el-card__body">
                <button class="drag-button block" draggable="true" @dragstart="dragstartAction($event, c._id)" v-for="c in course.children" :key="c._id">{{c.title}}</button>
            </div>
          </div>
        </div>
        <el-container>
          <el-main>
            <div class="tag-box" @drop.prevent="deleteParentIdAction($event)"  @dragover.prevent="()=> {}">
              <button class="drag-button tag" size="small" draggable="true" @dragstart="dragstartAction($event, course._id)" @click.stop="openCourseDetail(course._id)" v-for="course in coursesUn" :key="course._id">{{course.title}}</button>
            </div> 
          </el-main>
        </el-container>
      </el-container>
    </div>
    <el-dialog :visible.sync="addDialog">
      <el-form size="small" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="course.title"></el-input>
        </el-form-item>
        <el-form-item label="所属类别">
          <el-radio-group v-model="course.type">
            <el-radio :label="0">子类</el-radio>
            <el-radio :label="1">父类</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="描述" v-model="course.description">
          <el-input type="textarea" :row="3"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCourseAction">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import {
    getCourses,
    addCourse,
    updateCourseById,
    getCourseById
  } from '../../apis.js';
  export default {
    data() {
      return {
        courses: [],
        addDialog: false,
        course: {
          title: '',
          type: 0,
          description: ''
        }
      }
    },
    computed: {
      coursesP() {
        let p = this.courses.filter(course => course.type === 1)
        return p.map(course => {
          course.children = this.courses.filter(c => c.parentId === course._id)
          return course
        })
      },
      coursesUn() {
        return this.courses.filter(course => course.type === 0 && !course.parentId)
      }
    },
    methods: {
      showAddDialogAction() {
        this.course = {
          title: '',
          type: 0,
          description: ''
        }
        this.addDialog = true
      },
      addCourseAction() {
        addCourse(this.course).then(() => {
          this.$message({
            type: 'success',
            message: '添加成功'
          });
          this.addDialog = false;
          this.getCoursesAction();
        })
      },
      updateCourseAction(id) {
        updateCourseById({id: id, params: this.courses}).then(() => {
          this.$message({
            type: 'success',
            message: '更新成功'
          });
          this.addDialog = false;
          this.getCoursesAction();
        })
      },
      getCourseByIdAction(id) {
        return getCourseById(id).then(course => {
          this.course = Object.assign({}, this.course, course);
        })
      },
      getCoursesAction() {
        getCourses().then(courses => {
          this.courses = courses
        })
      },
      openCourseDetail(id) {
        this.getCourseByIdAction(id).then(() => {
          this.showAddDialogAction()
        })
      },
      dragstartAction(e, id) {
        e.dataTransfer.setData('id', id)
      },
      dropAction(e, id) {
        updateCourseById({id: e.dataTransfer.getData('id'), params: {
          parentId: id
        }}).then(() => {
          this.$message({
            type: 'success',
            message: '更新成功'
          });
          this.addDialog = false;
          this.getCoursesAction();
        })
      },
      deleteParentIdAction(e) {
        updateCourseById({id: e.dataTransfer.getData('id'), params: {
          parentId: 'delete'
        }}).then(() => {
          this.$message({
            type: 'success',
            message: '更新成功'
          });
          this.addDialog = false;
          this.getCoursesAction();
        })
      },
      dragOverCardAction(e) {
        console.log(e)
        e.target.style.border = '1px dashed #d9d9d9'
      },
      dragEndCardAction(e) {
        e.target.style.border = 'none'
      }
    },
    created() {
      this.getCoursesAction()
    }
  }

</script>
<style lang="less" scoped>
.drag-left {
  min-width: 200px;
}
.el-main {
  padding: 0 20px;
}
.el-card {
  + .el-card {
    margin-top: 20px;
  }
  .el-card__header {
    padding: 5px 20px;
    background-color: #f5f7fa;
  }
}
</style>


