<template>
  <div>
    <button
      v-for="(tab,index) in tabList"
      v-bind:key="index"
      @click="tabcomp=tab.name"
    >
      <!--
        注意：以后最好都用 v-for="(item,index) in itemList"+v-bind:key="index"这种方式写，否则会报warn
        [Vue warn]: Avoid using non-primitive value as key, use string/number value instead.
       -->
      {{tab.name}}
    </button>
    <component
      :is="tabcompd"
    >
    </component>
    <tab-home class="home"></tab-home>
    <tab-about></tab-about>
    <click-times></click-times>
  </div>
</template>

<script>
  import tabHome from './tab-home.vue'
  import tabAbout from './tab-about.vue'
  import clickTimes from './click-times.vue'
  export default {
    components: {
      tabHome,tabAbout,clickTimes
    },
    data () {
      return {
        tabcomp:'Home',
        tabList:[
          {id:0,name:'Home'},
          {id:1,name:'About'}
        ]
      }
    },
    computed: {
      tabcompd () {
        return 'tab'+this.tabcomp
      }
    }
  }
</script>

<style>
  .home{
    color:red
  }
</style>
