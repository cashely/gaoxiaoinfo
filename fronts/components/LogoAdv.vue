<template>
  <div class="logo-advs">
    <ul>
      <li v-for="i in 70" :key="i">
        <a href="#">
          <img src=""/>
          <p>复旦大学{{i}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="less">
.logo-advs {
  ul {
    margin-left: 0;
    padding-left: 0;
    li {
      float: left;
      width: 20%;
      display: block;
      a {
        font-size: 12px;
        background-color: #fff;
        width: 100%;
        padding: 10px;
        line-height: 2.5;
        text-align: center;
        box-sizing: border-box;
        box-shadow: 0 0 1px 0px #d1d1d1;
        display: block;
        &:hover {
          box-shadow: 0 0 20px 2px #d9d9d9;
        }
        img {
          height: 60px;
          width: 60px;
        }
      }
    }
    &:after {
      content: '';
      display: table;
      clear: both;
    }
  };
}
</style>

