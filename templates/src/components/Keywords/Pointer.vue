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

      <div class="provinces-box">
        <div class="provinces-area">
          <div class="province-card" v-for="province in computedProvinces" :key="province._id">
            <h3>{{province.title}}</h3>
            <div class="province-card--body" @drop="dropProvinceAction($event, province._id)" @dragover.prevent="dragoverAction($event)">
              <button draggable class="drag-button block" v-for="p in province.children" :key="p._id" @dragstart="dragStartAction($event, p._id)" @click="getProvinceDetailAction(p._id)">{{p.title}}</button>
            </div>
          </div>
        </div>
        <div class="provinces-unknow">
          <button size="small" draggable @dragstart="dragStartAction($event, province._id)" class="drag-button tag" v-for="province in computedUnType" :key="province._id" @click="getProvinceDetailAction(province._id)">{{province.title}}</button>
        </div>
      </div>
      <!-- <div class="tag-box">
        <el-button size="small" v-for="province in provinces" :key="province._id" @click="openAddTypeModalAction" class="tag">{{province.title}}</el-button>
      </div> -->
    </div>
    <el-dialog width="30%" :title="this.province.title || '添加地区'" :visible.sync="dialogVisible">
      <el-form size="mini">
        <el-form-item label="地区名称">
          <el-input v-model="province.title"></el-input>
        </el-form-item>
        <el-form-item>
          <el-radio-group v-model="province.type">
            <el-radio :label="1">城市</el-radio>
            <el-radio :label="0">省份</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="所属省份" v-if="province.type === 1">
          <el-select v-model="province.parentId" placeholder="请选择">
            <el-option v-for="province in computedProvinces" :key="province._id" :label="province.title" :value="province._id">{{province.title}}</el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="small" @click="updatePointerAction">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import {
    getProvinces,
    updateProvinceById,
    addProvince,
    getProvinceById
  } from '../../apis.js';
  export default {
    data() {
      return {
        dialogVisible: false,
        provinces: [],
        province: {
          _id: '',
          title: '',
          type: 1,
          parentId: ''
        }
      }
    },
    computed: {
      computedProvinces() {
        return this.provinces.filter(province => province.type === 0).map(province => {
          province.children = this.provinces.filter(p => p.parentId === province._id && p.type !== 0);
          return province;
        })
      },
      computedUnType() {
        return this.provinces.filter(province => (province.type !== 0 ) && !province.parentId)
      }
    },
    methods: {
      openAddTypeModalAction() {
        this.province = {
          _id: '',
          title: '',
          type: 1,
          parentId: ''
        };
        this.dialogVisible = true;
      },
      addProvinceAction() {
        addProvince(this.province).then(() => {
          this.$message({
            type: 'success',
            message: '添加成功'
          });
          this.dialogVisible = false;
          this.getProvincesAction();
        }).catch(error => {
          this.$message({
            type: 'danger',
            message: '添加失败'
          });
          this.dialogVisible = false
        })
      },
      updatePointerAction() {
        if(!this.province._id) return this.addProvinceAction();
        updateProvinceById(this.province._id, this.province).then(() => {
          this.$message({
            type: 'success',
            message: '添加成功'
          });
          this.dialogVisible = false;
          this.getProvincesAction();
        }).catch(error => {
          this.$message({
            type: 'danger',
            message: '添加失败'
          });
          this.dialogVisible = false
        })
      },
      getProvincesAction() {
        getProvinces().then(provinces => {
          this.provinces = provinces
        })
      },
      getProvinceDetailAction(id) {
        getProvinceById(id).then(province => {
          this.openAddTypeModalAction()
          this.$nextTick(() => {
            this.province = Object.assign({}, this.province, province);
          })
        })
      }
    },
    created() {
      this.getProvincesAction()
    }
  }

</script>
<style lang="less" scoped>
.provinces-box {
  display: flex;
  flex-direction: column;
  .provinces-area {
    flex: 1;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -5px;
  }
  .province-card {
    text-align: center;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    min-width: 100px;
    margin: 5px;
    h3 {
      border-bottom: 1px solid #d9d9d9;
      background-color:#f1f1f1; 
      font-size: 14px;
      font-weight: normal;
      padding: 10px 10px;
      line-height: 1;
      margin: 0;
    }
    .province-card--body {
      padding: 5px 10px;
    }
  }
  .provinces-unknow {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
    padding: 5px 0;
    margin-top: 20px;
    border-top: 1px solid #d9d9d9;
  }
}
</style>

