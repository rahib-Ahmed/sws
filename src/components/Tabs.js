import React from 'react';
import '../App.css';
import { makeStyles, withStyles, useTheme  } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import { TabPanel } from 'devextreme-react';
import Piechart from './Piechart';
import Storage from './Storage';
import Composition from './Composition';


function a11yProps(index) {
  
    return {
      id: `action-tab-${index}`,
      'aria-controls': `action-tabpanel-${index}`,
    };
  }

const StyledTabs = withStyles({
    root: {
    borderRadius: 25,
    color: "white",
 }
})(Tabs);

const tab_slider = makeStyles(() => ({
  root: {
    backgroundColor: 'rgb(121,161,114)',
    width: '95%',
    borderRadius: 25,
  }
}));

function Tabsbutton(){

  


const classes = tab_slider();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
//   const transitionDuration = {
//     enter: theme.transitions.duration.enteringScreen,
//     exit: theme.transitions.duration.leavingScreen,
//   };

  return (
    <div>
      <div className="cn2">
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
      >
  
        <Piechart
        index={0}
        value={value}
        dir={theme.direction}
        />
 
        <Storage />
        <Composition />
         <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
      </div>

      <div className="cn3">
        <div className={classes.root}>
     
        <StyledTabs
        className="hello"
          value={value}
          TabIndicatorProps={{
            style: {
                backgroundColor: 'white',
            }
          }} 
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
       >
          <Tab  label="Data" {...a11yProps(0)} />
          <Tab label="Storage" {...a11yProps(1)} />
          <Tab label="Composition" {...a11yProps(2)} />
        </StyledTabs>  
    </div>
    </div>
    </div>
  );
}

export default Tabsbutton;