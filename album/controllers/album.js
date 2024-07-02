//写业务逻辑
//路由指向这里 ，这里干事，需要查数据库或者操作文件或者发出请求等 都在这做
const albumModel = require('../models/albumModel')
const List = (req, res) => {
  let page = req.query.page || 2
  let limit = req.query.limit || 2
  albumModel
    .getList({ page, limit })
    .then((data) => {
      res.json({
        code: 200,
        msg: 'success',
        data: data,
      })
    })
    .catch((err) => {
      res.json({
        errno: err.errno,
        err_msg: err.sqlMessage,
      })
    })
}
const fs = require('fs')
const index = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  let con = fs.readFileSync('./views/a.html')
  res.send(con.toString())
}
module.exports = {
  List,
  index,
}
