import React, { useState } from 'react';
import { TaskCreator, TaskList } from '../components';
import '../styles/styles.css';

interface IListItem{
  title: string;
  assignedTo: string;
  description: string;
}

function TaskManager() {
  // const [listOfTask, setListOfTask] = useState<IListItem[]>([]);
  // function getTask(task: IListItem) {

  // }
  return (
    <div className="TaskManager">
      <TaskCreator />
      <TaskList />
    </div>
  );
}

export default TaskManager;
