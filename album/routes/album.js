var express = require('express')
var router = express.Router()
const album = require('../controllers/album')
/* GET home page. */
router.get('/list', album.List)
router.get('/index', album.index)

module.exports = router
