let Question = require('../Models/questions');
let jwt = require("jsonwebtoken")

exports.QuesCreate = async function (req, res, next) {
    try {

        let QuesCreate = await Question.create(req.body)

        res.status(200).json({
            status: "Success",
            message: "Question Create SuccessFully!",
            data: QuesCreate

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

        let quesFind = await Question.find().populate('quizID')


        res.status(200).json({
            status: "Success",
            message: "Question Found SuccessFully!",
            data: quesFind

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

        let quesFind = await Question.findById(req.params.id)
        if(!quesFind) throw new Error ("Question not found!")

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

        await Question.findByIdAndDelete(req.params.id)

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

        let quesUpdate = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if(!quesUpdate) throw new Error ("Question not found!")


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

