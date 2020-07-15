import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Link from '@material-ui/core/Link';
import GitHub from '@material-ui/icons/GitHub';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  growIcon: {
    flexGrow: 1,
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  gitHubIcon: {
    marginLeft:0, 
    color: 'white'
  },
  menuContent:{
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
 
  menuIcon: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  ul: {
    listStyleType: 'none',
    textDecoration: 'none',
    margin: 0,
    padding: '0px',
    backgroundColor: "#24292e",
  },
  li: {
    paddingTop: 8,
    paddingBottom: 8,
    borderTop: '10px',//    
    textDecoration: 'none',
    marginLeft: 20,
    marginRight: 20,
    fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
    borderTop: 'solid 1px #45494d',
    textAlign: 'left',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  title: {
    //flexGrow: 0,
    fontSize: '14px',
    fontWeight: "bold",
    color: '#F9E7E7',
    paddingLeft: '10px',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    display: 'none',
    borderRadius: '5px',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: '10%',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(),
      width: 'auto',
      display: 'flex',
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

    padding: '5px 5px 5px 5px',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '25ch',
      '&:focus': {
        width: '50ch',
      },
    },
  },
}));



export default function Bar(props) {
  const classes = useStyles();
  const menuId = 'primary-search-account-menu';
  const [showMenu, setshowMenu] = React.useState(false);
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#24292e" }}>
        <Toolbar style={{minHeight:0, paddingLeft:10,paddingRight:10}}>

          <IconButton onClick={() => {
              setshowMenu(!showMenu);
            }} className={classes.menuIcon} style={{ color: 'white' }} >
            <MenuIcon />            
          </IconButton>

          <div className={classes.growIcon} />

          <IconButton className={classes.gitHubIcon}  >
            <GitHub style={{ fontSize: '30' }}   />
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
      <div className={classes.menuContent}>
      {showMenu ? (
        <div >
          <ul className={classes.ul}>
            <li className={classes.li}><a style={{ fontSize: '14px', fontWeight: "bold", textDecoration: 'none', color: '#F9E7E7' }} href="#Manage Pages">Dasboard</a></li>
            <li className={classes.li}><a style={{ fontSize: '14px', fontWeight: "bold", textDecoration: 'none', color: '#F9E7E7' }} href="#Manage Pages">Pull request</a></li>
            <li className={classes.li}><a style={{ fontSize: '14px', fontWeight: "bold", textDecoration: 'none', color: '#F9E7E7' }} href="#Create Ads">Issues</a></li>
            <li className={classes.li}><a style={{ fontSize: '14px', fontWeight: "bold", textDecoration: 'none', color: '#F9E7E7' }} href="#Manage Ads">Marketplace</a></li>
            <li className={classes.li}><a style={{ fontSize: '14px', fontWeight: "bold", textDecoration: 'none', color: '#F9E7E7' }} href="#Manage Ads">Explore</a></li>
            <li className={classes.li}><a style={{ fontSize: '14px', fontWeight: "bold", textDecoration: 'none', color: '#F9E7E7' }} href="#Manage Ads">elvishuges</a></li>
            <li className={classes.li}><a style={{ fontSize: '14px', fontWeight: "bold", textDecoration: 'none', color: '#F9E7E7' }} href="#Manage Ads">Sing out</a></li>
          </ul>
        </div>
      ) :
        (
          null
        )
      }
      </div>
      {/* <Container>
        <Box my={2}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container> */}
    </div>
  );
}
