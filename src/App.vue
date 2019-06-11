<template>
  <div id="app">
    <router-view/>
		<Header/>
		<Footer/>
  </div>
</template>
<script>
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default Vue.extend({
  components:{
		Header,
    Footer,
  }
})
</script>
<style lang="scss">
*{
	list-style: none;
	margin: 0;
	padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	margin-bottom: 6.666666rem;
}
html{
    font-size:30px;
}
</style>
