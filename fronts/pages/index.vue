<template>
  <div class="index">
    <header>
      <a href="" class="logo">
        <img src=""/>
      </a>
      <div class="search-box">
        <div class="search-box_input">
          <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="全国">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" type="primary">搜索</el-button>
          </el-input>
        </div>
        <div class="search-box_keyword">
          <a href="#">广州</a>
          <a href="#">深圳</a>
          <a href="#">安徽</a>
          <a href="#">安庆</a>
        </div>
      </div>
    </header>
    <Nav></Nav>
    <BannerNav></BannerNav>
    <BigAdv></BigAdv>
    <LogoAdv></LogoAdv>
    <div class="index-articles">
      <HotArticle></HotArticle>
      <HotArticle></HotArticle>
    </div>
  </div>
</template>

<script>
import '~/static/less/global.less'
import Logo from '~/components/Logo.vue'
import Nav from '~/components/Nav.vue'
import BannerNav from '~/components/BannerNav.vue'
import BigAdv from '~/components/BigAdv.vue'
import LogoAdv from '~/components/LogoAdv.vue'
import HotArticle from '~/components/HotArticle.vue'

export default {
  components: {
    Logo,
    Nav,
    BannerNav,
    BigAdv,
    LogoAdv,
    HotArticle
  },
  data() {
    return {
      select: '',
      input5: ''
    }
  }
}
</script>

<style lang="less">
.index {
  width: 1200px;
  margin: 0 auto;
  > header {
    display: flex;
    position: relative;
    align-items: center;
    padding: 20px 0;
  }
  .logo {
    img {
      display: block;
      width: 150px;
      height: 75px;
    }
  }
  .search-box {
    position: absolute;
    left: 50%;
    width: 500px;
    margin-left: -250px;
    .el-input-group__prepend {
      width: 100px;
    }
    .search-box_keyword {
      line-height: 2;
      a {
        font-size: 12px;
        color: #666;
        margin: 5px 5px;
        text-decoration: none;
        &:hover {
          color: red;
        }
      }
    }
  }
}
.index-articles {
  margin-top: 20px;
}
</style>
