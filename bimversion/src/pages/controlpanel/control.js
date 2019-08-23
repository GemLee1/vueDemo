import Vue from 'vue/types/vue';
import router from '../../router';
import store from '../../store';
import controlpanel from './control';

new Vue({
  router,
  store,
  render: h => h(controlpanel)
}).$mount('#app');
