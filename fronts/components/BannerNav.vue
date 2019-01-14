<template>
  <div class="banner-nav">
    <div class="tooltip-nav">
      <el-tooltip v-for="i in 5" :key="i" content="点击关闭 tooltip 功能" placement="right" effect="light" :visible-arrow="false" popper-class="tool-pop">
        <h4>经济学科/文化学科</h4>
        <template slot="content">
          sdsdsdsdsdss
        </template>
      </el-tooltip>
    </div>
    <div class="carousel-nav">
      <el-carousel :interval="4000" type="card" height="220px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="adv-nav">
      <a href="#">
        <img src=""/>
      </a>
      <a href="#">
        <img src=""/>
      </a>
      <a href="#">
        <img src=""/>
      </a>
    </div>
  </div>
</template>
<style lang="less">
.banner-nav {
  margin-top: 20px;
  overflow: hidden;
}
.tooltip-nav {
  width: 160px;
  float: left;
  background-color: #333;
  h4 {
    line-height: 3;
    font-weight: normal;
    font-size: 12px;
    color: #fff;
    text-align: center;
    padding: 5px 0 ;
    ~ h4 {
      border-top: 1px solid #fff;
    }
  }
  
}
.carousel-nav {
  float: left;
  width: 800px;
  margin-left: 10px;
  .el-carousel__item {
    background-color: antiquewhite;
  }
}
.tool-pop {
  border-radius: 0;
  transform: translate3d(-12px, 0, 0);
}
.adv-nav {
  width: 220px;
  float: right;
  a {
    background-color: #d9d9d9;
    display: block;
    + a {
      margin-top: 5px;
      
    }
    img {
      display: block;
      height: 70px;
    }
  }
}
</style>

