import {
	version
} from '../package.json'

const setting = {
	// 侧边菜单默认折叠状态
	menu: {
		menuCollapse: false
	},
	// 主题默认值
	theme: {
		// name: 'theme-dark3',
		list: [{
			'name': 'theme-dark',
			'body': '#eff0f4',
			'head': '#FFFFFF',
			'head2': '#FFFFFF',
			'menu': '#1b2b38',
			'point': '#42b983'
 				}, {
			'name': 'theme-dark2',
			'body': '#eff0f4',
			'head': '#7266ba',
			'head2': '#FFFFFF',
			'menu': '#3a3f51',
			'point': '#FFFFFF'
 				}, {
			'name': 'theme-dark3',
			'body': '#eff0f4',
			'head': '#16aad8',
			'head2': '#16aad8',
			'menu': '#dde6e9',
			'point': '#FFFFFF'
 				}]
	},

	// 版本
	releases: {
		version: version

	},
	page: {
		opened: [{
			name: 'index',
			fullPath: '/index',
			meta: {
				title: 'Dashboard'
			}
		}]
	}

}

export default setting
