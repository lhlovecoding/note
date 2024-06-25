//引入fs模块
const fs = require('fs')
const path = require('path')
const filepath = 'abc.json'
//检查文件是否存在
let fileExt = path.extname(filepath)
if (fileExt !== '.json') {
  return { code: -1, msg: '文件格式错误' }
}
const checkFileStat = (path) => {
  //获取文件拓展名
  try {
    fs.accessSync(path, fs.constants.R_OK | fs.constants.W_OK)
    return { code: 1, msg: '文件ok' }
  } catch (err) {
    return { code: -2, msg: '文件不存在' }
  }
}

//通过文件流进行读取文件
const readFileSteam = (path) => {
  let resultdata = ''
  return new Promise((resolve, reject) => {
    const ws = fs.createReadStream(path)
    ws.on('open', () => {})
    ws.on('close', () => {
      try {
        resultdata = JSON.parse(resultdata)
        resolve(resultdata)
      } catch (error) {
        resolve({ code: -3, msg: '内容格式错误' })
      }
    })
    ws.on('data', (data) => {
      data.toString()
      resultdata += data
    })
  })
}
//需要什么 路径 返回什么结果
const readFile = async (path) => {
  //检查文件是否存在and是否合法
  let stat = checkFileStat(path)

  if (stat.code !== 1) {
    return Promise.resolve(stat)
  }
  //通过文件流进行读取文件
  let result = await readFileSteam(path)
  return Promise.resolve(result)
}
// readFile(filepath).then((res) => {
//   console.log(res)
// })

/*************************************************************************/
//写入文件 传什么写什么 写之前转换为json字符串
const writeFile = async (path, data) => {
  const writeS = fs.createWriteStream(path)
  writeS.on('open', () => {})
  writeS.on('close', () => {})
  writeS.write(data)
  if (data.includes('b')) {
    await dely()
  }
  return Promise.resolve({ code: 1, msg: '写入成功' })
}
function dely() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 5000)
  })
}
const setData = () => {
  writeFile(filepath, { name: '王小二', age: 18 })
  writeS.end()
}
// writeFile(filepath, { name: '王小二', age: 18 })
let arr = ['a.json', 'b.json', 'c.json']
let arrP = []
arr.forEach((element, index) => {
  let num = 100
  if (index == 1) {
    num = 1000000
  }
  let con = path.basename(element, '.json').repeat(num)
  arrP.push(writeFile(element, con))
})
Promise.all(arrP).then((res) => {
  console.log(res)
})
module.exports = {
  readFile,
}
