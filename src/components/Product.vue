<template>
	<div class="group-floor" >
		<a class="floor-img" v-if="pic"><img :src="pic" /></a>
		<div class="product-list clear">
			<div class="product-list-in" v-if="con">
				<div class="proitem" v-for="(item, index) in con.data" :key="index">
					<div class="pic">
						<a href="javascript:;" class="pic-a"><img :src="item.SmallPic" /></a>
						<div class="saletip" v-if="item.PromotionTag">
							<span>{{ item.PromotionTag }}</span>
						</div>
					</div>
					<div class="info">
						<p class="name">
							<a href="javascript:;">{{ item.goodsName }}</a>
						</p>
						<div class="price">
							<strong>¥{{ item.SellPrice }}</strong>
							<i class="price-addcart"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'product',
	props: ['con','pic'],
	data() {
		return {
			shopList2: {}
		};
	},
	computed: {
		...mapGetters(['getdata'])
	},
	methods: {}
};
</script>

<style>
.group-floor .floor-img,
.group-floor .floor-img img {
	width: 100%;
	height: 7.2rem;
}
.group-floor .product-list {
	overflow: hidden;
	width: 100%;
}
.group-floor .product-list-in {
	overflow-x: scroll;
	overflow-y: hidden;
	box-sizing: border-box;
	width: 100%;
	padding-bottom: 0.2rem;
	white-space: nowrap;
	padding-left: 0.53rem;
}
.group-floor .proitem {
	display: inline-block;
	background: #fff;
	margin-right: 0.33rem;
	border-radius: 0.2rem;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
.proitem .pic {
	position: relative;
}
.pic .pic-a {
	display: inline-block;
}
.group-floor .proitem .pic a img {
	width: 4.11rem;
	height: 4.11rem;
	border-radius: 0.2rem 0.2rem 0 0;
}
.group-floor .proitem .saletip {
	position: absolute;
	bottom: 0;
}
.group-floor .proitem .saletip span {
	border: none;
	height: 0.34rem;
	background: #fb3d3d;
	color: #fff;
	font-weight: 700;
	border-radius: 2rem 3.31rem 3.31rem 0;
	padding: 0.16rem 0.3rem;
	font-size: 0.33rem;
	line-height: 0.34rem;
}

.proitem .saletip span {
	display: inline-block;
	height: 0.46rem;
	line-height: 0.5rem;
	margin-right: 0.1rem;
	padding: 0 0.2rem;
	color: #45b575;
	border: 1px solid #45b575;
	border-radius: 1em;
}
.group-floor .proitem .info {
	box-sizing: border-box;
	width: 4.11rem;
	text-align: left;
	padding-left: 0;
	padding: 0.27rem;
}
.proitem .info {
	position: relative;
}
.proitem .name a {
	text-decoration: none;
	color: #333;
}
.group-floor .proitem .price {
	margin-top: 0.13rem;
	height: 0.66rem;
	line-height: 0.66rem;
	font-size: 11px;
}

.proitem .price {
	font-size: 11px;
	color: #8d8a8a;
}
.proitem .name,
.proitem .sub,
.proitem .price {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.group-floor .proitem .price strong {
	font-size: 0.4rem;
}

.proitem .price strong {
	margin-right: 0.1rem;
	font-size: 0.36rem;
	font-weight: bold;
	color: #fb3d3d;
}
.info .price .price-addcart {
	width: 0.66rem;
	height: 0.66rem;
	background: url(//img07.yiguoimg.com/d/web/190514/00193/172123/ksgw.png) no-repeat;
	background-size: 100% 100%;
	float: right;
	border-radius: 50%;
	background-color: #01b27a;
}
.group-floor {
	width: 100%;
	background: #fff;
	position: relative;
}
.group-floor .proitem .name {
	font-size: 0.4rem;
}
</style>
