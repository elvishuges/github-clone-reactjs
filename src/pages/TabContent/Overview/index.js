import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

import CardRepository from './components/CardRepository'

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "left",
    paddingLeft: 2,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function CSSGrid() {
  const classes = useStyles();

  return (    
      <Container className={classes.container}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div style={{ float: 'left' }}>  Popular repositories</div>
            <div style={{ float: 'right' }}> Popular repositories</div>
          </Grid>
          <Grid item xs={6}>
            <CardRepository />
          </Grid>
          <Grid item xs={6}>
            <CardRepository />
          </Grid>
        </Grid>
      </Container>
  );
}
