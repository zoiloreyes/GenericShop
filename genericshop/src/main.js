import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/nprogress/nprogess.css"; 

import Vue from 'vue'
import VueRouter from "vue-router";
import VueAxios from 'vue-axios';
import axios from "axios";
import NProgress from 'nprogress';

import App from './App.vue'

import CrearLibro from "./components/CrearLibro.vue"
import EditarLibro from "./components/EditarLibro.vue";
import DetallesLibro from "./components/DetallesLibro.vue";
import Libros from "./components/Libros.vue";
import Login from "./components/Login.vue";
import Registro from "./components/Registro.vue";
import Home from "./components/Home.vue";

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

const routes = [
  {
    name: 'CrearLibro',
    path: '/create',
    component: CrearLibro
  },
  {
    name: "Index",
    path: "/index",
    component: Home
  }
]

const router = new VueRouter({mode: 'history', routes: routes});

router.beforeResolve((to, from, next) => {
  if(to.name){
    NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
