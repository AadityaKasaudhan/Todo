// TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    dispatch(addTask(task));
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={handleChange}
          className="form-control"
        />
        <button type="submit" className="btn btn-primary">Add Task</button>
      </div>
    </form>
  );
};

export default TaskInput;
