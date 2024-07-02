const express = require('express')
const router = require('./router')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

const app = express()
//解决跨域问题
app.use(cors())
//解决post请求参数问题
app.use(bodyParser.urlencoded({ extended: false }))
//上传文件
app.use(fileUpload())

app.use('/api', router)
app.listen(3001, () => {
  console.log('服务器已启动')
})
