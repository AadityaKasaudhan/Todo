// Task.js
import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {task.title}
      <button onClick={() => onDelete(task.id)} className="btn btn-danger">Delete</button>
    </li>
  );
};

export default Task;
