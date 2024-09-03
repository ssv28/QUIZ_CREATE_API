let express = require('express');
let router = express.Router();

let QuesController = require("../Controller/Questions")
let UserController = require("../Controller/User")

//SIGN UP
router.post('/create', UserController.secure, QuesController.QuesCreate);

//ALL DATA FIND
router.get('/find', UserController.secure, QuesController.FindData);

//FIND ONE
router.get('/findid/:id', UserController.secure, QuesController.FindId);


//DELETE DATA
router.delete('/delete/:id', UserController.secure, QuesController.QuesDelete);


//UPDATE DATA
router.patch('/update/:id', UserController.secure, QuesController.QuesUpdate);


module.exports = router;

