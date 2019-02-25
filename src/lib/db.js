import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/localStorage'
import setting from '@/setting.js'

const adapter = new LocalStorage(`isystem-${setting.releases.version}`)
const db = low(adapter)

db.defaults({
	sys: {},
	database: {},
	user: {}
}).write()

export default db
