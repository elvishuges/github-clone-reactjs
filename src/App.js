import React from 'react';
import './App.css';
import Bar from './pages/Bar'
import Tab from './pages/Tab'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Routes  from "./pages/Routes";

import client  from "./services/graphql/coinbase.service";
import { ApolloProvider } from '@apollo/client';

const useStyles = makeStyles((theme) => ({

  div: {
    padding: theme.spacing(1),
    height:48,
    marginBottom: theme.spacing(1),
  }
}));


function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
