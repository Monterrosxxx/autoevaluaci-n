import express from 'express';

import taskRoutes from './src/Routes/task.js';

const app = express();

app.use(express.json());

app.use('/api/tasks', taskRoutes);

export default app;