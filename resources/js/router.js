import Vue from 'vue'
import VueRouter from 'vue-router'
import ExampleComponent from './components/ExampleComponent'
import Dashboard from './views/Dashboard'
Vue.use(VueRouter);

export default new VueRouter({

   routes: [
      { path: '/', component: ExampleComponent },
      { path: '/dashboard', component: Dashboard }
   ],
   mode: 'history'

});