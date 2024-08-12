import * as dao from "./dao.js";

export default function ResponseRoutes(app) {
    const getResponseForQuiz = async (req, res) => {
        const { qid, uid } = req.params;
        const response = await dao.getResponse(qid, uid);
        res.json(response);
    };
    app.get("/api/quizzes/:qid/response/:uid", getResponseForQuiz);

    const updateResponse = async (req, res) => {
        const { qid, uid } = req.params;
        const updatedResponse = await dao.updateResponse(qid, uid, req.body);
        res.json(updatedResponse);
    };
    app.put("/api/quizzes/:qid/response/:uid", updateResponse);

    const createResponse = async (req, res) => {
        const { qid, uid } = req.params;
        const newResponse = await dao.createResponse(qid, uid, req.body);
        res.json(newResponse);
    };
    app.post("/api/quizzes/:qid/response/:uid", createResponse);

    const getUserQuizScores = async (req, res) => {
        const { uid } = req.params;
        const scores = await dao.getUserQuizScores(uid);
        res.json(scores);
    };
    app.get("/api/quizzes/scores/:uid", getUserQuizScores);
}