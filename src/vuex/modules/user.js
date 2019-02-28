
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
		}
	},
	actions: {
		getToken ({state, commit}) {
			const token = localStorage.getItem('token');
			(token && token === state.token) || (commit('setToken', token))
			return state.token
		}
	}
}
