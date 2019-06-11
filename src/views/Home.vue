<template>
	<div class="home">
		<Banner />
		<Nav />
		<Poster />
		<Product />
		<test :con='shopList'></test>;
	</div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue';
import Nav from '@/components/Nav.vue';
import Poster from '@/components/Poster.vue';
import Product from '@/components/Product.vue';
import request from "../libs/request";
import test from "@/components/test.vue"
export default {
	name: 'home',
	components: {
		Banner,
		Nav,
		Poster,
		Product,
		test
	},
	created() {
		this.getShopList();
		// console.log(this.$store.state)
	},
	data() {
		return {
			shopList: {
				pic:'https://img09.yiguoimg.com/d/items/2019/190606/9710950652290758_1125x344.gif?w=1125&h=344'
			}
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
	}
};
</script>
