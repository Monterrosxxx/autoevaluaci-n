/*

  Collection name: tasks
  {
  "title": String
  "description": String
  "completed": Boolean
  }

*/

import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    }, {
        timestamps: true,
        strict: true
});

export default model('Task', taskSchema);