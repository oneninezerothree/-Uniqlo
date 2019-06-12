<template>
  <div id="app">
</script>
    <router-view/>
		<Header/>
		<Footer/>
		<Totop/>
  </div>
</template>
<script>

import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Totop from '@/components/Totop.vue';
export default Vue.extend({
  components:{
		Header,
    Footer,
		Totop,
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
	margin-bottom: 1.666666rem;
}



img {
    border: 0;
    vertical-align: middle;
}

</style>
