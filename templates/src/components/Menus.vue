<template>
  <div>
    <Treeselect v-model="menu" :options="options" @input="menuChange" placeholder="无"></Treeselect>
  </div>
</template>
<script>
// import the component
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import {getNavs} from '../apis.js'
export default {
  props: {
    value: {
      type: String
    }
  },
  components: {
    Treeselect
  },
  data() {
    return {
      menus: [],
      menu: this.value
    }
  },
  computed: {
    options() {
      return this.menus.map(menu => {
        let _m = {
          id: menu._id,
          label: menu.title
        }
        if(menu.children) {
          _m.children = menu.children.map(cmenu => {
            return {
              id: cmenu._id,
              label: cmenu.title
            }
          })
        }
        return _m;
      })
    }
  },
  methods: {
    getNavsAction() {
      getNavs().then(navs => {
        this.menus = navs
      })
    },
    menuChange(value) {
      this.$emit('input', value)
    }
  },
  created() {
    this.getNavsAction()
  }
}
</script>

