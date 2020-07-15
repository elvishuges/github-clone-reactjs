import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        borderBottom: '2px',
    },
    container:{
        textAlign:"left"      
    },
    tab:{
        minWidth: 100,
    }
   
}));


export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        < div className={classes.root}>
            <Tabs
                value={value}                
                onChange={handleChange}
                aria-label="simple tabs example"
            >
                <Tab className={classes.tab} label="Item One"   {...a11yProps(0)} />
                <Tab className={classes.tab} label="Item One"   {...a11yProps(1)} />
                <Tab className={classes.tab} label="Item One"   {...a11yProps(2)} />
                <Tab className={classes.tab} label="Item One"   {...a11yProps(3)} />
            </Tabs>
            <Divider />
            <TabPanel value={value} index={0}>
                <Container className={classes.container}>                
                   <div  style={{float:'left'}}>  Popular repositories</div>
                   <div style={{float:'right'}}> Popular repositories</div>  
                </Container> 
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </ div>
    );
}
