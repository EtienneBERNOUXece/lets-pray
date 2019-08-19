import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import AuthPlugin from './plugins/auth'
import HighlightJs from './directives/highlight'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLink, faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(AuthPlugin)
Vue.directive('highlightjs', HighlightJs)

Vue.config.productionTip = false

library.add(faLink, faUser, faPowerOff)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
