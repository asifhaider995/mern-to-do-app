import React from 'react';
import {Grid, Typography, Paper, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    border: '1px solid black',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '100%'
  }
}))

function App() {
  const classes = useStyles();

  return (

    <div>
      <Grid className={classes.root}>
        <Grid className={classes.innerLayout}>
          <Grid className={classes.headingGrid}>
            <Typography align='center' variant='h3'> To Do App </Typography>
            <Typography align='center' variant='h5'> Designed and Coded by
              <a href="https://www.github.com/asifhaider995/" rel="noopener noreferrer" target="_blank">@asifhaider995</a>
            </Typography>
          </Grid>
          <Grid className={classes.mainContent}>
            <Paper className={classes.paper}>
              ToDo List on board
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
