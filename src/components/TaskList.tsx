import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { ITask } from '../interfaces/interfaces';

interface IProps {
  taskList: ITask[];
  removeTask: (index: number) => void;
}

function TaskList({ taskList, removeTask }: IProps) {
  function removeCaller(taskIndex: number) {
    return () => {
      removeTask(taskIndex);
    };
  }
  return (
    <div className="TaskList">
      <Grid container spacing={3}>
        {taskList.map((task, index) => (
          <Grid key={task.title} item xs={6}>
            <Card>
              <CardHeader
                title={task.title}
                subheader={task.assignedTo}
                action={(
                  <IconButton arial-label="delete" onClick={removeCaller(index)}>
                    <CloseIcon />
                  </IconButton>
                )}
              />
              <CardContent>
                <p>{task.description}</p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default TaskList;
