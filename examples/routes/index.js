import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/home.vue';
import About from '../components/about.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/home',
      component: About
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
});