import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 储存数据  state => localStorage
// 读取数据  localStorage => state
const store = new Vuex.Store({
	state: {
		token: '', // 登录 token
		userInfo: '', // 用户信息
		menudata: [], // 菜单权限
		menuIsCollapse: false, // 侧边菜单 默认 不收起
		isFullScreen: false, // 默认不全屏
		routesConfig: [],
		windowWidth: '', // 屏幕宽度
		windowHeight: '', // 屏幕高度
		theme: 'theme-dark3' // 主题
	},
	mutations: {
		setToken (state, val) {
			state.token = val
			localStorage.setItem('token', val)
		},
		delToken (state) {
			state.token = ''
			localStorage.setItem('token', '')
		},
		setMenudata (state, val) {
			state.menudata = val
			localStorage.setItem('menudata', JSON.stringify(val))
		},
		delMenudata (state) {
			localStorage.setItem('menudata', '')
		},
		changeMenuIsCollapse (state, val) {
			if (val) {
				state.menuIsCollapse = val
			} else {
				state.menuIsCollapse = !state.menuIsCollapse
			}
		},
		closeMenuIsCollapse (state, val = true) {
			state.menuIsCollapse = val
		},
		openMenuIsCollapse (state, val = false) {
			state.menuIsCollapse = val
		},

		changeIsFullScreen (state, val) {
			state.isFullScreen = !val ? !state.isFullScreen : !!val
		},

		setWindowWidth (state, val) {
			state.windowWidth = val
		},
		setWindowHeight (state, val) {
			state.windowHeight = val
		},
		setTheme (state, val = 'theme-dark') {
			state.theme = val
			localStorage.setItem('theme', val)
		}
	},
	getters: { // 获取参数时 从 localStorage 更新到 state
		getToken (state) {
			state.token = localStorage.getItem('token')
			return state.token
		},
		getMenu (state) {
			state.menudata = JSON.parse(localStorage.getItem('menudata'))
			return state.menudata
		},
		getMenuFormat (state) { // 菜单数据格式化
			state.menudata = JSON.parse(localStorage.getItem('menudata'))
			let pList = []
			if (state.menudata.length !== 0 && Array.isArray(state.menudata)) {
				pList = state.menudata.filter(menu => menu.parentId === '0')
				pList.map(item => {
					let cList = state.menudata.filter(menu => menu.parentId === item.nodeId)
					item.c_list = cList
				})
			}
			return pList
		}
	},
	actions: {
		destroyBaseInfo ({
			commit
		}) {
			['delMenudata', 'delToken'].map(item => {
				commit(item)
			})
		}
	}
})

// export default store
