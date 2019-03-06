import Mock from 'mockjs'
import APIData from './modules/demo'

const baseURI = 'http://localhost:8081/'

Mock.setup({
	timeout: '800-1500'
})

// Mock.mock('http://localhost:8081/menu', 'post', APIData.menu)

Object.keys(APIData).map(item => {
	Mock.mock(`${baseURI}${item}`, 'post', APIData[item])
})
