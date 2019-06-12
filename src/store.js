import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // 存放数据
  state: {
		shopList:[],
  },
  mutations: {

  },
  actions: {

  },
		
	getters: {
		getdata(state){
			return state.shopList;
		}
	}
});
