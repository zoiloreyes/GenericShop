
import "../node_modules/nprogress/nprogress.css"; 

import Vue from 'vue'
import VueRouter from "vue-router";
import VueAxios from 'vue-axios';
import axios from "axios";
import NProgress from 'nprogress';
import App from './App.vue'
import router from './router'


import { library } from '@fortawesome/fontawesome-svg-core'
import {  faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { Plugin } from "vue-fragment";

library.add(
  faUserSecret
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Plugin);
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
