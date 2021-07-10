import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './plugins/mixins.js'

// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Components
import vInput from './components/vInput.vue'

// Font awesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

const components = {
  vInput,
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
