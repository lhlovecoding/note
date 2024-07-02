const db = require('./db')
const getList = (params) => {
  return new Promise((resolve, reject) => {
    let sql = `select id,title,cover,DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as created_at from pic 
  where deleted_at is null limit ?,?`
    db.query(
      sql,
      [(params.page - 1) * params.limit, params.limit],
      (err, data) => {
        if (err) {
          console.log(88888888)
          reject(err)
        }
        resolve(data)
      }
    )
  })
}

module.exports = {
  getList,
}
