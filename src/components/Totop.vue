<template>
	<div class="toTop" v-if="this.boo">
		<div class="suspend-top" @click="toTop()"><img src="//img07.yiguoimg.com/e/web/161230/00584/172344/top.png" alt="" /></div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			boo:false
		}
	},
	methods: {
		toTop() {
			var scrollTop = window.scrollY;
			var timer = setInterval(function() {
				scrollTop -= 180;
				if (window.scrollY <= 0) {
					clearInterval(timer);
					window.scrollTo(0, 0);
				} else {
					window.scrollTo(0, scrollTop);
				}
			}, 20);
		}
	},
	mounted() {
	  window.addEventListener('scroll', () => {
	    if (window.scrollY >=800) {
	      this.boo =true
	    }else{
			this.boo=false
		}

	  });

	},
};
</script>

<style>
.toTop .suspend-top {
	position: fixed;
	right: 4%;
	bottom: 18%;
	width: 1.32rem;
	height: 1.32rem;
}
.toTop .suspend-top img {
	width: 100%;
}
</style>
