import e from "cors";
import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
    const updateModule = async (req, res) => {
        const response = await dao.updateModule(req.params.mid, req.body);
        res.send(response);
    };
    app.put("/api/modules/:mid", updateModule);

    const deleteModule = async (req, res) => {
        const response = await dao.deleteModule(req.params.mid);
        if (response.deletedCount === 0) {
            res.status(404).json({ message: `Unable to delete the module` });
            return;
        }
        res.sendStatus(200);
    };
    app.delete("/api/modules/:mid", deleteModule);

    const createCourse = async (req, res) => {
        const course = await dao.createCourse(req.params.cid, req.body);
        res.json(course);
    };
    app.post("/api/courses/:cid/modules", createCourse);

    const getAllModules = async (req, res) => {
        const modules = await dao.getAllModules(req.params.courseId);
        res.json(modules);
    };
    app.get("/api/courses/:courseId/modules", getAllModules);
}

