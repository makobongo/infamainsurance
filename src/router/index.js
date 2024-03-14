import Vue from "vue";
import VueRouter from "vue-router";
import {
  Business,
  Contact,
  Health,
  Motor,
  Travel,
  Home,
  Rescue,
  Careers,
  Property,
  Faq,
  Quotes
} from "../components/pages";
Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: { name: "home" } },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/motor",
    name: "motor",
    component: Motor,
  },
  {
    path: "/business",
    name: "business",
    component: Business,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/health",
    name: "health",
    component: Health,
  },
  {
    path: "/travel",
    name: "travel",
    component: Travel,
  },
  {
    path: "/rescue",
    name: "rescue",
    component: Rescue,
  },
  {
    path: "/careers",
    name: "careers",
    component: Careers,
  },
  {
    path: "/property",
    name: "property",
    component: Property,
  },
  {
    path: "/faqs",
    name: "faqs",
    component: Faq,
  },
  {
    path: "/quotes",
    name: "quotes",
    component: Quotes,
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
