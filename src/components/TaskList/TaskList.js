// TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/actions';
import Task from '../Task/Task';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        <ul className="list-group">
          {tasks.map(task => (
            <Task key={task.id} task={task} onDelete={handleDelete} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
