import express from 'express';

const router = express.Router();
import tasksController from "../Controller/tasksController.js"; 
router.route('/')
    .get(tasksController.getAllTasks)
    .post(tasksController.createTask);

router.route('/:id')
    .delete(tasksController.deleteTask)
    .put(tasksController.updateTask);

export default router;