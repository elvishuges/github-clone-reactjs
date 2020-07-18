import React from 'react';
import './App.css';
import Bar from './pages/Bar'
import Tab from './pages/Tab'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({

  div: {
    padding: theme.spacing(1),
    height:24,
    marginBottom: theme.spacing(1),
  }
}));


function App() {
  const classes = useStyles();
  return (
    <div className="App">
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

export default App;
