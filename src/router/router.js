import Vue from 'vue'
import store from './../vuex/store'
import Router from 'vue-router'
import layout from '@/pages/layout'
import login from '@/pages/login'
import customerMainInfo from '@/components/pages/customerInfo/customerMainInfo'
import customerDetailInfo from '@/pages/customerInfo/customerDeatilInfo/index.vue'
import policyDetailInfo from '@/pages/customerInfo/policyDetailInfo/index.vue'
import customerScreen from '@/pages/customerScreen/customerScreen/index.vue'

import customerMerge from '@/pages/customerMerge/customerMerge/index.vue'
import handworkMerge from '@/pages/customerMerge/handworkMerge/index.vue'

import baseTable from '@/pages/baseTable/index.vue'

import index from '@/pages/dashboard'
import notFound from '@/components/pages/error/404'

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
	redirect: '/index', // 默认跳转主页
	component: layout,
	meta: {
		loginToken: true,
		title: 'index'
	},
	children: [{
		path: '/index',
		name: 'index',
		component: index,
		meta: {
			title: 'Dashboard'
		}
	}, {
		path: '/customerMainInfo',
		name: 'customerMainInfo',
		component: customerMainInfo,
		meta: {
			title: '主页1'
		}
	}, {
		path: '/customerDetailInfo/:id',
		name: 'customerDetailInfo',
		component: customerDetailInfo,
		meta: {
			title: '查看页'
		}
	}, {
		path: '/policyDetailInfo/:id',
		name: 'policyDetailInfo',
		component: policyDetailInfo,
		meta: {
			title: '详情页'
		}
	}, {
		path: '/customerScreen/:type',
		name: 'customerScreen',
		component: customerScreen,
		meta: {
			title: '客户筛选'
		}
	}, {
		path: '/customerMerge',
		name: 'customerMerge',
		component: customerMerge,
		meta: {
			title: '待并归信息查询'
		}
	}, {
		path: '/handworkMerge',
		name: 'handworkMerge',
		component: baseTable,
		meta: {
			title: '手工并归'
		}
	}]

}]


export default [
	...uninside,
	...inside
]
