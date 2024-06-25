//引入express框架
const express = require('express')
var createError = require('http-errors')
//引入body-parser模块
const bodyParser = require('body-parser')
//引入路由模块
const router = require('./router')
const cors = require('cors')
// const multipart = require('connect-multiparty')
// const meddleware = multipart()
//实例化express框架构造函数
const app = express()
//应用级中间件
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Content-Type,Content-Length,Authorization,Accept,X-Requested-With,token'
//   )
//   res.header('Access-Control-Allow-Methods', 'GTE,POST,OPTIONS,PUT,DELETE,GET')
//   res.header('Content-Type', 'application/json;charset=utf-8')
// })
app.use(cors())
// 使用框架的静态资源托管配置public路径
app.use('/public', express.static('public'))
//使用body-parser模块  用来处理post请求发送的数据
app.use(bodyParser.urlencoded({ extended: false }))
//使用路由模块
app.use('/api', router)
//错误级别的中间件
app.use(function (req, res, next) {
  res.status(404).send('404')
})

//创建服务器 端口号为3000
app.listen(3000, () => {
  console.log('服务器已经启动')
})
