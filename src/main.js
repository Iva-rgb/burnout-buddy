import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './plugins/mixins.js'
import './assets/css/main.css';
import Axios from 'axios'

// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Components
import vInput from './components/vInput.vue';
import vRadioButtons from './components/vRadioButtons.vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import en from 'vee-validate/dist/locale/en.json';
import WAudioplayerVue from 'w-audioplayer-vue'

// Font awesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
localize('en', en);

const components = {
  vInput,
  vRadioButtons,
  ValidationProvider,
  ValidationObserver,
  WAudioplayerVue,
};
Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
});

Vue.mixin(mixins); 
Vue.use(VueToast, {
  // One of the options
  duration: 3000,
  position: 'top-right'
})
// Vue.use(VueSidebarMenu)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
