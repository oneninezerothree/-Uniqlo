<template>
	<div class="prolist2 prolistBackground pb pt">
		<div class="blockwrap" v-if="con">
			<div class="tt">
				<h3>— {{ title }} —</h3>
			</div>
			<ul class="twoproduct">
				<li v-for="(item, index) in con.data" v-if="(item.fenlei==sort)">
					<div class="proitem">
						<div class="pic">
							<a href="javascript:;"><img :src="item.SmallPic" /></a>
							<div class="saletip" v-if="item.PromotionTag"><span>{{item.PromotionTag}}</span></div>
						</div>
						<div class="info">
							<p class="name"><a href="javascript:;">{{item.goodsName}}</a></p>
							<div class="price">
								<strong>¥{{item.SellPrice}}</strong>
								{{item.Unit}}
								<i class="price-addcart"></i>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'Prolist2',
	props: ['title', 'con','sort'],
	data() {
		return {};
	},
	computed: {
		...mapGetters(['getdata'])
	}
};
</script>

<style>
.prolistBackground {
	background: #fafafa;
}
.prolist2 .blockwrap {
	background: none;
}

.blockwrap {
	box-sizing: border-box;
	background: #fff;
}
.prolist2 .tt {
	height: 1.7rem;
	line-height: 1.7rem;
	text-align: center;
}
.prolist2 .tt h3 {
	position: relative;
	display: inline-block;
	padding: 0 0.18rem;
	font-size: 0.48rem;
}

.prolist2 .blockwrap .twoproduct {
	overflow: hidden;
	padding: 0 0.37rem;
	box-sizing: border-box;
}
.prolist2 li {
	float: left;
	width: 50%;
	padding: 0.16rem;
	box-sizing: border-box;
}
.prolist2 .proitem {
	max-width: 7.62rem;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	-webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	text-align: center;
	border-radius: 0.2rem;
	background: #fff;
}
.prolist2 .proitem .pic {
	width: 100%;
}

.proitem .pic {
	position: relative;
}
.prolist2 .proitem .pic a {
	display: inline-block;
}
.prolist2 .proitem .pic a img {
	height: 5.5rem;
	border-radius: 0.2rem;
}

.proitem .pic img {
	width: 100%;
}
.prolist2 .proitem .saletip {
	position: absolute;
	bottom: 0.33rem;
}

.prolist2 .proitem .name,
.prolist2 .proitem .price strong,
.prolist2 .proitem .saletip {
	font-size: 11px;
}

.prolist2 .proitem .saletip {
	margin-top: 0.18rem;
	font-size: 0.33rem;
}
.prolist2 .proitem .saletip span {
	border: none;
	background: #fb3d3d;
	color: #fff;
	border-radius: 2.66rem 3.31rem 3.31rem 0;
	padding: 0.15rem 0.3rem;
	font-size: 0.33rem;
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
.prolist2 .proitem .info {
	padding: 0 0.33rem 0.4rem;
	text-align: left;
}

.proitem .info {
	position: relative;
}
.prolist2 .proitem .name {
	margin-top: 0.2rem;
	color: #333;
	font-weight: 700;
	font-size: 0.43rem;
}

.proitem .name a {
	color: #333;
}
.proitem .name,
.proitem .sub,
.proitem .price {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.prolist2 .proitem .price {
	margin-top: 0.26rem;
	font-size: 0.4rem;
	line-height: 0.79rem;
	color: #aaa;
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
.prolist2 .proitem .price strong {
	font-size: 0.6rem;
}

.proitem .price strong {
	margin-right: 0.1rem;
	font-size: 0.36rem;
	font-weight: bold;
	color: #fb3d3d;
}
.prolist2 .info .price .price-addcart {
	width: 0.79rem;
	height: 0.79rem;
	background: url(//img07.yiguoimg.com/d/web/190514/00193/172123/ksgw.png) no-repeat;
	background-size: 100% 100%;
	float: right;
	border-radius: 50%;
	background-color: #01b27a;
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
</style>
