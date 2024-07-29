import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
    number: { type: String, required: true, unique: true },
    title: String,
    description: String,
    course: String,
    available: Date,
    until: Date,
    due: Date,
    points: Number
},
    { collection: "assignments" }
);

export default assignmentSchema;