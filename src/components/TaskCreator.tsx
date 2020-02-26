import React from 'react';
import Button from './Button';
import Input from './Input';


function TaskCreator() {
  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(event.target.taskTitle.value);
  }
  return (
    <div className="TaskCreator">
      <div className="TaskForm">
        TaskCreator
        <form onSubmit={handleSubmit}>
          <Input width="90%" marginTop="2%" name="taskTitle" placeholder="Task title" />
          <Input width="90%" marginTop="2%" name="asignedTo" placeholder="Asigned to:" />
          <Input width="90%" marginTop="2%" name="taskDescription" isTextArea placeholder="Description" />
          <Button display="block" marginTop="2%" title="Add" />
        </form>
      </div>
    </div>
  );
}

export default TaskCreator;
