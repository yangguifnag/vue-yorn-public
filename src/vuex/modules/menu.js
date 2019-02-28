
export default {
	namespaced: true,
	state: {
		menu: [], // 存储menu信息
		adapter: m => m, // 适配器用于转换后台传来的menu 变为可用,
		menuIsCollapse : false
	},
	mutations: {
		/*

		 */
		updateMenu (state, val) {

		},
		removeMenu (state) {

		},
		updateMenuIsCollapse(state,val){
			state.menuIsCollapse = val
		},
		changeMenuIsCollapse(state){
			let flag = state.menuIsCollapse
			state.menuIsCollapse = !flag
		}
	},
	getters :{
		getMenuIsCollapse(state){
			return state.menuIsCollapse
		}
	},
	actions: {
		
	}
}
