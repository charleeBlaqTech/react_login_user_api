const express           = require("express");
const router            = express.Router();
const authController   = require('../controllers/authController')


// =================POST ROUTE TO LOGIN USER WITH FORM DATA==============
router.route('/user/login').post(authController.loginUser);
router.route('/user/signup').post(authController.registerUser);


module.exports= router;