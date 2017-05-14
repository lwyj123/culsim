import Vue from 'vue'
import Vuex from 'vuex'
import { PRODUCE_FOOD } from './mutation-types'
import { PRODUCE_FARMER } from './mutation-types'
//import * as actions from './actions'
// 导入各个模块的初始状态和 mutations
//import cart from './modules/cart'
//import products from './modules/products'

Vue.use(Vuex)


export default new Vuex.Store({
  state: { 
    food: 100,
    farmers: 0,
  },
  mutations: {
    // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    [PRODUCE_FOOD] (state, foodcount) {
      state.food += foodcount
    },
    [PRODUCE_FARMER] (state, farmercount) {
      state.food -= farmercount * 10
      state.farmers += farmercount
    }
  }
})
