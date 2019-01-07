<template>
  <div class="container">
    <header>
      后台管理
    </header>
    <div class="index-main">
      <Nav></Nav>
      <div class="index-main-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from './Nav'
export default {
  components: {
    Nav
  }
}
</script>

<style lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  > header {
    display: flex;
    align-items: center;
    height: 50px;
    text-align: left;
    padding: 0 20px;
    background-color: #333;
    color: #fff;
  }
}
.index-main {
  display: flex;
  height: 100%;
  > nav {
    width: 200px;
    height: 100%;
    > .el-menu {
      height: 100%;
    }
  }
  .index-main-right {
    flex: 1;
    overflow-y: auto;
  }
}
</style>

