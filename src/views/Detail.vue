<template>
	<div class="detail">
		<div class="downLoad line-bottom" v-if="this.boo">
			<i class="close" @click="close()"></i>
			<div class="downIn">
				<i class="ygLogo"></i>
				<p>
					易果生鲜
					<br />
					新人立享80元优惠券
				</p>
			</div>
			<a href="javascript:;" class="open">立即打开</a>
		</div>
		<div v-if="goods">
			<swiper :options="swiperOption" class="swiper-wrap" ref="mySwiper" v-if="this.arr">
				<swiper-slide v-for="(item, index) in this.arr.Pictures" :key="index"><img :src="item" alt="" /></swiper-slide>
				<!-- 常见的小圆点 -->
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<div class="product" v-if="arr">
			<div class="productInfor">
				<p class="title">{{ arr.CommodityName }}</p>
				<p class="subhead" v-if="arr.PromotionTag">
					<i class="label">{{ arr.PromotionTag }}</i>
					<span>{{ arr.SubTitle }}</span>
				</p>
				<div class="price">
					<p class="priceIn">
						<span class="priceRed">
							<i>¥</i>
							{{ arr.SellPrice }}
						</span>
						<span class="priceOriginal" v-if="arr.SellPrice < arr.OriginalPrice">¥{{ arr.OriginalPrice }}</span>
					</p>
					<p class="area">
						产地：
						<span class="name">{{ arr.PlaceOfOrigin }}</span>
					</p>
				</div>
				<div class="sale lineTop">
					<div class="saleIn">
						<i class="couponRedemption">促销</i>
						<div class="saleList saleListTwo">
							<i class="label">优惠</i>
							<p class="title">金果22-25个 ;</p>
							<!---->
						</div>
						<!---->
					</div>
				</div>
				<!---->
				<div class="sevenDay line-top backGauge" v-if="arr.CanNoReasonToReturnText">
					<span class="dian"></span>
					{{ arr.CanNoReasonToReturnText }}
				</div>
			</div>
			<div class="norms">
				<div class="title line-bottom">
					规格
					<span class="choose active">{{ arr.Spec }}</span>
				</div>
				<div class="title line-bottom">
					数量
					<div class="num">
						<span class="cut line-all" @click="reduce()"><i></i></span>
						<span class="input line-bottom" ref="num">1</span>
						<span class="add line-all" @click="add()"><i></i></span>
					</div>
					<div class="cart" @click="increase()"><span>加入购物车</span></div>
				</div>
			</div>
			<div class="address clear">
				<p class="title">送至</p>
				<div class="addressDetail">
					<p class="add">
						<span></span>
						广东 广州市 天河区
					</p>
					<p class="infor">
						<span>有货</span>
						<!---->
						<!---->
						16:00 后完成订单，预计后天(6月15日)送达
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { mapGetters } from 'vuex';
import request from '../libs/request';
require('swiper/dist/css/swiper.css');
export default {
	created() {
		this.$store.state.isShowMHeader = false;
		this.$store.state.isShowMFooter = true;
		this.getShopList();
	},
	data() {
		const that = this;
		return {
			boo: true,
			arr: null,
			goods: null,
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
				direction: 'horizontal',
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
					type: 'bullets'
				}
			}
		};
	},
	components: {
		swiper,
		swiperSlide
	},
	methods: {
		async getShopList() {
			const { g, p } = request;
			const data = await g({
				url: 'https://www.easy-mock.com/mock/5cf6683dd44e0c5e99486044/example/yiguolist#!method=get'
			});
			this.goods = data.data.data;
			this.goods.map(item => {
				if (item.CommodityId == this.$route.params.goodsid) {
					this.arr = item;
					console.log(this.arr);
				}
			});
		},
		close() {
			this.boo = false;
		},
		reduce() {
			if (this.$refs.num.innerText <= 1) {
				this.$refs.num.innerText == 0;
			} else {
				this.$refs.num.innerText--;
			}
		},
		add() {
			this.$refs.num.innerText++;
		},
		increase(){
			// 添加购物车
		}
	},
	computed: {}
};
</script>

