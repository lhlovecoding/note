//引入express框架
const express = require('express')
//引入body-parser模块
const bodyParser = require('body-parser')
//引入路由模块
const router = require('./router')
// const multipart = require('connect-multiparty')
// const meddleware = multipart()
//实例化express框架构造函数
const app = express()
// 使用框架的静态资源托管配置public路径
app.use('/public', express.static('public'))
//使用body-parser模块  用来处理post请求发送的数据
app.use(bodyParser.urlencoded({ extended: false }))
//使用路由模块
app.use('/api', router)
//创建服务器 端口号为3000
app.listen(3000, () => {
  console.log('服务器已经启动')
})
