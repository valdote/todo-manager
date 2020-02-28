import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { ITask } from '../interfaces/interfaces';

interface IProps {
  addToTaskList: (newTask: ITask) => void;
}

function TaskCreator({ addToTaskList }: IProps) {
  const [text, setText] = useState({
    taskTitle: '',
    assignedTo: '',
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
      assignedTo: '',
      taskDescription: '',
    });
  }

  function handleSubmit(event: any) {
    const newTask: ITask = {
      title: event.target.taskTitle.value,
      assignedTo: event.target.assignedTo.value,
      description: event.target.taskDescription.value,
      isCompleted: false,
    };
    addToTaskList(newTask);
    removeValues();
    event.preventDefault();
  }

  return (
    <div className="TaskCreator">
      <div className="TaskForm">
        TaskCreator
        <form onSubmit={handleSubmit}>
          <Input
            value={text.taskTitle}
            onChange={handleChange}
            marginTop="2%"
            name="taskTitle"
            placeholder="Task title"
            required
          />
          <Input
            value={text.assignedTo}
            onChange={handleChange}
            marginTop="2%"
            name="assignedTo"
            placeholder="Asigned to:"
            required
          />
          <Input
            value={text.taskDescription}
            onChange={handleChange}
            marginTop="2%"
            name="taskDescription"
            rows={4}
            isMultiline
            placeholder="Description"
            required
          />
          <Button marginTop="2%" title="Add" />
        </form>
      </div>
    </div>
  );
}

export default TaskCreator;
