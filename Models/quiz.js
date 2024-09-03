const mongoose = require('mongoose');

const Schema = mongoose.Schema;   // Create a new schema
const quizDataSchema = new Schema({

    title: {
        type: String,
        required: true,
        // trim: true
    },

    description: {
        type: String,
        // trim: true
    },

    questions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'
        }
    ],

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }


});

const QUIZ = mongoose.model('QUIZ', quizDataSchema);     // Create a model from the schema

module.exports = QUIZ;  // Export the model
