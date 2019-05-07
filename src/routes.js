const express = require('express')

const routes = express.Router()
const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

routes.get('/', SessionController.create)
routes.post('/signin', SessionController.store)
routes.get('/signup', UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)

routes.post('/app/dashboard', (req, res) => {
  res.render('dashboard')
})
module.exports = routes
