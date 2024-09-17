let express = require('express');
let router = express.Router();

let UserController = require("../Controller/User")


//SIGN UP
router.post('/signup', UserController.UserSignup);


//LOG IN
router.post('/login', UserController.UserLogin);


//ALL DATA FIND
router.get('/find', UserController.secure, UserController.FindData);


//FIND ONE
router.get('/findid/:id', UserController.secure, UserController.FindId);


//DELETE DATA
router.delete('/delete/:id', UserController.secure, UserController.UserDelete);


//UPDATE DATA
router.patch('/update/:id', UserController.secure, UserController.UserUpdate);


module.exports = router;
