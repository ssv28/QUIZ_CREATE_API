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
router.get('/findid/:id', UserController.FindId);


//DELETE DATA
router.delete('/delete/:id', UserController.UserDelete);


//UPDATE DATA
router.patch('/update/:id', UserController.UserUpdate);


module.exports = router;
