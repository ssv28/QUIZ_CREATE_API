let express = require('express');
let router = express.Router();

let QuizController = require("../Controller/Quiz")


//SIGN UP
router.post('/create', QuizController.QuizCreate);

//ALL DATA FIND
router.get('/find', QuizController.secure, QuizController.FindData);


//FIND ONE
router.get('/findid/:id', QuizController.FindId);


//DELETE DATA
router.delete('/delete/:id', QuizController.QuizDelete);


//UPDATE DATA
router.patch('/update/:id', QuizController.QuizUpdate);


module.exports = router;

