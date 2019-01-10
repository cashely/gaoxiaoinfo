<template>
  <div class="sub-container">
    <header class="header-bar">
      <el-form inline size="small">
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="openAddTypeModalAction">添加</el-button>
        </el-form-item>
      </el-form>
    </header>
    <div class="sub-container-box">
      <div class="tag-box">
        <el-button size="small" v-for="province in provinces" :key="province._id" @click="openAddTypeModalAction" class="tag">{{province.title}}</el-button>
      </div>
    </div>
    <el-dialog width="30%" title="广东" :visible.sync="dialogVisible">
      <el-form>
        <el-form-item>
          <el-radio v-model="type" label="city">城市</el-radio>
          <el-radio v-model="type" label="province">省份</el-radio>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="small" @click="addTypeForPointerAction">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import {
    getProvinces
  } from '../../apis.js';
  export default {
    data() {
      return {
        type: "city",
        dialogVisible: false,
        provinces: []
      }
    },
    methods: {
      openAddTypeModalAction() {
        this.dialogVisible = true
      },
      addTypeForPointerAction() {
        alert(this.type)
        this.dialogVisible = false
      },
      getProvincesAction() {
        getProvinces().then(provinces => {
          this.provinces = provinces
        })
      }
    },
    created() {
      this.getProvincesAction()
    }
  }

</script>
