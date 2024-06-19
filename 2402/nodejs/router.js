const { getUsername } = require('./user')

function route(params) {
  console.log(params)
  if (params.pathname === '/hello') {
    return getUsername()
  }
  if (params.pathname === '/a/b') {
    return { message: 'abc' }
  }
  return { message: '404' }
}
exports.route = route
