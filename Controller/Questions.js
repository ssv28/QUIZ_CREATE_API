let QUIZ = require('../Models/quiz');
let jwt = require("jsonwebtoken")



exports.QuesCreate = async function (req, res, next) {
    try {

        let quizCreate = await QUIZ.create(req.body)

        res.status(200).json({
            status: "Success",
            message: "Quiz Create SuccessFully!",
            data: quizCreate

        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.FindData = async function (req, res, next) {
    try {

        let quesFind = await QUIZ.find()
        var token = jwt.sign({ id: quesFind._id }, 'QUIS');


        res.status(200).json({
            status: "Success",
            message: "Question Found SuccessFully!",
            data: token

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.FindId = async function (req, res, next) {
    try {

        let quesFind = await QUIZ.findById(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Question Find SuccessFully!",
            data: quesFind

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.QuesDelete = async function (req, res, next) {
    try {

        await QUIZ.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Question Delete SuccessFully!",
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.QuesUpdate = async function (req, res, next) {
    try {

        console.log("===>>>", req.body);

        let quesUpdate = await QUIZ.findByIdAndUpdate(req.params.id, req.body, { new: true })

        console.log(req.params.id);
        console.log("~~~~~~>>>>", req.body);

        console.log(">>>>>", quesUpdate);

        res.status(200).json({
            status: "Success",
            message: "Questions Update SuccessFully!",
            data: quesUpdate
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

