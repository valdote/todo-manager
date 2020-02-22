import React from 'react';
import { TaskCreator } from '../components';
import './styles.css';


function TaskManager() {
  return (
    <div>
      <TaskCreator />
      <div>
        TaskList
      </div>
    </div>
  );
}

export default TaskManager;
