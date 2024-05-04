// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput/TaskInput';
import TaskList from './components/TaskList/TaskList';

function App() {
  return (
    <Provider store={store}>
      <div className="container mt-5">
        <div className="card">
          <h1 className="card-header text-center">Advanced To-Do Application</h1>
          <div className="card-body">
            <TaskInput />
            <TaskList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
