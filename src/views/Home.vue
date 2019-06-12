<template>
	<div class="home">
		<Banner />
		<Nav />
		<Poster />
		<Product :con='getdata.data'/>
		<Product :con='getdata.data':pic='pic1'/>
		<Product :con='getdata.data':pic='pic2'/>
		<!-- <test :con='shopList'></test>; -->
	</div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue';
import Nav from '@/components/Nav.vue';
import Poster from '@/components/Poster.vue';
import Product from '@/components/Product.vue';
import request from "../libs/request";
import { mapGetters } from 'vuex';
// import test from "@/components/test.vue"
export default {
	name: 'home',
	components: {
		Banner,
		Nav,
		Poster,
		Product,
		// test
	},
	created() {
		this.getShopList();
		// console.log(this.$store.state)
	},
	data() {
		return {
			pic1:'https://img11.yiguoimg.com/d/items/2019/190606/9288738192336582_1125x652.jpg?w=1125&h=652',
			pic2:'https://img10.yiguoimg.com/d/items/2019/190304/9288737491592804_1125x652.jpg?w=1125&h=652'
			
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
	},
};
</script>
