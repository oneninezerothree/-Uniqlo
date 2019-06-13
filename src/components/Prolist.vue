<template>
	<div id="prolist">
		<div class="two-image clear">
			<div class="link-img1">
				<a style="height: 7.72947rem;">
					<img src="https://img12.yiguoimg.com/d/items/2019/190329/9288737670538877_658x819.jpg?w=658&amp;h=819" style="height: 7.72947rem;" />
				</a>
			</div>
			<div class="link-img1">
				<a style="height: 7.72947rem;">
					<img src="https://img14.yiguoimg.com/d/items/2019/190304/9288737492051556_658x819.jpg?w=658&amp;h=819" style="height: 7.72947rem;" />
				</a>
			</div>
		</div>
		<div class="prolist pt" v-if='getdata.data'>
			<div class="blockwrap prolist-blockwrap">
				<ul>
					<li v-for="(item,index) in (getdata.data.data)" :key='index' v-if="index%3==0">
						<div class="proitem" @click="toDetail(item.CommodityId)">
							<div class="pic">
								<a><img :src="item.SmallPic" /></a>
							</div>
							<div class="info">
								<div class="info-wrap">
									<p class="name"><a>{{item.CommodityName}}</a></p>
									<p class="sub">
										<span class="saletip" v-if="item.PromotionTag">{{item.PromotionTag}}</span>
										{{item.SubTitle}}
									</p>
								</div>
								<div class="price pricePadding">
									<strong>¥{{item.SellPrice}}</strong>
									{{item.Spec}}
									<i class="price-addcart"></i>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	data(){
		return{
			
		}
	},
	computed: {
		...mapGetters(['getdata'])
	},
	methods: {
		toDetail(id){
			// console.log(id)
			this.$router.push({ name: 'detail', params: { goodsid: id }})
		}
	}
};
</script>

<style>
.clear:after {
	display: block;
	clear: both;
	height: 0;
	content: ' ';
}
.two-image {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	background: #d6d6d7 url(//img02.yiguo.com/e/web/150930/00982/163525/placeholder_140x140.png) no-repeat 50%;
	margin-bottom: 5px;
}
.two-image .link-img1 {
	display: inline-block;
	float: left;
	box-sizing: border-box;
}
.two-image .link-img1 a {
	display: block;
	width: 100%;
}

.prolist {
	background: #fafafa;
}
.prolist .prolist-blockwrap {
	margin: 0 0.53rem;
	background: none;
}

.blockwrap {
	box-sizing: border-box;
	background: #fff;
}
.blockwrap:after {
	display: block;
	clear: both;
	height: 0;
	content: ' ';
}
.prolist .proitem {
	position: relative;
	padding: 0.4rem 0.33rem;
	-webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	border-radius: 0.2rem;
	background: #fff;
	margin-bottom: 0.32rem;
	text-align: left;
}
.prolist .proitem .pic {
	float: left;
	width: 3.11rem;
	height: 3.11rem;
	margin-right: 0.48rem;
}

.proitem .pic {
	position: relative;
}
.prolist .proitem .pic a {
	display: inline-block;
}
.prolist .proitem .info,
.prolist .proitem .pic a img {
	height: 3.11rem;
}

.proitem .pic img {
	width: 100%;
}

.proitem .info {
	position: relative;
}
.proitem .pricePadding {
	font-size: 0.366666rem;
	padding-right: 0.2rem;
	width: 8rem;
	height: 0.79rem;
	line-height: 0.79rem;
	position: absolute;
	bottom: 0;
	left: 3.6rem;
}

.proitem .name,
.proitem .sub,
.proitem .price {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.prolist .proitem .info .name {
	line-height: 0.5rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: normal;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}
.prolist .proitem .name a {
	font-size: 0.43rem;
	color: #000;
}
.proitem .sub {
	margin-top: 0.27rem;
	color: #8d8a8a;
	font-size: 0.366666rem;
}

.proitem .name,
.proitem .sub,
.proitem .price {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.prolist .proitem .info .saletip {
	font-size: 0.4rem;
	color: #666;
}

.proitem .price {
	font-size: 11px;
	color: #8d8a8a;
}
.prolist .proitem .price strong {
	font-size: 0.6rem;
	color: #fb3d3d;
}

.proitem .price strong {
	margin-right: 0.1rem;
	font-size: 0.36rem;
	font-weight: bold;
	color: #fb3d3d;
}
.proitem .info .pricePadding .price-addcart {
	width: 0.79rem;
	height: 0.79rem;
	background: url(//img07.yiguoimg.com/d/web/190514/00193/172123/ksgw.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	bottom: 0;
	right: 0.2rem;
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
.prolist .proitem .info .sub span {
    height: .53rem;
    line-height: .53rem;
    padding: 0 .3rem;
    font-size: .33rem;
    color: #01b27a;
    border: 1px solid #01b27a;
}

.proitem .sub span {
    display: inline-block;
    height: .46rem;
    line-height: .5rem;
    margin-right: .1rem;
    padding: 0 .2rem;
    color: #45b575;
    border: 1px solid #45b575;
    border-radius: 1em;
}
</style>
