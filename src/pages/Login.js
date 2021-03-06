import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import GitHub from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Redirect } from 'react-router'
import { useLazyQuery} from '@apollo/client';
import { LOGIN } from './../query/login'
import {setToken} from './../store/auth'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
       made with S2 by Elvis Huges
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Login() {

  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  var buttonText = "Login"

  const [handleClick, { called, loading,error, data }] = useLazyQuery(
    LOGIN
  );

  if (loading) buttonText = "loading..."

  if (error) {
    buttonText = "Error ao logar..."
  }

  if (data) {
    setToken(data.token).then((response)=>
        <Redirect to='/main' />
    )
  }

  return (

    <Grid container component="main" className={classes.root}>
       <Grid item xs={12} sm={7} md={8}  className={classes.image} >
      </Grid>
      <Grid item xs={12} sm={5} md={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <GitHub />
          </Avatar>
          <Typography component="h1" variant="h5">
            Clone github
          </Typography>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              size="small"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              size="small"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              disabled={loading}
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={()=> handleClick()}
            >
              {buttonText}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
        </div>
      </Grid>
    </Grid>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    height:"100%",
    [theme.breakpoints.down('xs')]: {
      height:"20%",
    },
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    color: 'black',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: 14,

  },
}));