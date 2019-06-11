<template>
	<div class="nav">
		<div class="first-screen-menu clear" style="background-color: rgb(255, 255, 255);">
			<a class="one" v-for="(item,index) in navList">
				<i><img :src="item.pictureUrl" /></i>
				<p class="one-title" style="color: rgb(51, 51, 51);">{{item.title}}</p>
			</a>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
	data(){
		return{
			navList:[{
				title:'精品水果',
				pictureUrl:'https://img09.yiguoimg.com/d/items/2019/190604/9570213143684804_144.png?w=144&amp;h=144'
			},
			{
				title:'精选肉类',
				pictureUrl:'https://img14.yiguoimg.com/d/items/2019/190604/9570213143717572_144.png?w=144&h=144'
			},
			{
				title:'海鲜水产',
				pictureUrl:'https://img13.yiguoimg.com/d/items/2019/190604/9570213143750340_144.png?w=144&h=144'
			},
			{
				title:'快手料理',
				pictureUrl:'https://img10.yiguoimg.com/d/items/2019/190604/9570213143783108_144.png?w=144&h=144'
			},
			{
				title:'免费兑卡',
				pictureUrl:'https://img10.yiguoimg.com/d/items/2019/190604/9570213143914180_144.png?w=144&h=144'
			},
			{
				title:'会员福利',
				pictureUrl:'https://img13.yiguoimg.com/d/items/2019/190604/9570213143848644_144.png?w=144&h=144'
			},
			{
				title:'银行活动',
				pictureUrl:'https://img13.yiguoimg.com/d/items/2019/190604/9570213144012484_144.png?w=144&h=144'
			},
			{
				title:'即烹美食',
				pictureUrl:'https://img10.yiguoimg.com/d/items/2019/190604/9570213144045252_144.png?w=144&h=144'
			}]
		}
	}
})
</script>

<style>
.first-screen-menu {
	background: #fff;
	background-size: 100% 100%;
	padding: 0.27rem 0.53rem;
}
.first-screen-menu .one {
	text-decoration: none;
	float: left;
	width: 25%;
	padding: 0 0 0.48rem;
	text-align: center;
	font-size: 0.36rem;
	color: #333;
}
.first-screen-menu .one i {
	display: block;
	width: 3rem;
	padding: 0 0 0.05rem;
	text-align: center;
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: 1.6rem 1.6rem;
}
.first-screen-menu .one i img {
	display: inline-block;
	width: 2.05rem;
	height: 2.05rem;
}
.one .one-title {
    font-size: .43rem;
}
</style>
