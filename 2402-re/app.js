const express = require('express')
const app = express()
const parser = require('body-parser')
const router = require('./router')
const cors = require('cors')
app.use(parser.urlencoded({ extended: false }))
app.use(cors())
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header(
//     'Access-Control-Allow-Methods',
//     'PUT,POST,GET,DELETE,OPTIONS,HEAD,PATCH'
//   )
//   res.header('Access-Control-Allow-Headers', 'Content-Type,token')
//   res.header('Content-Type', 'application/json;charset=utf-8')
//   // if (!false) {
//   //   return res.send('你没有权限访问')
//   // }
//   next()
// })

app.use('/api', router)

app.use('/public', express.static('static'))

app.use((err, req, res, next) => {
  console.log('发生了错误！' + err.message)
  res.send('Error：' + err.message)
})
app.listen('8080', () => {
  console.log('服务已经启动')
})

//把昨天的作业 先做完  做完之后 使用express把昨天的作业合并过来
