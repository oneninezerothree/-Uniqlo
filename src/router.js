import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
		{
		  path: '/cart',
		  name: 'cart',
		  // route level code-splitting
		  // this generates a separate chunk (about.[hash].js) for this route
		  // which is lazy-loaded when the route is visited.
		  component: () => import(/* webpackChunkName: "about" */ './views/Cart.vue')
		}
    ,
    {
      path: '/category',
       name: 'category',
      component: () => import(/* webpackChunkName: "about" */ './views/Category.vue')
    },
    {
      path: '/detail',
       name: 'detail',
      component: () => import(/* webpackChunkName: "about" */ './views/Detail.vue')
    },
    {
      path: '/me',
       name: 'me',
      component: () => import(/* webpackChunkName: "about" */ './views/me.vue')
    },
    {
      path: '/login',
       name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/login.vue')
    },
    {
      path: '/register',
       name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './views/register.vue')
    }
		
  ]
})
