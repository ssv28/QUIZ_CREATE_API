let QUIZ = require('../Models/quiz');
const bcrypt = require('bcrypt');
let jwt = require("jsonwebtoken")

exports.secure = async function (req, res, next) {
    try {

        let token = req.headers.authorization
        console.log(req.headers.authorization);
        if (!token) throw new Error("Please enter a token")

        let verify = jwt.verify(token, "QUIS")
        console.log(verify);

        let userVerify = await User.findById(verify.id)
        if (!userVerify) throw new Error("User not found")

        next()

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.QuizCreate = async function (req, res, next) {
    try {

        req.body.password = await bcrypt.hash(req.body.password, 10)
        let quizCreate = await User.create(req.body)

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

        let quizFind = await QUIZ.find()

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

        req.body.password = await bcrypt.hash(req.body.password, 10)
        let quizUpdate = await QUIZ.findByIdAndUpdate(req.params.id, req.body, { new: true })

        console.log(req.params.id);
        console.log("~~~~~~>>>>", req.body);

        console.log(">>>>>", quizUpdate);

        res.status(200).json({
            status: "Success",
            message: "User Update SuccessFully!",
            data: quizUpdate
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

