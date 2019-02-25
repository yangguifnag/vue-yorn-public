import {
	remove,
	get
} from 'lodash'

import setting from '@/setting.js'

const isKeepAlive = data => get(data, 'meta.cache', false)

export default {
	namespace: true,
	state: {

		pool: [],

		opened: setting.page.opened,

		current: '',

		keepAlive: []
	},

	action: {
		openedLoad ({
			state,
			commit,
			dispatch
		}) {
			return new Promise(async resolve => {
				const value = await dispatch('yorn/db/get', {
					dbName: 'sys',
					path: 'page.opened',
					defaultValue: setting.page.opened,
					user: true
				}, {
					root: true
				})

				const valid = []
				state.opened = value.map(opened => {
					if (opened.name === 'index') {
						valid.push(1)
						return opened
					}

					const find = state.pool.find(item => item.name === opened.name)
					valid.push(find ? 1 : 0)

					return Object.assign({}, opened, find)
				}).filter((opened, index) => valid[index] === 1)
			})
		}
	},
	mutations: {
		keepAlivePush (state, name) {
			const ary = [...state.keepAlive]
			ary.push(name)
			state.keepAlive = ary
		},
		keepAliveRemove (state, name) {
			const ary = [...state.keepAlive]
			const index = ary.findIndex(i => i === name)
			index > -1 && (state.keepAlive = ary.splice(index))
		},
		keepAliveClean (state) {
			state.keepAlive = []
		},
		keepAliveRefresh (state) {
			state.keepAlive = state.opened.filter(item => isKeepAlive(item)).map(e => e.name)
		}
	}

}
