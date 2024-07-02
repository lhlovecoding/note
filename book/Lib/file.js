const fs = require('fs')
const path = require('path')

//读取文件内容
const readFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf-8')
    if (!content.length) {
      return {}
    }
    let data = JSON.parse(content)
    return data
  } catch (e) {
    if (e.code === 'ENOENT') {
      return {}
    }
  }
}
// readFiles('../Store/data.json')
//写入文件内容
const writeFile = (filePath, content) => {
  fs.writeFileSync(filePath, JSON.stringify(content), 'utf-8')
  return
}
// writeFile('../Store/data.json', { title: '123' })
module.exports = {
  readFile,
  writeFile,
}
