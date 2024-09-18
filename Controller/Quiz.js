let QUIZ = require('../Models/quiz');
let jwt = require("jsonwebtoken")



exports.QuizCreate = async function (req, res, next) {
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
        // let quizFind = await QUIZ.find().populate("Question")

        let quizFind = await QUIZ.find().populate('questions').populate("createdBy")

        res.status(200).json({
            status: "Success",
            message: "Quiz Data Found SuccessFully!",
            data: quizFind

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

        let quizFind = await QUIZ.findById(req.params.id)
        if (!quizFind) throw new Error('Quiz not found');

        res.status(200).json({
            status: "Success",
            message: "Quiz Data Find SuccessFully!",
            data: quizFind

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.QuizDelete = async function (req, res, next) {
    try {

        await QUIZ.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Quiz Data Delete SuccessFully!",
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.QuizUpdate = async function (req, res, next) {
    try {

        console.log("===>>>", req.body);

        let quizUpdate = await QUIZ.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!quizUpdate) throw new Error ('Quiz not found');

        console.log(req.params.id);
        console.log("~~~~~~>>>>", req.body);

        console.log(">>>>>", quizUpdate);

        res.status(200).json({
            status: "Success",
            message: "Quiz Data Update SuccessFully!",
            data: quizUpdate
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}
