//Now this is the folder for all the apis/routes 
//Here don't import app but do this
//You don't have to write logic inside the routes/apis and the logics for routes are defined in controllers folder
const express = require('express');
const authController = require("../controllers/auth.controller")

const router = express.Router();

/* POST /api/auth/register */
router.post('/register', authController.registerUser)

module.exports = router;