<template>
  <el-dialog width="510px" :visible.sync="staticValue" @close="closeAction">
    <el-form size="small" label-width="70px">
      <el-form-item label="标题">
        <el-input v-model="fields.title"></el-input>
      </el-form-item>
      <el-form-item label="投放时间">
        <el-date-picker
          v-model="fields.activeDate"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="链接地址">
        <el-input v-model="fields.url"></el-input>
      </el-form-item>
      <el-form-item label="广告区">
        <el-select v-model="fields.type">
          <el-option label="广告A区" value="A"></el-option>
          <el-option label="广告B区" value="B"></el-option>
          <el-option label="广告C区" value="C"></el-option>
          <el-option label="广告D区" value="D"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Banner">
        <el-button @click="showUploadPickerAction" :style="{width:'100%',height:'78px',borderStyle:'dashed'}">
          <img style="height:100%" :src="`http://localhost:3000${fields.banner}`" v-if="fields.banner"/>
          <div class="avatar-uploader" v-else>
            <div tabindex="0" class="el-upload el-upload--text">
              <!-- <i class="el-icon-plus avatar-uploader-icon"></i> -->
              {{`${size[fields.type].width}*${size[fields.type].height}`}}
            </div>
          </div>
        </el-button>
        <UploadImageDialog v-model="showUpload" @ok="imageChoiceOverAction" single></UploadImageDialog>
      </el-form-item>
      <el-form-item label="状态">
        <el-radio-group v-model="fields.statu">
          <el-radio :label="1">开启</el-radio>
          <el-radio :label="0">关闭</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="fields.description" :rows="3" type="textarea"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer">
      <el-button @click="sureAction" size="small" type="primary">确定</el-button>
    </span>
  </el-dialog>
</template>
<script>
import UploadImageDialog from '../UploadImageDialog'
import {addAdv} from '../../apis'
export default {
  components: {
    UploadImageDialog
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ''
    }
  },
  computed: {
    staticValue: {
      get() {
        return this.value;
      },
      set() {

      }
    }
  },
  data() {
    return {
      showUpload: false,
      fields: {
        title: '',
        type: 'A',
        url: '',
        banner: '',
        description: '',
        statu: 1,
        activeDate: []
      },
      size: {
        A: {
          width: 300,
          height: 100
        },
        B: {
          width: 400,
          height: 200
        },
        C: {
          width: 500,
          height: 150
        },
        D: {
          width: 600,
          height: 300
        }
      }
    }
  },
  methods: {
    showUploadPickerAction() {
      this.showUpload = true;
    },
    imageChoiceOverAction(images) {
      this.fields.banner = images
    },
    sureAction() {
      addAdv({
        title: this.fields.title,
        type: this.fields.type,
        url: this.fields.url,
        banner: this.fields.banner,
        statu: this.fields.statu,
        publishDate: this.fields.activeDate[0],
        endDate: this.fields.activeDate[1],
        description: this.fields.description
      }).then(res => {
        this.closeAction();
        this.$emit('success');
      })
    },
    closeAction() {
      this.$emit('input', false);
    }
  }
}
</script>
<style lang="less" scoped>
.avatar-uploader-icon {
  font-size: 28px;
  width: 100%;
  height: 100%;
}
.el-upload {
  border-radius: 6px;
  position: relative;
  overflow: hidden;
}
</style>