<style>
.downLoad {
	position: relative;
	padding: 0 2.95rem 0 3.15rem;
	box-sizing: border-box;
	background: #fff;
}
.downLoad .close {
	position: absolute;
	left: 0;
	display: inline-block;
	width: 1.5rem;
	height: 1.5rem;
	background: url(http://img06.yiguoimg.com/d/web/170830/00915/154221/icon_arrow%20.png) center no-repeat;
	background-size: 0.53rem 0.53rem;
}
.downLoad .downIn {
	text-align: left;
	height: 1.5rem;
}
.downLoad .downIn .ygLogo {
	display: inline-block;
	position: absolute;
	left: 1.65rem;
	top: 50%;
	margin-top: -0.65rem;
	width: 1.3rem;
	height: 1.3rem;
	background: url(//img05.yiguoimg.com/d/web/170830/00911/152542/ygicon.png) no-repeat;
	background-size: 100% 100%;
}
.downLoad .downIn p {
	padding: 0.3rem 0;
	box-sizing: border-box;
	font-size: 0.42rem;
	color: #333;
	line-height: 0.47rem;
}
.downLoad .open {
	text-decoration: none;
	position: absolute;
	right: 0.32rem;
	top: 50%;
	margin-top: -0.45rem;
	display: inline-block;
	width: 2.6rem;
	background: #11b57c;
	border-radius: 3px;
	text-align: center;
	color: #fff;
	font-size: 0.42rem;
	padding: 0.25rem 0;
}
.swiper-wrap img {
	width: 100%;
}
.product .productInfor {
	text-align: left;
	padding: 0.45rem 0 0.4rem 0rem;
	background: #fff;
	margin-bottom: 0.3rem;
	padding-bottom: 0;
}
.product .productInfor .title {
	line-height: 0.8rem;
	padding-right: 0.53rem;
	font-size: 0.53rem;
	font-weight: 500;
	color: #333;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	padding-left: 0.53rem;
}
.product .productInfor .subhead {
	padding-right: 0.53rem;
	font-size: 0.38rem;
	color: #808080;
	padding-top: 0.25rem;
	line-height: 0.8rem;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	padding-left: 0.53rem;
	height: 0.8rem;
}
.product .productInfor .subhead .label {
	font-size: 0.4rem;
	line-height: 0.4rem;
	background: #fff;
	display: inline-block;
	padding: 0.1rem 0.36rem 0.1rem 0.33rem;
	border: 1px solid #01b27a;
	border-radius: 0.4rem;
	color: #01b27a;
	margin-right: 0.25rem;
	font-style: normal;
	vertical-align: initial;
}
.product .productInfor .subhead span {
	font-size: 0.46rem;
	color: #666;
}
.product .productInfor .price {
	position: relative;
	padding: 0rem 0 0rem;
	overflow: hidden;
	padding: 0.4rem 0 0.39rem;
	padding-left: 0.53rem;
	padding-right: 0.53rem;
}
.product .productInfor .price .priceIn {
	float: left;
}
.product .productInfor .price .priceIn .priceRed {
	font-size: 0.66rem;
	color: #eb3939;
}
.product .productInfor .price .priceIn .priceRed i {
	padding-bottom: 0.12rem;
	padding-right: 0.1rem;
}
.product .productInfor .price .area {
	float: right;
	font-size: 0.4rem;
	color: #999999;
	margin-top: 0.22rem;
}
.product .sale {
	background: #fff;
	padding-bottom: 0.54rem;
	padding-left: 0.53rem;
	padding-right: 0.53rem;
}
.productInfor .lineTop::before {
	content: '';
	position: absolute;
	left: 0;
	/* top: 0; */
	width: 100%;
	height: 1px;
	background: #ddd;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
	-webkit-transform-origin: 0 0;
	transform-origin: 0 0;
}
.product .sale .saleIn .couponRedemption {
	font-style: normal;
	font-size: 0.43rem;
	color: #999999;
	margin-right: 0.32rem;
	float: left;
	padding-top: 0.45rem;
}
.product .sale .saleIn .saleListTwo {
	position: relative;
	padding: 0.54rem 0rem 0rem 1.8rem;
	margin-left: 1.4rem;
}
.product .sale .saleIn .saleList .label {
	position: absolute;
	top: 0.45rem;
	left: 0;
	background: #ffffff;
	font-size: 0.4rem;
	color: #01b27a;
	font-style: normal;
	border: 1px solid;
	border-radius: 0.4rem;
	padding: 0.09rem 0.33rem;
	line-height: 0.4rem;
}
.product .sale .saleIn .saleList .title {
	font-size: 0.4rem;
	color: #333;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	line-height: 0.5rem;
	padding-left: 0;
	height: 0.5rem;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
}
.product .productInfor .backGauge {
	position: relative;
	height: 1.67rem;
	line-height: 1.67rem;
	padding: 0 0.53rem;
}

.product .productInfor .sevenDay {
	color: #aaaaaa;
	font-size: 0.4rem;
	padding: 0 0.53rem;
}
.product .productInfor .sevenDay .dian {
	display: inline-block;
	width: 0.33rem;
	height: 0.33rem;
	border-radius: 50%;
	margin-right: 0.2rem;
	border: 1px solid;
}
.product .productInfor .price .priceIn .priceOriginal {
	font-size: 0.46rem;
	color: #ccc;
	text-decoration: line-through;
	padding-left: 0.48rem;
}
.product .norms {
	text-align: left;
	background: #fff;
	margin-bottom: 0.3rem;
}
.product .norms .title {
	position: relative;
	color: #999999;
	font-size: 0.43rem;
	line-height: 1.2rem;
	padding: 0.35rem 0.53rem;
}

.line-bottom:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 1px;
	background: #ddd;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
	-webkit-transform-origin: 0 100%;
	transform-origin: 0 100%;
}
.product .norms .title .choose.active {
	color: #01b27a;
	font-size: 0.46rem;
	padding: 0.23rem 0.5rem;
	box-sizing: border-box;
	border: 1px solid #01b27a;
	margin-left: 0.4rem;
	height: 0.47rem;
	line-height: 0.47rem;
}

.product .norms .title .choose {
	color: #999999;
	font-size: 0.46rem;
	padding: 0.23rem 0.53rem 0.23rem 0.49rem;
	box-sizing: border-box;
	border: 1px solid #aaaaaa;
	border-radius: 0.92rem;
	margin: 0 0.05rem;
	margin-left: 0.4rem;
}
.product .norms .title .num {
	position: absolute;
	left: 1.5rem;
	top: 0.5rem;
	width: 2.6rem;
	height: 0.92rem;
	margin-left: 0.35rem;
}
.product .norms .title .num .cut,
.product .norms .title .num .add {
	float: left;
	position: relative;
	width: 0.75rem;
	height: 0.92rem;
}
.product .norms .title .num .input {
	float: left;
	position: relative;
	width: 1.04rem;
	height: 0.93rem;
	line-height: 0.93rem;
	color: #333;
	text-align: center;
}
.product .norms .title .num .cut i {
	position: absolute;
	left: 0.21rem;
	top: 0.28rem;
	width: 0.33rem;
	height: 0.33rem;
	background: url(//img06.yiguoimg.com/d/web/180226/01311/172807/cut2.png) no-repeat;
	background-size: 100%;
}
.product .norms .title .num .add i {
	position: absolute;
	left: 0.21rem;
	top: 0.28rem;
	width: 0.33rem;
	height: 0.33rem;
	background: url(//img06.yiguoimg.com/d/web/180110/00911/141220/add2.png) no-repeat;
	background-size: 100%;
}
.product .address {
	background: #fff;
	padding: 0.45rem 0.53rem;
	margin-bottom: 0.3rem;
}
.product .address .title {
	float: left;
	color: #999999;
	font-size: 0.43rem;
	padding-right: 0.4rem;
	line-height: 0.5rem;
}
.product .address .addressDetail {
	float: left;
}
.product .address .addressDetail .add {
	position: relative;
	padding-left: 0.4rem;
	font-size: 0.46rem;
	color: #333;
	line-height: 0.5rem;
	width: 9.5rem;
	padding-bottom: 0.4rem;
}
.product .address .addressDetail .infor {
	line-height: 0.7rem;
	color: #333;
	font-size: 0.4rem;
}
.product .address .addressDetail .add span {
	position: absolute;
	top: 0.03rem;
	left: 0;
	display: inline-block;
	width: 0.33rem;
	height: 0.39rem;
	background: url(//img05.yiguoimg.com/d/web/170830/00916/154520/dw.png) no-repeat;
	background-size: 100% 100%;
}
.product .address .addressDetail .infor span {
	color: #01b27a;
	padding-right: 0.2rem;
}
.product .cart {
	display: inline-block;
	font-size: 0.43rem;
	line-height: 0.92rem;
	background: red;
	position: absolute;
	left: 5.5rem;
	top: 0.5rem;
	width: 3.0rem;
	height: 0.92rem;
	text-align: center;
	color: white;
}
</style>
