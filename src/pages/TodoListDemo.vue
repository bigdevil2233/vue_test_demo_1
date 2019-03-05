<template>
  <div>
    <input type="text" v-model="str" @keyup.enter="add">
    <ul>
      <li v-for="(str,index) in strList">
        {{str.item}}
        <button @click="del(index)">X</button>
      </li>
    </ul>
    <p>{{logo}}</p>

  </div>

</template>

<script>
  export default {
    props: ['logo'],
    data () {
      return {
        str:'',
        id:0,
        strList:[]
      }
    },
    methods : {
      del (index) {
        this.strList.splice(index,1)
      },
      add () {
        this.id++;
        this.strList.unshift({id:this.id,item:this.str})
      }
    }
  }
</script>

<style>

</style>
