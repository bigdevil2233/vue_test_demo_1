<template>
  <div>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll="10">
      <div v-for="item in itemList" :key="item.index">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'vueInfiniteScrollDemo',
    data () {
      return {
        count:0,
        itemList:[
        ],
        busy: false
      }
    },
    methods:{
      loadMore () {
        this.busy=true;
        setTimeout(()=>{
          for(let i=0,j=10;i<j;i++){
            this.itemList.push({name:this.count++});
          }
//          console.log(this.itemList);
          this.busy=false;
        },1000)
      }
    }
  }
</script>

<style>

</style>
