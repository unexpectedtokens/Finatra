import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Dashboard from "./views/Dashboard.vue";
import Expenses from "./views/Expenses.vue";
import Income from "./views/Income.vue";
import Budget from "./views/Budget.vue";
// import Expenses from "./views/Expenses.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
      exact: true
    },
    {
      path: "/income",
      name: "Income",
      component: Income,
      exact: true
    },
    {
      path: "/expenses",
      name: "Expenses",
      component: Expenses,
      exact: true
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      exact: true
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      exact: true
    },
    {
      path: "/budget",
      name: "Budget",
      component: Budget,
      exact: true
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
});
