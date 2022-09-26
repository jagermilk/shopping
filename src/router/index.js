import { createRouter, createWebHistory } from "vue-router";
const home = () => import("../views/home/home.vue");
const goods = () => import("../views/goods.vue");
const car = () => import("../views/car/car.vue");
const profile = () => import("../views/profile.vue");
const Detail=()=>import("../views/detail/detail.vue")

const routes = [
  { 
    path: "", 
  redirect: "/home"
 },
  {
    path: "/home",
    component: home,
  },
  {
    path: "/goods",
    component: goods,
  },
  {
    path: "/car",
    component: car,
  },
  {
    path: "/profile",
    component: profile,
  },
  {
    path: "/detail/:id",
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
