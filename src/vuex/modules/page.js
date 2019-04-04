import {
	remove,
	get
} from 'lodash'

import router from '@/router'

import setting from '@/setting.js'

const isKeepAlive = data => get(data, 'meta.cache', false)

export default {
	namespaced: true,
	state: {

		pool: [],

		opened: setting.page.opened,

		current: '',

		keepAlive: ['index', 'baseTable']
	},

	actions: {
		openedLoad ({
			state,
			commit,
			dispatch
		}) {
			return new Promise(async resolve => {
				console.log('load')
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
				state.current || (commit('currentSet', '/index'))
				resolve()
			})
		},
		openedSave ({state, commit, dispatch}) {
			return new Promise(async resolve => {
				await dispatch('yorn/db/set', {
					dbName: 'sys',
					path: 'page.opened',
					value: state.opened,
					user: true
				}, {root: true})
				resolve()
			})
		},
		openedUpdate ({state, commit, dispatch}, {index, params, query, fullPath}) {
			return new Promise(async resolve => {
				let page = state.opened[index]
				page.params = params || page.params
				page.query = query || page.query
				page.fullPath = fullPath || page.fullPath
				state.opened.splice(index, 1, page)
				await dispatch('openedSave')
				resolve()
			})
		},
		add ({state, commit, dispatch}, {tag, params, query, fullPath}) {
			return new Promise(async resolve => {
				let newTag = tag
				newTag.params = params || newTag.params
				newTag.query = query || newTag.query
				newTag.fullPath = fullPath || newTag.fullPath
				state.opened.push(newTag)
				await dispatch('openedSave')
				resolve()
			})
		},
		open ({state, commit, dispatch}, {name, params, query, fullPath}) {
			return new Promise(async resolve => {
				// await dispatch('openedLoad')
				let opened = state.opened,
					pageIndex = 0
				const pageOpen = opened.find((i, _) => {
					const same = i.fullPath === fullPath
					pageIndex = same ? _ : pageIndex
					return same
				})
				if (pageOpen) {
					await dispatch('openedUpdate', {
						index: pageIndex,
						params,
						query,
						fullPath
					})
				} else {
					let page = state.pool.find(t => t.name === name)
					if (page) {
						await dispatch('add', {
							tag: Object.assign({}, page),
							params,
	              			query,
	              			fullPath
						})
					}
				}
				commit('currentSet', fullPath)
				resolve()
			})
		},
		close ({state, commit, dispatch}, {targetName}) {
			return new Promise(async resolve => {
				let newPage = state.opened[0]
				let	len = state.opened.length
				const isCurrent = state.current === targetName
				if (isCurrent) {
					state.opened.forEach((i, _) => {
						i.fullPath === targetName && (_ < len - 1
							? newPage = state.opened[_ + 1]
							: newPage = state.opened[_ - 1])
					})
				}

				const index = state.opened.findIndex(page => page.fullPath === targetName)
				if (index >= 0) {
					commit('keepAliveRemove', state.opened[index].name)
					state.opened.splice(index, 1)
				}
				await dispatch('openedSave')
				if (isCurrent) {
					const {
						name = '',
						params = {},
						query = {}
					} = newPage
					let routerObj = {
						name,
						params,
						query
					}
					router.push(routerObj)
				}
				resolve()
			})
		},
		closeAll ({state, commit, dispatch}) {
			return new Promise(async resolve => {
				state.opened.splice(1).forEach(({name}) => commit('keepAliveRemove', name))
				await dispatch('openedSave')
				router.app.$route.name !== 'index' && router.push({ name: 'index'})
				resolve()
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
		},
		currentSet (state, val) {
			state.current = val
		},
		init (state, val) {
			const pool = []
			const recur = (ary) => {
				ary.forEach(i => {
					if (i.children) {
						recur(i.children)
					} else {
						const {meta, name, path} = i
						pool.push({meta, name, path})
					}
				})
			}
			recur(val)
			state.pool = pool
		}
	}

}
