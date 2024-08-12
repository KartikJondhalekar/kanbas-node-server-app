import * as dao from "./dao.js";

export default function QuizRoutes(app) {
    const getQuizzesForCourse = async (req, res) => {
        const quizzes = await dao.getQuizzes(req.params.cid);
        res.json(quizzes);
    };
    app.get("/api/courses/:cid/quizzes", getQuizzesForCourse);

    const createQuiz = async (req, res) => {
        const { cid } = req.params;
        const newQuiz = await dao.createQuiz(cid, req.body);
        res.json(newQuiz);
    };
    app.post("/api/courses/:cid/quizzes", createQuiz);

    const updateQuiz = async (req, res) => {
        const response = await dao.updateQuiz(req.params.qid, req.body);
        res.send(response);
    };
    app.put("/api/quizzes/:qid", updateQuiz);

    const deleteQuiz = async (req, res) => {
        const { qid } = req.params;
        const response = await dao.deleteQuiz(qid);
        res.send(response);
    };
    app.delete("/api/quizzes/:qid", deleteQuiz);
    
}