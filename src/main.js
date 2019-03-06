// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'

import router from '@/router/index'
import {inside} from '@/router/router'

import store from '@/vuex/index'

import api from '@/axios/api'

import qs from 'qs'

import iutils from '@/lib/iutils.js'
import vT from '@/lib/vueTool.js'
// [ 可选插件组件 ] 右键菜单  https://github.com/snokier/v-contextmenu/blob/master/README.md
import contentmenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'
// [ 可选插件组件 ] 图表
import VCharts from 'v-charts'

// [ele-ui] eleUi
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
// [自定义css]
import './assets/css/index.css'
// 引入全部自定义封装组件
import isys from '@/plugins'

import '@/mock'
// yorn插件 npm包形式发布
import yornPlugins from '@/plugins/yorn-plugins/index'
import yornEx from '@/plugins/yorn-plugins-ex/index'


Vue.component(CollapseTransition.name, CollapseTransition)

Vue.use(isys)
Vue.use(ElementUI)
Vue.use(VCharts)
Vue.use(contentmenu)
Vue.use(yornPlugins)
Vue.use(yornEx, {
	ie: true
})

Vue.config.productionTip = false
Vue.prototype.$axios = api
Vue.prototype.$store = store
Vue.prototype.$qs = qs
Vue.prototype.$utils = iutils
Vue.prototype.$vT = vT


new Vue({
	router,
	store,
	render: h => h(App),
	created () {
		this.$store.commit('yorn/page/init', inside)
	},
	mounted () {
		this.$store.dispatch('yorn/account/load')
	}
}).$mount('#app')
