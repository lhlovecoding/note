const fs = require('fs')
// 文件操作 有2个场景 一种是一次性操作 一种连续操作
function getFileData(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) {
        //文件不存在
        if (err.code == 'ENOENT') {
          resolve({})
          return
        }
      }
      if (data.toString().length === 0) {
        resolve({})
      } else {
        resolve(JSON.parse(data.toString()))
      }
    })
  })
}
//写入文件
function setFileData(filename, data) {
  return new Promise((resolve, reject) => {
    fs.open(filename, 'w', (err, fd) => {
      if (err) {
        reject(err)
      }
      fs.write(fd, JSON.stringify(data), (err) => {
        if (err) {
          reject(err)
        }
        fs.close(fd, (err) => {
          if (err) {
            reject(err)
          }
          resolve(true)
        })
      })
    })
  })
}
module.exports = {
  getFileData,
  setFileData,
}

//打开一个文件
// async function user() {
//   const data = await getFileData('./data.json')
//   console.log(data, '读取')
// }
//写入一个文件
// async function writeUser() {
//   let data = await getFileData('./data.json')
//   console.log(data)
//   if (!data.user) {
//     data.user = []
//   }
//   data.user.push({
//     name: '王五',
//     age: 18,
//   })
//   const res = await setFileData('./data.json', data)
//   console.log(res, '写入')
// }
//读取数据 写入数据

// writeUser()
// user()
