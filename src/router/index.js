import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/Root'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Root
    }
  ]
})
