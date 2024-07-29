import model from './model.js';

export const getAssignments = async (cid) => model.find({ course: cid });

export const createAssignment = async (cid, assignment) => {
    delete assignment._id;
    model.create({ ...assignment, course: cid });
};

export const updateAssignment = async (aid, assignment) => model.updateOne({ _id: aid }, { $set: assignment });

export const deleteAssignment = async (aid) => model.deleteOne({ _id: aid });    