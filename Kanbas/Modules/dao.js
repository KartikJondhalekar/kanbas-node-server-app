import model from "./model.js";

export const getAllModules = (cid) => model.find({ course: cid });

export const createCourse = (cid, module) => model.create({ ...module, course: cid });

export const deleteModule = (mid) => model.deleteOne({ _id: mid });

export const updateModule = (mid, module) => model.updateOne({ _id: mid }, { $set: module });