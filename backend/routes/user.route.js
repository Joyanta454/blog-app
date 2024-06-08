const express = require('express');
const { test, updateUser, deleteUser, getUsers, signout, getUser } = require('../controller/user.controller.js');
const { verifyToken } = require('../utils/verifyUser.js');

const router = express.Router();

router.get('/test',async (req, res)=>{
    
})


router.put('/update/:userId', verifyToken, updateUser);
router.delete('/delete/:userId', verifyToken, deleteUser);
router.post('/signout', signout);
router.get('/getusers', verifyToken, getUsers);
router.get('/:userId', getUser)

module.exports = router;