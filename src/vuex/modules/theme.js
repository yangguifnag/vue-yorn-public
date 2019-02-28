import setting from '@/setting.js'

export default {
	namespaced: true,
	state: {
		themeList: setting.theme.list,
		activeTheme: setting.theme.list[0].name
	},
	getters: {
		activeThemeInfo (state) {
			return state.themeList.find(item => item.name === state.activeTheme)
		}
	},
	mutations: {
		updataTheme (state, val) {
			state.activeTheme = val
		}
	},
	actions: {
		set ({
			state,
			commit,
			dispatch
		}, themeName) {
			return new Promise(async resolve => {
				let activeTheme = state.themeList.find(e => e.name === themeName) ? themeName : state.themeList[0].name
				commit('updataTheme', activeTheme)
				await dispatch('yorn/db/set', {
					dbName: 'sys',
					path: 'theme.activeTheme',
					value: state.activeTheme,
					user: true
				}, {
					root: true
				})
				resolve()
			})
		},
		load ({state, commit, dispatch}) {
			return new Promise(async resolve => {
				let activeTheme = await dispatch('yorn/db/get', {
					dbName: 'sys',
					path: 'theme.activeTheme',
					defaultValue: state.themeList[0].name,
					user: true
				}, {root: true})
				commit('updataTheme', activeTheme)
				resolve()
			})
		}
	}

}
