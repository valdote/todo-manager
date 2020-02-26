import React from 'react';
import { TaskCreator, TaskList } from '../components';
import '../styles/styles.css';

function TaskManager() {
  return (
    <div className="TaskManager">
      <TaskCreator />
      <TaskList />
    </div>
  );
}

export default TaskManager;
