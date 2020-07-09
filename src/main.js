import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


Vue.config.productionTip = false
//将axios全局化
//组件中使用this.$axios发送请求即可
//这种方法建议少使用
// import axios from 'axios'
// Vue.prototype.$axios = axios
import router from './router/index.js'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
