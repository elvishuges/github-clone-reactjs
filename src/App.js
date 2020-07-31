import React from 'react';
import './App.css';
import Bar from './pages/Bar'
import Tab from './pages/Tab'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Routes  from "./pages/Routes";
import { ApolloProvider } from '@apollo/client';
import client  from "./services/graphql/clientConfig";


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
    <ApolloProvider client={client}>
    <div className="App">
      <Routes/>
    </div>
    </ApolloProvider>
  );
}

export default App;
