import mongoose from "mongoose";

const questionsSchema = new mongoose.Schema({
    number: Number,
    title: String,
    question: String,
    points: Number,
    choices: [
        {
            number: Number,
            choice: String
        }
    ],
    correctChoice: [Number],
    type: String
},
    { collection: "questions" }
);

const QuizSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        course: String,
        type: { type: String, default: "Graded Quiz" },
        points: Number,
        assignmentGroup: { type: String, default: "Quizzes" },
        for: String,
        shuffleAnswers: { type: Boolean, default: true },
        timeLimit: { type: Boolean, default: true },
        timeAllowed: { type: Number, default: 20 },
        multipleAttempts: { type: Boolean, default: false },
        totalAttempts: { type: Number, default: 1 },
        showCorrectAnswers: { type: Boolean, default: true },
        accessCode: { type: String, default: "" },
        oneQuestionAtATime: { type: Boolean, default: true },
        webcamRequired: { type: Boolean, default: false },
        lockQuestionsAfterAnswering: { type: Boolean, default: false },
        due: Date,
        available: Date,
        until: Date,
        isPublished: Boolean,
        questions: [questionsSchema]
    },
    { collection: "quizzes" }
);

export default QuizSchema;