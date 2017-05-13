import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
// 导入各个模块的初始状态和 mutations
//import cart from './modules/cart'
//import products from './modules/products'

Vue.use(Vuex)
Vue.config.debug = true

export default new Vuex.Store({
  // 组合各个模块
  modules: {
   // cart,
   // products
  }
})