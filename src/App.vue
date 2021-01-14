<template>
  <div id="app">

    <router-link to="/b">书籍列表</router-link>
    <router-link to="/b">学生列表</router-link>
    <router-link to="/c">父子组件传值</router-link>


    <!-- 路由展示的地方  -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
