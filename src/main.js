import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './plugins/mixins.js'
import './assets/css/main.css';

// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Components
import vInput from './components/vInput.vue'
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import en from 'vee-validate/dist/locale/en.json';

// Font awesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
localize('en', en);

const components = {
  vInput,
  ValidationProvider,
  ValidationObserver
};
Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
});

Vue.mixin(mixins); 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
