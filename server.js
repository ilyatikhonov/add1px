var http = require('http')
var indexHtml = require('fs').readFileSync('index.html')

count = 100000
http.createServer(function (req, res) {
	if (req.headers['x-requested-with'] == 'XMLHttpRequest') {
		res.end(count.toString())
	} else {
		count++
		res.end(indexHtml)	
	}
	
}).listen(2020)

setInterval(function() {
	count += Math.floor(Math.random()*10)
}, 100)