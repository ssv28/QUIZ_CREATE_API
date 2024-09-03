let express = require('express');
let router = express.Router();

let QuizController = require("../Controller/Quiz")
let UserController = require("../Controller/User")

//SIGN UP
router.post('/create', UserController.secure, QuizController.QuizCreate);

//ALL DATA FIND
router.get('/find', UserController.secure, QuizController.FindData);

//FIND ONE
router.get('/findid/:id', UserController.secure, QuizController.FindId);


//DELETE DATA
router.delete('/delete/:id', UserController.secure, QuizController.QuizDelete);


//UPDATE DATA
router.patch('/update/:id', UserController.secure, QuizController.QuizUpdate);


module.exports = router;

