const pre = 'demo-element-'

export default {
	path: '/demo/element',
	name: 'demo-element',
	component: () => import('@/pages/dashboard'),
	redirect: {name: 'demo-element-dd'},
	children: (pre => [{
		path: 'index',
		name: `${pre}index`,
		component: () => import('@/pages/customerMerge/handworkMerge/index.vue'),
		meta: {
			title: 'demo主页'
		}
	}])(pre)
}
