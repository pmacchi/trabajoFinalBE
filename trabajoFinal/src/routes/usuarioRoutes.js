const express = require('express');
const { addUserController } = require('../controller/userController');
const router = express.Router();

router.post('/user', addUserController)


module.exports = router;