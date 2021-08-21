const express = require('express');
const router = express.Router();
const emailRoute = require('../controllers/emailController');

router.post('/', emailRoute.emailController);

module.exports = router;