import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import FindAndi from './views/FindAndi.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/find-andi',
      name: 'findAndi',
      component: FindAndi,
    },
  ],
});
