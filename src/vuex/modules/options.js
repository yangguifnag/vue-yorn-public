
export default {
	namespaced: true,
	state: {
		windowWidth: 0,
		widnowHeight: 0

	},
	getters: {

	},
	mutations: {
		updateWindowWidth (state, val) {
			state.windowWidth = val
		},
		updateWindowHeight (state, val) {
			state.widnowHeight = val
		}
	}
}
