import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { ITask } from '../interfaces/interfaces';

// TODO: I need to implement styleComponents or check makeStyles from material-ui.
const useStyles = makeStyles(() => createStyles({
  doneIcon: {
    marginLeft: 'auto',
  },
  doneEffect: {
    textDecoration: 'line-through',
  },
}));

interface IProps {
  taskList: ITask[];
  removeTask: (index: number) => void;
}

function TaskList({ taskList, removeTask }: IProps) {
  const classes = useStyles();

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
                  <IconButton
                    arial-label="delete"
                    onClick={removeCaller(index)}
                  >
                    <CloseIcon />
                  </IconButton>
                )}
              />
              <CardContent>
                <p>{task.description}</p>
              </CardContent>
              <CardActions>
                <IconButton
                  className={classes.doneIcon}
                  aria-label="Task done"
                >
                  <DoneIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default TaskList;
