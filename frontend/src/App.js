import React from 'react';
import {Grid, Button, Fab, Typography, Paper, makeStyles} from '@material-ui/core';

import ToDoItem from './components/ToDoItem';

import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '3rem 0',
  },
  innerLayout: {
    width: '100%',
    height: '100%',
  },
  headingGrid: {
    width: '100%',
    height: '100%',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {

  },
  subHeading: {

  },
  mainContent: {
    width: '100%',
    height: '100%',
    minHeight: '10rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: '1rem',
    width: '30rem',
    height: '100%',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toDoList: {
    height: '100%',
    width: '100%'
  },
  topGrid: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  clrBtn: {
    left: '13rem'
  },
  title: {
    fontSize: '18px',
    textAlign: 'left',

  },
  addItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem 0'
  },
  margin: {
    margin: theme.spacing(1)
  }
}))

const data = [
  {
    "id": 1,
    "title": "Take out the Laundry",
    "dueDate": "2020-09-26"
  },
  {
    "id": 2,
    "title": "Take out the Trash",
    "dueDate": "2020-09-26"
  },
  {
    "id": 3,
    "title": "Take the kids to school after turning into a Zombie and eat human brains",
    "dueDate": "2020-09-26"
  }
]

function App() {
  const classes = useStyles();

  return (

    <div>
      <Grid className={classes.root}>
        <Grid className={classes.innerLayout}>
          <Grid className={classes.headingGrid}>
            <Typography align='center' variant='h3' gutterBottom> To Do App </Typography>
            <Typography align='center' variant='body2'> Designed and Coded by
              <a href="https://www.github.com/asifhaider995/" rel="noopener noreferrer" target="_blank">@asifhaider995</a>
            </Typography>
            <br />
          </Grid>
          <Grid className={classes.mainContent}>
            <Paper elevation={3} className={classes.paper}>
              <Grid className={classes.topGrid}>
                <Typography className={classes.title}> Current List ({data.length} items)</Typography>
                <Button color='secondary' className={classes.clrBtn}> Clear List </Button>
              </Grid>
              <Grid className={classes.toDoList}>
                {data.map((items, ind) => {
                  return (
                    <ToDoItem key={ind} data={items} />
                  )
                })}
              </Grid>
              <Grid className={classes.addItem}>
                <Fab color="secondary" aria-label="add" className={classes.margin}>
                  <AddIcon />
                </Fab>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
