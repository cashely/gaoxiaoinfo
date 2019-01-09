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
      <el-button size="small" v-for="i in 100" :key="i" @click="openAddTypeModalAction">广东</el-button>
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
export default {
  data() {
    return {
      type: "city",
      dialogVisible: false
    }
  },
  methods: {
    openAddTypeModalAction() {
      this.dialogVisible = true
    },
    addTypeForPointerAction() {
      alert(this.type)
      this.dialogVisible = false
    }
  }
}
</script>

