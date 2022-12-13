import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import PageUser from './views/page-user'
import PageLogin from './views/page-login'
import PageHome2 from './views/page-home2'
import PageHome from './views/page-home'
import PageHome3 from './views/page-home3'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'PageUser',
      path: '/',
      component: PageUser,
    },
    {
      name: 'PageLogin',
      path: '/page-login',
      component: PageLogin,
    },
    {
      name: 'PageHome2',
      path: '/page-home2',
      component: PageHome2,
    },
    {
      name: 'PageHome',
      path: '/page-home',
      component: PageHome,
    },
    {
      name: 'PageHome3',
      path: '/page-home3',
      component: PageHome3,
    },
  ],
})
