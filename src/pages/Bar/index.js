import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Link from '@material-ui/core/Link';
import GitHub from '@material-ui/icons/GitHub';
import SearchIcon from '@material-ui/icons/Search';

import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  ul:{
    listStyleType: 'none',
    textDecoration:'none',
    margin: 0,
    padding:'0px',
    backgroundColor: "#24292e",
  },
  li:{
    paddingTop:8,
    paddingBottom:8,
    
    textDecoration: 'none',
    marginLeft: 20,
    textAlign:'left',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  listItensNav:{

  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  title: {
    //flexGrow: 0,
    paddingLeft:'10px',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '25ch',
      '&:focus': {
        width: '45ch',
      },
    },
  },
}));

export default function Bar() {
  const classes = useStyles();
  const menuId = 'primary-search-account-menu';
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#24292e"}}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <GitHub />
          </IconButton>
          <div className={classes.search}>
            <InputBase
              placeholder="Search or jump to..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
                    
          <Typography className={classes.title}  >
          <Link style={{ textDecoration: 'none', padding: '6px' }} color="inherit" href="#" >
            Pull request
            </Link>
          <Link style={{ textDecoration: 'none', padding: '6px' }} color="inherit" href="#" >
            Issus
            </Link>
          <Link style={{ textDecoration: 'none', padding: '6px' }} color="inherit" href="#" >
            Marketplace
            </Link>
          <Link style={{ textDecoration: 'none', padding: '6px' }} color="inherit" href="#" >
            Explore
            </Link>
          </Typography>
          <div className={classes.grow} />
          <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          <div className={classes.sectionDesktop} >
          <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
           </div>
        </Toolbar>
      </AppBar>
      <div>
      <ul className={classes.ul}>
         <li className={classes.li}><a style={{ textDecoration: 'none', color:'white'}} className="active" href="#Create Page">Create Page</a></li>
         <li className={classes.li}><a style={{ textDecoration: 'none', color:'white'}}  href="#Manage Pages">Manage Pages</a></li>
         <li className={classes.li}><a style={{ textDecoration: 'none', color:'white'}}  href="#Create Ads">Create Ads</a></li>
         <li className={classes.li}><a style={{ textDecoration: 'none', color:'white'}}  href="#Manage Ads">Manage Ads</a></li>
         
          </ul>
      </div>
    </div>
  );
}
