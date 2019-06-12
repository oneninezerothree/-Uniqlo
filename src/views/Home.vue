<template>
	<div class="home">
		<Banner />
		<Nav />
		<Poster />
		<Product :con="getdata.data" :title="'jinKouShuiGuo'" />
		<Product :con="getdata.data" :pic="pic1" :title="'haiXianShuiChan'" />
		<Product :con="getdata.data" :pic="pic2" :title="'xinXianShuCai'" />
		<Prolist />
		<Prolist2 :title="'新鲜水果'" :con="getdata.data" :sort="'jinKouShuiGuo'" />
		<Prolist2 :title="'水产海鲜'" :con="getdata.data" :sort="'haiXianShuiChan'" />
		<Prolist2 :title="'精选肉类'" :con="getdata.data" :sort="'jingXuanRouLei'" />
		<Prolist2 :title="'安心蔬菜'" :con="getdata.data" :sort="'xinXianShuCai'" />
		<End />
	</div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue';
import Nav from '@/components/Nav.vue';
import Poster from '@/components/Poster.vue';
import Product from '@/components/Product.vue';
import Prolist from '@/components/Prolist.vue';
import Prolist2 from '@/components/Prolist2.vue';
import End from '@/components/End.vue';
import request from '../libs/request';
import { mapGetters } from 'vuex';
export default {
	name: 'home',
	components: {
		Banner,
		Nav,
		Poster,
		Product,
		Prolist,
		Prolist2,
		End
	},
	created() {
		this.getShopList();
		this.$store.state.isShowMHeader = true;
		this.$store.state.isShowMFooter = true;
		// console.log(this.$store.state)
	},
	data() {
		return {
			pic1: 'https://img11.yiguoimg.com/d/items/2019/190606/9288738192336582_1125x652.jpg?w=1125&h=652',
			pic2: 'https://img10.yiguoimg.com/d/items/2019/190304/9288737491592804_1125x652.jpg?w=1125&h=652'
		};
	},

	methods: {
		async getShopList() {
			const { g, p } = request;
			const data = await g({
				url: 'https://www.easy-mock.com/mock/5cf6683dd44e0c5e99486044/example/yiguolist#!method=get'
			});
			this.$store.state.shopList = data;
		}
	},
	computed: {
		...mapGetters(['getdata'])
	}
};
</script>
<style>
	.home{
		width: 100%;
	}
</style>