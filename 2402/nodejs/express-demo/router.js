const express = require('express')
const router = express.Router()
const file = require('./file')

//路由级中间件
const mylog = function (req, res, next) {
  if (req.query.name == 'zs') {
    next()
  } else {
    throw new Error('你没有权限访问')
  }
}

//获取汽车数据
router.get('/car', mylog, async (req, res) => {
  let carData = await file.getFileData('./data.json')
  console.log(req.nowTime)
  res.json({
    code: 200,
    message: 'success',
    data: carData.car || [],
  })
  //一种：今天学的 写入文件
  //二种：数据库
})
//写入汽车数据
router.post('/car', async (req, res) => {
  //获取请求的数据
  //检查数据
  //写入数据
  //先拿到之前的数据 进行追加合并
  let data = await file.getFileData('./data.json')
  if (!data.car) {
    data.car = []
  }
  data.car.push(req.body)
  let result = await file.setFileData('./data.json', data)
  if (result) {
    res.json({
      code: 200,
      message: 'success',
    })
  } else {
    res.json({
      code: 500,
      message: 'fail',
    })
  }
})
module.exports = router
