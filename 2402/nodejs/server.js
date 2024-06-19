const http = require('http')
const url = require('url')

var querystring = require('querystring')
var util = require('util')
function start(route) {
  function onRequest(request, response) {
    if (request.method == 'POST') {
      var post = ''

      // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
      request.on('data', function (chunk) {
        post += chunk
      })

      // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
      request.on('end', function () {
        post = querystring.parse(post)
        console.log(post.name)
      })
    } else {
      let urlObj = url.parse(request.url, true)
    }

    // let result = route()
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(123))
  }

  http.createServer(onRequest).listen(3000)
}
exports.start = start
