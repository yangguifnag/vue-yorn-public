
export default {
	namespaced: true,
	state: {
		userInfo: {},
		token: ''
	},
	getters: {
		getToken (state) {
			localStorage.getItem('token')

			return state.token
		}
	},
	mutations: {
		setToken (state, val) {
			state.token = val
			localStorage.setItem('token', state.token)
		},
		delToken (state) {
			state.token = ''
			localStorage.setItem('token', '')
		},
		updateUserInfo (state, val) {
			state.userInfo = val
		}
	},
	actions: {
		getToken ({state, commit}) {
			const token = localStorage.getItem('token');
			(token && token === state.token) || (commit('setToken', token))
			return state.token
		},
		setUserInfo ({
			state,
			commit,
			dispatch
		}, userInfo) {
			return new Promise(async resolve => {
				// utils.cookie.set('userid', userInfo.uid)
				// utils.cookie.set('username',userInfo.name)
				await dispatch('yorn/db/set', {
					dbName: 'sys',
					path: 'userInfo',
					user: true,
					value: userInfo
				}, {
					root: true
				})
				commit('updateUserInfo', userInfo)
				resolve()
			})
		},
		loadUserInfo ({state, commit, dispatch}) {
			return new Promise(async resolve => {
				let userInfo = await dispatch('yorn/db/get', {
					dbName: 'sys',
					path: 'userInfo',
					user: true
				}, {
					root: true
				})
				commit('updateUserInfo', userInfo)
				resolve()
			})
		}
	}
}
