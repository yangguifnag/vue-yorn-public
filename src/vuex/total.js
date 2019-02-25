const modules = {}

const files = require.context('./modules', false, /\.js$/)
files.keys().forEach(key => {
	modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default {
	namespace: true,
	modules
}
