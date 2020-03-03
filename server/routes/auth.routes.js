const {Router} = require('express')
const router = Router()
const {login, createUser} = require('../controllers/auth.controller')
const upload = require( '../middleware/upload' )


router.post('/login', login)

router.post('/create',upload.single( 'image' ), createUser)



module.exports = router