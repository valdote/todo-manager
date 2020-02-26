import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';


function TaskCreator() {
  const [text, setText] = useState({
    taskTitle: '',
    asignedTo: '',
    taskDescription: '',
  });
  function handleChange(event: any) {
    const { name } = event.target;
    const { value } = event.target;
    setText({
      ...text,
      [name]: value,
    });
  }
  function removeValues() {
    setText({
      taskTitle: '',
      asignedTo: '',
      taskDescription: '',
    });
  }
  function handleSubmit(event: any) {
    const taskTitle = event.target.taskTitle.value;
    const asignedTo = event.target.asignedTo.value;
    const taskDescription = event.target.taskDescription.value;
    console.log(taskTitle, asignedTo, taskDescription);
    removeValues();
    event.preventDefault();
  }

  return (
    <div className="TaskCreator">
      <div className="TaskForm">
        TaskCreator
        <form onSubmit={handleSubmit}>
          <Input value={text.taskTitle} onChange={handleChange} marginTop="2%" name="taskTitle" placeholder="Task title" />
          <Input value={text.asignedTo} onChange={handleChange} marginTop="2%" name="asignedTo" placeholder="Asigned to:" />
          <Input value={text.taskDescription} onChange={handleChange} marginTop="2%" name="taskDescription" isTextArea placeholder="Description" />
          <Button marginTop="2%" title="Add" />
        </form>
      </div>
    </div>
  );
}

export default TaskCreator;
