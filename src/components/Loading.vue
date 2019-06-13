<template>
	<div class="loading" v-if="this.$store.state.isloading"><div class="img"></div></div>
</template>

<script></script>

<style>
.loading {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.2);
	text-align: center;
	z-index: 1000;
}
.loading .img {
	position: absolute;
	left: 50%;
	top: 50%;
	width: 2.52rem;
	height: 2.52rem;
	margin: -1.26rem 0 0 -1.26rem;
	border-radius: 0.3rem;
	background: #fff url(//img07.yiguoimg.com/e/web/170113/01851/110053/1.gif) no-repeat center;
	background-size: 2.1rem;
}
</style>
