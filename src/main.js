// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

import router from './router'
import store from './vuex/store'
import vuexx from '@/vuex/index'

import service from './axios/service'

import qs from 'qs'

import NProgress from 'nprogress'

import iutils from '@/lib/iutils.js'
import vT from '@/lib/vueTool.js'
// [ 可选插件组件 ] 右键菜单  https://github.com/snokier/v-contextmenu/blob/master/README.md
import contentmenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'
// [ 可选插件组件 ] 图表
import VCharts from 'v-charts'
// [ font-awesome ] 字体文件import 使用方法
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faChevronRight, faTag, faBars, faLock, faPowerOff, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { faExpandArrowsAlt, faExpand, faCompress, faTheaterMasks, faCheck, faBullseye, faEnvelope, faCheckCircle, faTimesCircle, faHourglassHalf} from '@fortawesome/free-solid-svg-icons'
import { faWindows } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// [ele-ui] eleUi
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
// [自定义css]
import './assets/css/index.css'

import isys from '@/plugins'


library.add(faUser, faChevronRight, faChevronRight, faTag, faBars, faLock, faPowerOff, faChevronDown)
library.add(faExpandArrowsAlt, faExpand, faCompress, faWindows, faTheaterMasks, faCheck, faBullseye, faEnvelope, faCheckCircle, faTimesCircle, faHourglassHalf)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component(CollapseTransition.name, CollapseTransition)

Vue.use(isys)
Vue.use(ElementUI)
Vue.use(VCharts)
Vue.use(Vuex)
Vue.use(contentmenu)

Vue.config.productionTip = false
Vue.prototype.$axios = service
Vue.prototype.$store = store
Vue.prototype.$qs = qs
Vue.prototype.$utils = iutils
Vue.prototype.$vT = vT

router.beforeEach((to, from, next) => { // 全局路由拦截钩子
	if (to.name === 'login') {
		next()
	} else {
		if (store.getters.getToken) {
			next()
		} else {
			next({path: '/'})
		}
	}
	NProgress.done()
})
router.afterEach((to, from) => {
	NProgress.start()
})

new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
