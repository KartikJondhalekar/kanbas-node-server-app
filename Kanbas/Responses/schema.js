import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
    quiz: String,
    user: String,
    responses: [
        {
            question: Number,
            response: {
                type: Schema.Types.Mixed,
                validate: {
                    validator: function (value) {
                        return typeof value === 'string' || typeof value === 'number';
                    },
                    message: 'fieldName must be either a string or a number'
                }
            }
        }
    ],
    score: Number,
    submittedOn: Date,
    attempts: Number,
    timeTaken: String
}, {
    collection: "responses"
});

export default schema;