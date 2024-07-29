import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
    const updateAssignment = async (req, res) => {
        const response = await dao.updateAssignment(req.params.aid, req.body);
        res.send(response);
    };
    app.put("/api/assignments/:aid", updateAssignment);

    const createAssignment = async (req, res) => {
        const { cid } = req.params;
        const newAssignment = await dao.createAssignment(cid, req.body);
        res.json(newAssignment);
    };
    app.post("/api/courses/:cid/assignments", createAssignment);

    const deleteAssignment = async (req, res) => {
        const { aid } = req.params;
        const response = await dao.deleteAssignment(aid);
        res.send(response);
    }
    app.delete("/api/assignments/:aid", deleteAssignment);

    const getAssignments = async (req, res) => {
        const assignments = await dao.getAssignments(req.params.cid);
        res.json(assignments);
    };
    app.get("/api/courses/:cid/assignments", getAssignments);
}