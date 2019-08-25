export const navMenu = [{
	path: '/index',
	name: '主页',
	icon: 'home'
}, {
	path: '/demo',
	name: '示例',
	icon: 'dot-circle',
	children: (pre => [
		{
			path: `${pre}index`,
			name: '字体图标',
			icon: 'flag'

		}, {
	        path: `${pre}table`,
			name: '表格',
			icon: 'th'
		}
	])('/demo/element/')
}]


