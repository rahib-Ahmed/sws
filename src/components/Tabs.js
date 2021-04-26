import React from 'react';
import '../App.css';
import { makeStyles, withStyles, useTheme  } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Piechart from './Piechart';
import Storage from './Storage';
import Composition from './Composition';
import Loading from './Loading'

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


function Tabsbutton(props){

const classes = tab_slider();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
 
   return (
    <div className="cn3">
      <div className="tn1">
        
      <SwipeableViews
        index={value}
        value={value}
        onChangeIndex={handleChangeIndex}
      >
        { value===0 &&
          <Composition 
          index={0}
          value={value}
          dir={theme.direction}
        /> 
}
        {  props.load===true? 
        value && 
      <Piechart
      pieData={props.pieData}
      index={1}
      value={value}
      dir={theme.direction}
      /> : " "
       }  
       { value === 2 &&
        <Storage
         empty={props.empty}
            index={2}
            value={value}
            dir={theme.direction}
          />
       } 
      </SwipeableViews>
      </div>

      <div className="tn2">
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