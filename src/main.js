import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import ThreePics from './components/ThreePics.vue';
import ImutableMethods from './components/ImutableMethods.vue';
import MutableMethods from './components/MutableMethods.vue';
import SearchMethods from './components/SearchMethods.vue';

import TheFooter from './components/TheFooter.vue';

import { createRouter, createWebHistory } from 'vue-router';
//Router import
const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/imutable', component: ImutableMethods },
    { path: '/mutable', component: MutableMethods },
    { path: '/search', component: SearchMethods },
  ],
});
app.use(router);

app.component('three-pics', ThreePics);
app.component('the-footer',TheFooter);
app.mount('#app');
