import utils from '@/lib/iutils'
export default {
	namespaced: true,
	state: {
		windowWidth: 0,
		widnowHeight: 0,
		isFullScreen: false,
		userAgent: ''
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
		},
		updateUserAgent (state, val) {
			state.userAgent = val
		}
	},
	actions: {
		changeFullScreen ({state, commit}) {
			const flag = state.isFullScreen
			utils[flag ? 'exitScreen' : 'fullScreen']()
			commit('updateIsFullScreen', !flag)
		},
		loadUserAgent ({state, commit}) {
			const explorer = navigator.userAgent
			// ie
			if (explorer.indexOf('MSIE') >= 0) {
				// alert('ie')
				commit('updateUserAgent', 'ie')
			}
			// firefox
			else if (explorer.indexOf('Firefox') >= 0) {
				// alert('Firefox')
				commit('updateUserAgent', 'Firefox')
			}
			// Chrome
			else if (explorer.indexOf('Chrome') >= 0) {
				// alert('Chrome')
				commit('updateUserAgent', 'Chrome')
			}
			// Opera
			else if (explorer.indexOf('Opera') >= 0) {
				// alert('Opera')
				commit('updateUserAgent', 'Opera')
			}
			// Safari
			else if (explorer.indexOf('Safari') >= 0) {
				// alert('Safari')
				commit('updateUserAgent', 'Safari')
			}
			// Netscape
			else if (explorer.indexOf('Netscape') >= 0) {
				// alert('Netscape')
				commit('updateUserAgent', 'Netscape')
			}
			document.body.classList.add(`${state.userAgent.toLowerCase()}-hack`);
		}

	}
}
