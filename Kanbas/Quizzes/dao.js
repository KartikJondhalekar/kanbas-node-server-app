import model from "./model.js";

export const getQuizzes = async (cid) => model.find({ course: cid });

export const createQuiz = async (cid, quiz) => model.create({ ...quiz, course: cid });

export const updateQuiz = async (qid, quiz) => model.updateOne({ _id: qid }, { $set: quiz });

export const deleteQuiz = async (qid) => model.deleteOne({ _id: qid });

