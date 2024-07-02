const List = (req, res) => {
  // req.body //body
  // req.query //就是url ？ id=3&name=zhangsan
  // req.params //就是路径上的参数
  res.send('获取数据')
}
const Create = (req, res) => {
  res.send('创建书记')
}
const Update = (req, res) => {
  res.send('更新')
}
const UpdateStatus = (req, res) => {
  res.send('更新状态')
}
const Delete = (req, res) => {
  res.send('删除')
}
const getBookByID = () => {}
const getBookByName = () => {}
const getBookByCategory = () => {}

module.exports = {
  List,
  Create,
  Update,
  UpdateStatus,
  Delete,
  getBookByID,
  getBookByName,
  getBookByCategory,
}
