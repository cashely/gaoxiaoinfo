<template>
  <div class="big-advs">
    <a href="#" v-for="i in 8" :key="i">
      <img src=""/>
    </a>
  </div>
</template>
<style lang="less">
.big-advs {
  margin: 10px -2px;
  overflow: hidden;
  a {
    width:598px;
    margin: 2px;
    float: left;
    display: block;
    background-color: #d9d9d9;
    img {
      width: 100%;
      height: 100px;
      display: block;
    }
  }
}
</style>

