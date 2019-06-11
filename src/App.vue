<template>
  <div id="app">
    <router-view></router-view>
    <Category/>
  </div>
</template>
<script>
import Category from "./components/Category.vue";

export default {
  name:'app',
  components : {
    Category
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
    border: 0;
    vertical-align: middle;
}
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
