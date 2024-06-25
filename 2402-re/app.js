const fs = require('fs')
// console.log('开始写入文件')
// fs.writeFileSync('abc.txt', '张三李四')
// console.log('文件写入完成')
// console.log('开始写入文件')
// fs.writeFile('abc.txt', '张三李四\n', { flag: 'a' }, function (err) {
//   if (err) {
//     console.log('说明有错误')
//   }
// })
// console.log('文件写入结束')
// console.log(__dirname)
// // 1. 创建文件流
// const ws = fs.createWriteStream('abc.txt', { flags: 'r+', start: 1 })
// // 2. 监听文件流的打开和关闭
// ws.on('open', function () {
//   console.log('文件打开了')
// })

// ws.on('close', function () {
//   console.log('文件关闭了')
// })
// ws.write('666666666\n')
// // for (let i = 0; i < 10; i++) {
// //   ws.write(i + 1 + '张三\n')
// // }
// ws.end()

// const content = fs.readFileSync('abc.txt')
// console.log(content.toString())
// fs.readFile('abc.txt', function (err, data) {
//   console.log(data.toString())
// })
// const path = require('path')
// console.log(__dirname, __filename)
// let filename = path.join(__dirname, 'abc.txt')
// let filename = path.basename(__filename, '.js')
// let extname = path.extname(__filename)
// console.log(extname)

// 1. 对文件的操作练习

// 2.对文件数据的增删改查 熟练使用fs模块 readFile writeFile createWriteStream createReadStream
// data.json  JSON.parse() JSON.stringify()
// 封装对文件的操作
// 写个函数  读取文件
// 调用 需要穿什么参数  返回什么样的结果 要具备通用性 不是json文件如何处理 没有数据怎么处理，有数据怎么处理
// 能不能批量操作文件['a.json', 'b.json', 'c.json'] return ['suceess','fail','success']
const file = require('./file')
file.readFile('abc.json').then((res) => {
  console.log(res)
})
