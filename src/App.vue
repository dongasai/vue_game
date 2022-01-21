<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Vertical">竖版</router-link>
      |
      <router-link to="/Home">人物预览</router-link>
      |
      <router-link to="/Home">人物预览</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  mounted() {

  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
