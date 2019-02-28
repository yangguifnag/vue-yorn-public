import utils from '@/lib/iutils'
export default {
	namespaced: true,
	state: {
		windowWidth: 0,
		widnowHeight: 0,
		isFullScreen: false
	},
	getters: {

	},
	mutations: {
		updateWindowWidth (state, val) {
			state.windowWidth = val
		},
		updateWindowHeight (state, val) {
			state.widnowHeight = val
		},
		updateIsFullScreen (state, val) {
			state.isFullScreen = val
		}
	},
	actions: {
		changeFullScreen ({state, commit}) {
			const flag = state.isFullScreen
			utils[flag ? 'exitScreen' : 'fullScreen']()
			commit('updateIsFullScreen', !flag)
		}
	}
}
