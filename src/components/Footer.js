import React, { useEffect } from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CropFreeIcon from '@material-ui/icons/CropFree';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from "react-router-dom";
import PublicSharpIcon from '@material-ui/icons/Public';
import StopIcon from '@material-ui/icons/Stop';
import * as fetchs from '../backend/fetch'
const bottom = makeStyles({
    root: {
      width: '95%',
      backgroundColor: '#CCF5D2',
      borderRadius: 40
    },
  });

  
function Footer(props){
function endsession() {
    const email=localStorage.getItem("email")
    fetch('https://helpsws.herokuapp.com/id', fetchs.Piechart())
    .then(res => res.json())
    .then(result => {
      
      console.log(result)
    var session = new URLSearchParams();
    session.append("start", JSON.stringify(props.sessionStart));
    session.append("end", JSON.stringify(result));
    session.append("email", email)
    var header = new Headers()
    header.append("Content-Type", "application/x-www-form-urlencoded")
    var req = {
      method: 'POST',
      header: header,
      body: session
    }
    fetch('https://helpsws.herokuapp.com/updateuserdata', req)
    .then((res)=>{
      res.json()
      console.log('here')
    }
      )
    .then(result=>{
      console.log(result)
      alert("session ended successfully")
  })
  .catch(err=>console.log(err))


  })
     
}
  
  

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
    <BottomNavigationAction label="Home" onClick={()=>endsession()} value="endsession" icon={<StopIcon />} />
    <BottomNavigationAction label="Home" onClick={()=>{history.push('/App')}} value="home" icon={<HomeIcon />} />
    
    
  </BottomNavigation>
  </div>
)};

export default Footer;