const express = require('express')
const router = express.Router()

const Book = require('./controllers/BookController')

router.get('/book', Book.List)
router.post('/book', Book.Add)

module.exports = router
