import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import CrearLibro from "./views/CrearLibro";
import EditarLibro from "./views/EditarLibro";
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/register',
      name: 'register',
      component :Register
    },
    {
      path: '/crearlibro',
      name: "crearlibro",
      component: CrearLibro
    },
    {
      path: "/editarlibro",
      name: "editarlibro",
      component: EditarLibro
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
