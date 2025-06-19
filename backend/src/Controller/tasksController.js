/*

  Collection name: tasks
  {
  "title": String
  "description": String
  "completed": Boolean
  }

*/

const tasksController = {};

import Tasks from "../Model/Tasks";

tasksController.getAllTasks = async (req, res) => {
    const tasks = await Tasks.find();
    res.json(tasks);
};

tasksController.crreateTask = async (req, res) => {
    const { tittle, description, completed } = req.body;

    const newTask = new Tasks({
        tittle,
        description,
        completed
    });

    await newTask.save();
    res.json({ message: "Task created successfully" });
};

tasksController.deleteTask = async (req, res) => {
    const deleteClient = await Tasks.findByIdAndDelete(req.params.id);
    res.json({
        message: "Task deleted successfully",
    });
};

tasksController.updateTask = async (req, res) => {
    const { tittle, description, completed } = req.body;

    const updatedTask = await Tasks.findByIdAndUpdate(req.params.id, {
        tittle,
        description,
        completed
    }, { new: true });

    res.json({
        message: "Task updated successfully",
    });
};

export default tasksController;