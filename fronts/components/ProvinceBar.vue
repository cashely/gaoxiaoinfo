<template>
  <div class="index-provinces">
    <div class="index-provinces-title">
      热门地区
    </div>
    <ul class="index-provinces-places">
      <li v-for="i in 30" :key="i">
        <el-badge :value="i % 5 === 0 ? '热门' : null">
          <a href="#">广州</a>
        </el-badge>
      </li>
    </ul>
  </div>
</template>
<style lang="less">
.index-provinces {
  margin: 10px 0;
  background-color: #fff;
  .index-provinces-title {
    float: left;
    width: 60px;
    display: block;
  }
  .index-provinces-places {
    padding:10px 0;
    overflow: hidden;
    margin-left: 80px;
    li {
      margin: 5px 10px;
      list-style: none;
      float: left;
    }
    a {
      color: #333;
      line-height: 1;
      font-size: 12px;
      text-decoration: none;
    }
  }
}
</style>

