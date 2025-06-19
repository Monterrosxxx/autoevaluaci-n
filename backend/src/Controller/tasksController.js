/*
  Collection name: tasks
  {
    "title": String
    "description": String
    "completed": Boolean
  }
*/

const tasksController = {};

import Tasks from "../Model/Tasks.js";

tasksController.getAllTasks = async (req, res) => {
    try {
        const tasks = await Tasks.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tasks", error: error.message });
    }
};

tasksController.createTask = async (req, res) => {
    try {
        const { title, description, completed } = req.body;

        const newTask = new Tasks({
            title,
            description,
            completed
        });

        await newTask.save();
        res.status(201).json({ message: "Task created successfully" });
    } catch (error) {
        res.status(400).json({ message: "Error creating task", error: error.message });
    }
};

tasksController.deleteTask = async (req, res) => {
    try {
        const deletedTask = await Tasks.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting task", error: error.message });
    }
};

tasksController.updateTask = async (req, res) => {
    try {
        const { title, description, completed } = req.body;

        const updatedTask = await Tasks.findByIdAndUpdate(
            req.params.id, 
            {
                title,
                description,
                completed
            }, 
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json({
            message: "Task updated successfully",
            task: updatedTask
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating task", error: error.message });
    }
};

export default tasksController;