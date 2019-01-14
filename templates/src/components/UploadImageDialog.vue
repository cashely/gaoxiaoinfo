<template>
  <el-dialog title="图片编辑器" :visible.sync="staticValue" @close="closeAction" :append-to-body='true'>
    <el-tabs>
      <el-tab-pane label="上传图片">
        <div class="upload-image">
          <el-upload
            drag
            action="http://localhost:3000/upload/element-ui"
            :on-success="uploadSuccessAction"
            >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>
          <div class="upload-image-list">
            <el-radio-group v-model="choices" v-if="single">
              <el-radio v-for="image in uploads" :label="image" :key="image"><img :src="`http://localhost:3000${image}`"/></el-radio>
            </el-radio-group>
            <el-checkbox-group v-model="choices" v-else>
              <el-checkbox v-for="image in uploads" :label="image" :key="image"><img :src="`http://localhost:3000${image}`"/></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="选择图片" style="height: 300px;overflow:auto;">
        <div class="choice-images">
          <el-radio-group v-model="choices" v-if="single">
            <el-radio v-for="image in images" :label="image" :key="image"><img :src="`http://localhost:3000${image}`"/></el-radio>
          </el-radio-group>
          <el-checkbox-group v-model="choices" v-else>
            <el-checkbox v-for="image in images" :label="image" :key="image"><img :src="`http://localhost:3000${image}`"/></el-checkbox>
          </el-checkbox-group>
        </div>
      </el-tab-pane>
    </el-tabs>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeAction" size="small">取消</el-button>
      <el-button @click="sureAction" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>
<script>
import {getImagesFromServer} from '../apis'
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    single: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      images: [],
      uploads: [],
      choices: this.single ? '' : []
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
  methods: {
    sureAction() {
      this.closeAction();
      this.$emit('ok', this.choices);
    },
    closeAction() {
      this.$emit('input', false);
    },
    getImagesFromServerAction() {
      getImagesFromServer().then(images => {
        this.images = images
      })
    },
    uploadSuccessAction(res) {
      console.log(res)
      this.uploads.push(res.data)
    }
  },
  watch: {
    value: function(val) {
      val && this.getImagesFromServerAction()
    }
  }
}
</script>
<style lang="less">
.choice-images, .upload-image {
  padding: 0;
  &:after {
    content: '';
    clear: both;
    display: table;
  }
  .el-checkbox, .el-radio {
    list-style: none;
    // float: left;
    margin: 10px;
    img {
      width: 100px;
      height: 100px;
      display: block;
    }
  }
}
.upload-image {
  .el-upload,.el-upload-dragger {
    width: 100%;
    height: 120px;
    .el-icon-upload {
      margin-top: 16px;
    }
  }
}
</style>


