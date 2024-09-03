const mongoose = require('mongoose');

const Schema = mongoose.Schema;   // Create a new schema
const questionSchema = new Schema({

    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QUIZ',
        required: true
    },

    question: {
        type: String,
        required: true
    },

    option: [
        {
            text: {
                type: String,
                required: true
            },

            isCorrect: {
                type: Boolean,
                default: false
            }
        }
    ]


});

const Question = mongoose.model('Question', questionSchema);     // Create a model from the schema

module.exports = Question;  // Export the model
