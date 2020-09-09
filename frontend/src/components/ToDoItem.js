import React, {useState} from 'react';
import {Grid, Paper, Fab, Typography, TextField, Card, makeStyles} from '@material-ui/core';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1rem 0',
  },
  paper: {
    width: '40rem',
    minHeight: '5rem',
  },
  cardAction: {
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  toDoTitle: {
    textAlign: 'justify',
    fontSize: '28px',
    marginBottom: '1rem'
  },
  toDoDueDate: {
    textAlign: 'left',
    fontSize: '13px'
  },
  content: {
    width: '18rem',
    marginRight: '1rem',
  },
  action: {
    width: '9rem',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: '1.75rem'
  },
  margin: {
    margin: theme.spacing(1)
  }

}))

function ToDoItem (props) {
  const titleData = props.data.title;
  const due = (props.data.dueDate);
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(titleData);
  const [dueDate, setDueDate] = useState(due);
  const classes = useStyles();

  const handleChange = (e) => {
    e.preventDefault();
    if(e.target.name === 'title') {
      setTitle(e.target.value)
    } else if(e.target.name === 'due') {
      setDueDate(e.target.value)
    }
  }

  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(true);
  }

  const handleCancel = (e) => {
    e.preventDefault();
    setEdit(false);
  }

  const finalItem = (
    <Paper className={classes.cardAction}>
      <Grid className={classes.content}>
        <Typography style={titleData.length > 20 ? {fontSize: '16px'}:null} className={classes.toDoTitle}> {titleData} </Typography>
        <Typography className={classes.toDoDueDate}> Due: {due} </Typography>
      </Grid>
      <Grid className={classes.action}>
        <Fab onClick={handleEdit} color="primary" aria-label="edit" className={classes.margin}>
          <EditIcon />
        </Fab>
        <Fab color="secondary" aria-label="delete" className={classes.margin}>
          <DeleteForeverIcon />
        </Fab>
      </Grid>
    </Paper>
  )

  const editItem = (
    <Paper className={classes.cardAction}>
      <Grid className={classes.content}>
        <Typography className={classes.toDoTitle}> <TextField name='title' onChange={handleChange} value={title}/> </Typography>
        <Typography className={classes.toDoDueDate}> Due: <TextField name='due' onChange={handleChange} value={dueDate}/> </Typography>
      </Grid>
      <Grid className={classes.action}>
        <Fab color="secondary" aria-label="confirm" className={classes.margin}>
          <CheckIcon />
        </Fab>
        <Fab color="secondary" onClick={handleCancel} aria-label="cancel" className={classes.margin}>
          <CloseIcon />
        </Fab>
      </Grid>
    </Paper>
  )

  return (
    <Grid className={classes.root}>
      <Card>
        <Paper elevation={10} className={classes.paper}>
          { edit ? editItem : finalItem}
        </Paper>
      </Card>
    </Grid>
  )
}

export default ToDoItem;
