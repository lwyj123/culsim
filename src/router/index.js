import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import Header from '@/components/Header'
import Village from '@/views/Village'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: Hello,
        header: Header,
      }
    }, {
      path: '/village',
      components: {
        default: Village,
        header: Header,
      }      
    }
  ]
})
