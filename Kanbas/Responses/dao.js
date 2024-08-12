import model from './model.js';

export const getResponse = async (qid, uid) => model.findOne({ quiz: qid, user: uid });

export const createResponse = async (qid, uid, response) => model.create({ ...response, quiz: qid, user: uid });

export const updateResponse = async (qid, uid, response) => model.findOneAndUpdate({ quiz: qid, user: uid }, response, { upsert: false });

export const getUserQuizScores = async (uid) => model.find({ user: uid }, {quiz: 1, score: 1});