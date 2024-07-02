const file = require('../Lib/file')
const path = require('path')
//获取书籍列表
const List = (req, res) => {
  //获取文件内容
  let data = file.readFile('./Store/data.json')
  res.json(data.book.list)
}
//添加书籍列表
const Add = async (req, res) => {
  let bookImg = await moveFile(req.files.bookImg)
  console.log(bookImg)
  //做一些列的判断验证数据是否合法
  //获取文件内容
  let data = file.readFile('./Store/data.json')
  if (!data.book) {
    data.book = {}
  }
  if (!data.book.list) {
    data.book.list = []
  }
  bookImg = bookImg.map((img) => {
    return `${req.protocol}://${req.host}":3001"/book_img/${img}`
  })
  data.book.list.push({
    title: req.body.book_name,
    book_img: bookImg,
  })

  //写入到文件中
  file.writeFile('./Store/data.json', data)
  res.json({ code: 200, msg: '添加成功', data: data.book.list })
}

//生成唯一的文件名
function createFileName() {
  return Date.now() + Math.random().toString(36).substr(2)
}
/**
 * name: 批量处理上传文件
 * params: files文件对象
 * return: Array[] 文件名数组
 * desc: 移动文件到指定目录
 *
 */
async function moveFile(files) {
  const filesPromise = []
  //循环处理上传的文件
  files.forEach((tmpFile, index) => {
    let p = new Promise((resolve, reject) => {
      let filename = createFileName() + path.extname(tmpFile.name)
      let imgPath = path.join('./', 'static', 'book_img', filename)
      tmpFile.mv(imgPath, (err) => {
        if (index == 1) {
          resolve('第' + (index + 1) + '个文件上传失败')
        }
        if (err) {
          resolve(err)
        }
        resolve(filename)
      })
    })
    filesPromise.push(p)
  })
  return await Promise.all(filesPromise)
}

module.exports = {
  List,
  Add,
}
