<template>
	<div class="poster">
		<div class="first-screen-ad"><img src="https://img09.yiguoimg.com/d/items/2019/190606/9710950652290758_1125x344.gif?w=1125&amp;h=344" /></div>
		<div class="first-screen-news">
			<i class="title"></i>
			<div class="titleBanner">
				<swiper :options="swiperOption" class="swiper-wrap swiper-container" ref="mySwiper" v-if="banner.length != 0">
					<swiper-slide v-for="(item, index) in banner" :key="index" style='height: 100%;line-height: 0.4rem;'>
						<span style="font-size: 0.4rem;">{{ item.title }}</span>
					</swiper-slide>
				</swiper>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
require('swiper/dist/css/swiper.css');
export default Vue.extend({
	data() {
		const that = this;
		return {
			banner: [
				{
					title: '营业资质公示，详情请点击查询'
				},
				{
					title: '不良信息投诉与举报'
				},
				{
					title: '营业资质公示，详情请点击查询'
				},
				{
					title: '营业资质公示，不良信息投诉与举报'
				}
			],
			imgIndex: 1,
			swiperOption: {
				//是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
				notNextTick: true,
				//循环
				loop: true,
				//设定初始化时slide的索引
				initialSlide: 0,
				//自动播放
				autoplay: {
					delay: 1500,
					stopOnLastSlide: false,
					/* 触摸滑动后是否继续轮播 */
					disableOnInteraction: false
				},
				//滑动速度
				speed: 800,
				//滑动方向
				direction: 'vertical',
				//小手掌抓取滑动
				grabCursor: true,
				on: {
					//滑动之后回调函数
					slideChangeTransitionStart: function() {
						/* realIndex为滚动到当前的slide索引值 */
						that.imgIndex = this.realIndex - 1;
					}
				},
				//分页器设置
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					type: 'bullets',
				}
			}
		};
	},
	components: {
		swiper,
		swiperSlide
	}
});
</script>

<style>
.first-screen-ad img {
	display: block;
	width: 100%;
	height: 3.8rem;
}
.first-screen-news {
	box-sizing: border-box;
	height: 1.1rem;
	padding: 0.22rem 0.32rem 0.22rem 3.35rem;
	background: #fff;
	position: relative;
}
.first-screen-news .title {
	position: absolute;
	top: 0.35rem;
	left: 0.5rem;
	width: 2.26rem;
	height: 0.44rem;
	background: url(//img06.yiguoimg.com/e/web/161222/018522/134216/news.png) no-repeat;
	background-size: 100% 100%;
}
.titleBanner {
	height: 0.666666rem;
}
.first-screen-news .swiper-container {
    width: 100%;
    height: .66rem;
}
.swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
</style>
