import Vue from 'vue'
import store from '@/vuex/index'
import utils from '@/lib/iutils'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import routes from './router'


Vue.use(VueRouter)

const $router = new VueRouter({
	mode: 'history',
  	routes,
  	scrollBehavior (to, from, savedPosition) {
	 	return { x: 0, y: 0 }
	}
})

$router.beforeEach((to, from, next) => { // 全局路由拦截钩子
	if (to.name === 'login') {
		next()
	} else {
		if (utils.cookie.get('token')) {
			next()
		} else {
			next({path: '/login'})
		}
	}
	NProgress.done()
})

$router.afterEach((to, from) => {
	NProgress.start()
	if (to.name !== 'errorpage') {
		store.dispatch('yorn/page/open', to)
	}
})

export default $router
