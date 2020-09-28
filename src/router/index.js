import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/home.vue")
  },
  {
    path: "/fault",
    name: "Fault",
    component: () => import(/* webpackChunkName: "Fault" */ "../views/fault.vue")
  },
  {
    path: "/alarm",
    name: "Alarm",
    component: () => import(/* webpackChunkName: "Alarm" */ "../views/alarm.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;
