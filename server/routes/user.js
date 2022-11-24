const express = require('express')
const Cntrl = require('../controllers/user')

const router = express.Router() 

router.post('/add', Cntrl.createUser)
router.put('/update/:id', Cntrl.updateUser)
router.delete('/delete/:id', Cntrl.deleteUser)
router.get('/get/:id', Cntrl.getUserById)
router.get('/get', Cntrl.getUsers)

module.exports = router
