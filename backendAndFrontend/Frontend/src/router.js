import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Lists from './views/Lists.vue';
import List from './views/List.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/lists',
      name: 'lists',
      component: Lists,
    },
    {
      path: '/list/:name',
      name: 'list',
      component: List
    }
  ],
});
