import Vuetify from '../plugins/vuetify'
import router from './router'
import App from './components/App'


window.Vue = require('vue');
require('./bootstrap');

//LAYOUTS
Vue.component('NavBar', require('./components/layouts/NavBar.vue').default);
Vue.component('SideBar', require('./components/layouts/SideBar.vue').default);



Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
   components: {
      App
   },
    vuetify: Vuetify,
    router,
    el: '#app',
});
