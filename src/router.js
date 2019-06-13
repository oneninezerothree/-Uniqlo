import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/cart',
			name: 'cart',
			component: () => import( /* webpackChunkName: "about" */ './views/Cart.vue')
		},
		{
			path: '/category',
			name: 'category',
			component: () => import( /* webpackChunkName: "about" */ './views/Category.vue')
		},
		{
			path: '/detail',
			name: 'detail',
			component: () => import( /* webpackChunkName: "about" */ './views/Detail.vue')
		},
		{
			path: '/me',
			name: 'me',
			component: () => import( /* webpackChunkName: "about" */ './views/me.vue')
		},
		{
			path: '/login',
			name: 'login',
			component: () => import( /* webpackChunkName: "about" */ './views/Login.vue')
		},
		{
			path: '/register',
			name: 'register',
			component: () => import( /* webpackChunkName: "about" */ './views/register.vue')
		},
		{
			path: '/list',
			name: 'list',
			component: () => import( /* webpackChunkName: "about" */ './views/List.vue')
		}

	]
})
