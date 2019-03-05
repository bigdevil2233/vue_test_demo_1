<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <input type="text" v-model="logoMsg">
    <ul>
      <li>
        <router-link to="/">
          <span>回到首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/todolist">
          <span>TodoList-Demo</span>
        </router-link>
      </li>
      <li>
        <router-link to="/tab">
          <span>Tab-Demo</span>
        </router-link>
      </li>
      <li>
        <router-link to="/infiniteScroll">
          <span>vue-infinite-scroll</span>
        </router-link>
      </li>
    </ul>
    <router-view :logo="logoMsg"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      logoMsg:''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
  margin:0;
  padding:0;
  text-decoration: none;
  list-style: none;
}
</style>
