import Vue from 'vue'
import store from './../vuex/store'
import Router from 'vue-router'
import index from '@/pages/welcome'
import login from '@/pages/login'
import customerMainInfo from '@/components/pages/customerInfo/customerMainInfo'
import customerDetailInfo from '@/pages/customerInfo/customerDeatilInfo/index.vue'
import policyDetailInfo from '@/pages/customerInfo/policyDetailInfo/index.vue'
import customerScreen from '@/pages/customerScreen/customerScreen/index.vue'

import customerMerge from '@/pages/customerMerge/customerMerge/index.vue'
import handworkMerge from '@/pages/customerMerge/handworkMerge/index.vue'

import baseTable from '@/pages/baseTable/index.vue'

import dashboard from '@/components/pages/dashboard'
import notFound from '@/components/pages/error/404'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		name: 'login',
		component: login
	}, {
		path: '/index',
		name: 'index',
		redirect: '/dashboard', // 默认跳转主页
		component: index,
		meta: {
			loginToken: true,
			name: 'index'
		},
		children: [{
			path: '/dashboard',
			name: 'dashboard',
			component: dashboard,
			meta: {
				name: 'Dashboard'
			}
		}, {
			path: '/customerMainInfo',
			name: 'customerMainInfo',
			component: customerMainInfo,
			meta: {
				name: '主页1'
			}
		}, {
			path: '/customerDetailInfo/:id',
			name: 'customerDetailInfo',
			component: customerDetailInfo,
			meta: {
				name: '查看页'
			}
		}, {
			path: '/policyDetailInfo/:id',
			name: 'policyDetailInfo',
			component: policyDetailInfo,
			meta: {
				name: '详情页'
			}
		}, {
			path: '/404',
			name: 'notFound',
			component: notFound
		}, {
			path: '/customerScreen/:type',
			name: 'customerScreen',
			component: customerScreen,
			meta: {
				name: '客户筛选'
			}
		}, {
			path: '/customerMerge',
			name: 'customerMerge',
			component: customerMerge,
			meta: {
				name: '待并归信息查询'
			}
		}, {
			path: '/handworkMerge',
			name: 'handworkMerge',
			component: baseTable,
			meta: {
				name: '手工并归'
			}
		}]

	}, {
		path: '*',
		redirect: '/404'
	}],
	scrollBehavior (to, from, savedPosition) {
	 	return { x: 0, y: 0 }
	}
})
