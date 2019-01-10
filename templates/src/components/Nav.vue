<template>
  <nav>
    <el-menu router :default-active="$route.path">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          <b>文章内容管理</b>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/index/articles"><i class="el-icon-tickets"></i><span>文章列表</span></el-menu-item>
          <el-menu-item index="1-2"><i class="el-icon-edit"></i>文章发布</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <b>导航关键字管理</b>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/index/keyword/pointers"><i class="el-icon-location"></i><span>地区关键词</span></el-menu-item>
          <el-menu-item index="/index/keyword/schools"><i class="el-icon-bell"></i><span>高校关键词</span></el-menu-item>
          <el-menu-item index="/index/keyword/courses"><i class="el-icon-bell"></i><span>学科关键词</span></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <b>菜单管理</b>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/index/menus"><i class="el-icon-more"></i><span>菜单列表</span></el-menu-item>
          <el-menu-item index="/index/menu"><i class="el-icon-plus"></i><span>添加菜单</span></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <b>学校管理</b>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/index/schools"><i class="el-icon-more"></i><span>学校列表</span></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <b>专题页面管理</b>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/index/specials"><i class="el-icon-more"></i><span>专题列表</span></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </nav>
</template>
