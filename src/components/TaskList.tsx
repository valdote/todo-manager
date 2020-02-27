import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { ITask } from '../interfaces/interfaces';

interface IProps {
  taskList: ITask[];
}
function TaskList({ taskList }: IProps) {
  return (
    <div className="TaskList">
      <Grid container spacing={3}>
        {taskList.map((task, index) => (
          <Grid key={task.title} item xs={12}>
            <Card>
              <CardContent>
                <p>{task.title}</p>
                <p>
                  Assigned to:
                  {task.assignedTo}
                </p>
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
