import Vue from 'vue'
import store from '@/vuex/index'
import utils from '@/lib/iutils'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import router from './router'


Vue.use(VueRouter)

const $router = new VueRouter({
  	...router
})

$router.beforeEach((to, from, next) => { // 全局路由拦截钩子
	if (to.name === 'login') {
		next()
	} else {
		if (utils.cookie.get('token')) {
			next()
		} else {
			next({path: '/'})
		}
	}
	NProgress.done()
})

$router.afterEach((to, from) => {
	NProgress.start()
})

export default $router
