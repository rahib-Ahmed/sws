import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CropFreeIcon from '@material-ui/icons/CropFree';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from "react-router-dom";
import PublicSharpIcon from '@material-ui/icons/Public';


const bottom = makeStyles({
    root: {
      width: '95%',
      backgroundColor: '#CCF5D2',
      borderRadius: 40
    },
  });

  
function Footer(){

const history = useHistory();
const classes = bottom();
const [value, setValue] = React.useState('recents');

const handleChange = (event, newValue) => {
  setValue(newValue);
};

return (
  <div className="cn6">
  <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
    <BottomNavigationAction label="Global" value="global" icon={<PublicSharpIcon />} />
    <BottomNavigationAction label="Scan" onClick={() => history.push("/Camera")} value="scan" icon={<CropFreeIcon />} />
    <BottomNavigationAction label="Home" onClick={()=>{history.push('/')}} value="home" icon={<HomeIcon />} />
  </BottomNavigation>
  </div>
)};

export default Footer;