import React from 'react';
import Bar from './Bar'
import Tab from './Tab'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({

  div: {
    padding: theme.spacing(1),
    height:48,
    marginBottom: theme.spacing(1),
  }
}));


function Main() {
  const classes = useStyles();
  return (
    <div >
      <Bar></Bar>
      <Grid container >
        <Grid item sm={3} xs={12}>
           <div className={classes.div}></div>
           <Divider/>
            Info
        </Grid>
        <Grid item sm={9} xs={12}>
          <Tab></Tab>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
