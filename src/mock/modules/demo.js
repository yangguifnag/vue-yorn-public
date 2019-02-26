import {Random} from 'mockjs'

const good = {
	name: '1'
}

const menu = [{
	nodeId: '1',
	parentId: '0',
	nodeName: '菜单一',
	nodeHref: '/',
	icon: 'chart-pie'
}, {
	nodeId: '2',
	parentId: '1',
	nodeName: '菜单一',
	nodeHref: '/cc'
}, {
	nodeId: '3',
	parentId: '1',
	nodeName: '菜单gg',
	nodeHref: '/c'
}]

export default {
	good,
	menu
}
