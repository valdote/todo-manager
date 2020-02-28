import React, { useState } from 'react';
import { TaskCreator, TaskList } from '../components';
import '../styles/styles.css';

interface ITask {
  title: string;
  assignedTo: string;
  description: string;
}

function TaskManager() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  function addToTaskList(newTask: ITask): void {
    const aux = [...taskList];
    aux.push(newTask);
    setTaskList(aux);
  }
 
  function removeFromTaskList(index: number) {
    const aux = [...taskList];
    aux.splice(index, 1);
    setTaskList(aux);
    console.log(index);
  }

  // Everytime that taskList changes will execute the code.
  // I can use it for a console.log.
  React.useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  return (
    <div className="TaskManager">
      <TaskCreator addToTaskList={addToTaskList} />
      <TaskList taskList={taskList} removeTask={removeFromTaskList} />
    </div>
  );
}

export default TaskManager;
