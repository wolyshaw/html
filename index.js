const fs = require('fs')
const config = require('./config')
fs.readFile('./index_default.html', function(err, content){
	if (err) throw err
	let text = content.toString()
	for (let k in config) {
		if (config.hasOwnProperty(k)) {
			text = text.replace('<!-- {{' + k + '}} -->', config[k])
		}
	}
	fs.writeFile('./index.html', text, function(err, content){
		if (err) throw err
	})
})
