import { Loading } from 'element-ui'

const base = () => ({
	target: document.body,
	fullscreen: true,
	lock: true,
	text: '正在加载',
	spinner: ''
})

const l = {
	logout () {
		return Object.assign(base(), {
			text: '正在退出...',
			background: 'rgba(0, 0, 0, 0.8)'
		})
	},
	login () {
		return Object.assign(base(), {
			text: '正在加载',
			background: 'rgba(255, 255, 255, 0.8)'
		})
	}
}

export default (type) => Loading.service(type ? l[type]() : base())
