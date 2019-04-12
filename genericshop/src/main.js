
import "../node_modules/nprogress/nprogress.css"; 

import Vue from 'vue'
import VueRouter from "vue-router";
import VueAxios from 'vue-axios';
import axios from "axios";
import NProgress from 'nprogress';

import App from './App.vue'

import router from './router'


Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

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
