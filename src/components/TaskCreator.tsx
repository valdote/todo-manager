import React from 'react';
import Button from './Button';
import Input from './Input';
import './styles.css';

function TaskCreator() {
  return (
    <div className="TaskCreator">
      <div style={{ marginTop: '30%' }}>
        TaskCreator
        <form onSubmit={(event) => { event.preventDefault(); console.log(event.target); }}>
          <Input width="90%" marginTop="2%" placeholder="Task title" />
          <Input width="90%" marginTop="2%" placeholder="Asigned to:" />
          <Input width="90%" marginTop="2%" isTextArea placeholder="Description" />
          <Button title="Add" />
        </form>
      </div>
    </div>
  );
}

export default TaskCreator;
