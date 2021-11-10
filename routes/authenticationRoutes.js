const router  = require('express').Router()
const AuthenticationController = require('../controllers/authentication.controller')

router.post('/login', AuthenticationController.login)

router.post('/register', AuthenticationController.register)

module.exports = router;