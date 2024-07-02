const express = require('express')
const router = express.Router()
const Book = require('./controllers/Book.js')

router.get('/book', Book.List)
router.get('/book/:id', Book.getBookByID)
router.post('/book', Book.Create)
router.put('/book/:id', Book.Update)
router.patch('/book/:id', Book.UpdateStatus)
router.delete('/book/:id', Book.Delete)
module.exports = router
