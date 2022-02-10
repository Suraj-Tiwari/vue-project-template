import {createApp} from 'vue'
import axios from "axios";
import VueAxios from "vue-axios";
import App from './App.vue'
import router from './router'
import store from './store'
import registerModule from "./registerModule";

import 'bootstrap/dist/css/bootstrap.css'

/**
 * Create Vue Application
 * @type {App<Element>}
 */
const app = createApp(App);

/**
 * Application Setup
 */
(async () => {
  /**
   * Register Dynamic state, route and ui components
   */
  await registerModule(app);

  /**
   * Register Router and store,
   * these will be updated dynamically via register modules
   * so make sure to call them after calling register modules
   */
  app.use(router)
  app.use(store)

  /**
   * Configure axios instance with default server base url
   * You can Configure additional data here too
   * Then set provider to allow axios instance in setup data
   */
  app.use(VueAxios, axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
  }))
  app.provide('axios', app.config.globalProperties.axios)

  /**
   * Mount Component
   */
  app.mount('#app')

})()
