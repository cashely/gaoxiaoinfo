<template>
  <div class="articles-card" :style="{width: width}">
    <h3>{{title}} <a href="#" class="more">更多></a></h3>
    <ul>
      <li v-for="i in 20" :key="i">
        <a href="#"><em>[广州]</em>热门招聘信息信息{{i}}<span>2019-01-01</span></a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      default: '394px'
    },
    title: {
      default: '热门信息'
    }
  }
}
</script>
<style lang="less">
.articles-card {
  border-top: 3px solid #ff0000;
  background-color: #fff;
  > h3 {
    font-size: 20px;
    padding: 10px 10px;
    text-align: left;
    .more {
      float: right;
      font-size: 14px;
      color: #666;
      text-decoration: none;
      font-weight: normal;
    }
  }
  ul {
    padding: 0;
    padding: 0 10px;
  }
  li {
    font-size: 14px;
    list-style: none;
    a {
      color: #333;
      line-height: 2.5;
      text-decoration: none;
      overflow: hidden;
      &:before {
        content: '.';
        width: 0;
        height: 0;
        font-size: 0;
        overflow: hidden;
        border: 2px solid #d9d9d9;
        margin: 0 10px 0 0;
        vertical-align: middle;
      }
      > span {
        float: right;
        color: #666;
      }
      > em {
        color: red;
        margin-right: 5px;
        font-style: normal;
      }
    }
  }
}
</style>


