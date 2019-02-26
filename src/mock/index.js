import Mock from 'mockjs'
import APIData from './modules/demo'

Mock.setup({
	timeout: '800-1500'
})

Mock.mock('http://localhost:8081/menu', 'post', APIData.menu)
