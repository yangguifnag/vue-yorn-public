
export default {
	namespaced: true,
	state: {
		menu: [], // 存储menu信息
		adapter: m => m, // 适配器用于转换后台传来的menu 变为可用,
		menuIsCollapse: false
	},
	mutations: {
		/*

		 */
		updateMenu (state, val) {
			state.menu = val
		},
		removeMenu (state) {

		},
		updateMenuIsCollapse (state, val) {
			state.menuIsCollapse = val
		}
	},
	getters: {
		getMenuIsCollapse (state) {
			return state.menuIsCollapse
		},
		getMenu (state) {
			let pList = []
			if (state.menu.length !== 0 && Array.isArray(state.menu)) {
				pList = state.menu.filter(_menu => _menu.parentId === '0')
				pList.map(item => {
					let cList = state.menu.filter(_menu => _menu.parentId === item.nodeId)
					item.c_list = cList
				})
			}
			return pList
		}
	},
	actions: {
		setMenuList ({state, commit, dispatch}, data) {
			return new Promise(async resolve => {
				await dispatch('yorn/db/set', {
					dbName: 'sys',
					path: 'menu.menuList',
					value: data,
					user: true
				}, {
					root: true
				})
				commit('updateMenu', data)
				resolve()
			})
		},
		loadMenuList ({state, commit, dispatch}) {
			return new Promise(async resolve => {
				let data = await dispatch('yorn/db/get', {
					dbName: 'sys',
					path: 'menu.menuList',
					user: true
				}, {
					root: true
				})
				commit('updateMenu', data)
				resolve()
			})
		},
		changeMenuIsCollapse ({state, commit, dispatch}) {
			return new Promise(async resolve => {
				let changeIsCollapse = !state.menuIsCollapse
				await dispatch('setMenuIsCollapse', changeIsCollapse)
				resolve()
			})
		},
		setMenuIsCollapse ({state, commit, dispatch}, data) {
			return new Promise(async resolve => {
				await dispatch('yorn/db/set', {
					dbName: 'sys',
					path: 'menu.isCollapse',
					value: data,
					user: true
				}, {
					root: true
				})
				commit('updateMenuIsCollapse', data)
				resolve()
			})
		},
		load ({state, commit, dispatch}) {
			return new Promise(async resolve => {
				let isCollapse = await dispatch('yorn/db/get', {
					dbName: 'sys',
					path: 'menu.isCollapse',
					defaultValue: false,
					user: true
				}, {
					root: true
				})
				commit('updateMenuIsCollapse', isCollapse)
				resolve()
			})
		}
	}
}
