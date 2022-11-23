const express = require('express')

const userCntrl = require('../controllers/user')

const router = express.Router() 

router.post('/add', userCntrl.createUser)
router.put('/update/:id', userCntrl.updateUser)
router.delete('/delete/:id', userCntrl.deleteUser)
router.get('/get/:id', userCntrl.getUserById)
router.get('/get', userCntrl.getUsers)
router.post('/login', userCntrl.loginUser)

module.exports = router
