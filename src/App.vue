<template>
  <div id="app">
    <h3>欢迎来到百知教育管理系统</h3>
    <router-link to="/first">用户管理</router-link>
    <hr>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
h3{
  color: red;
}

</style>
