import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/pages/layout'
import login from '@/pages/login'
import customerMainInfo from '@/components/pages/customerInfo/customerMainInfo'


import index from '@/pages/dashboard'
import notFound from '@/components/pages/error/404'

import test from './modules/test'

Vue.use(Router)

const uninside = [
	{
		path: '/login',
		name: 'login',
		component: login
	},
	{
		path: '*',
		name: 'errorpage',
		component: notFound
	}
]

export const inside = [{
	path: '/',
	redirect: {name: 'index'}, // 默认跳转主页
	component: layout,
	meta: {
		loginToken: true,
		title: 'Dashboard'
	},
	children: [{
		path: 'index',
		name: 'index',
		component: index,
		meta: {
			title: 'Dashboard'
		}
	}, {
		path: 'customerMainInfo',
		name: 'customerMainInfo',
		component: customerMainInfo,
		meta: {
			title: '主页1'
		}
	},
	...test
	]

}]


export default [
	...uninside,
	...inside
]
