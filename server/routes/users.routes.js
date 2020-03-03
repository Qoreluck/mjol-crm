const {Router} = require('express')
const router = Router()
const {fetchUsers} = require('../controllers/users.controller')
const passport = require('passport')
  

router.get('/users', 
fetchUsers)


module.exports = router