import express from 'express';

const router = express.Router();
import tasksController from '../Controller/tasksController';

router.route('/')
    .get(tasksController.getAllTasks)
    .post(tasksController.crreateTask);

router.route('/:id')
    .delete(tasksController.deleteTask)
    .put(tasksController.updateTask);

export default router;