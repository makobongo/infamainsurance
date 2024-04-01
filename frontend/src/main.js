import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import router from "./router";
import "@mdi/font/css/materialdesignicons.css";
import Carousel3d from 'vue-carousel-3d';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import _ from 'lodash';

Vue.use(Vuetify);
Vue.use(Carousel3d);
Vue.use(VueSweetalert2);
Vue.config.productionTip = false;
require('./validation');
Object.defineProperty(Vue.prototype, '$_', { value: _ });

new Vue({
  router,
  icons: {
    iconfont: "mdi", // default - only for display purposes
  },
  vuetify: new Vuetify(),
  render: (h) => h(App),
}).$mount("#app");
