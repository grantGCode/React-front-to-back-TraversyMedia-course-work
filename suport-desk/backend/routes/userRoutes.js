const express = require('express')
const router = express.Router()
const {registerUser, loginUser} = require('../controllers/useControllers')

router.post('/', registerUser)
router.post('/login', loginUser)


module.exports = router