// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

//打包的时候直接删掉，默认基础路径在这里配置
axios.defaults.baseURL = "http://localhost:3000";
//将axios赋值给vue，方便在子组件中使用
Vue.prototype.$reqs = axios;





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
