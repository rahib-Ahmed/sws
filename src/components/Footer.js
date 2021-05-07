import React, { useEffect } from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CropFreeIcon from '@material-ui/icons/CropFree';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from "react-router-dom";
import StopIcon from '@material-ui/icons/Stop';
import * as fetchs from '../backend/fetch';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import achi from '../images/star.png';
import { Button } from '@material-ui/core';


const bottom = makeStyles({
  root: {
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 40
  },
});

function Ach(){
  return (
    <div>
      <img alt="logo of sws" className="iconsize" src={achi}></img>
    </div>
  )
}  

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    top:1,
    right: -53,
    color: '#CE5310',
  },
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
    <Typography className="modFont">{children}</Typography>
    {onClose ? (
      <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
        <CloseIcon />
      </IconButton>
    ) : null}
  </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);



function Footer(props){
 const [opens, setOpens] = React.useState(false);
  const check = localStorage.getItem("check")
  const [dialog, setDialog] = React.useState(false)
  const [status, setStatus] = React.useState(fetchs.setAchievements())
  
  useEffect(()=>{
    var set = [true, false, false, false, false, false, false, false, false ]
 
   fetch('https://helpsws.herokuapp.com/usertrack', fetchs.setAchievements())
  .then(res=>res.json())
  .then(result=>{
      localStorage.setItem("recycled", result.recycled)
      localStorage.setItem("scanned", result.scanned)
    if(result.recycled >= 1) {
        set[7] = true
    } if(result.scanned >= 1) {
      set[5] = true
    }
    if( result.recycled >= 10) {
      set[8] = true
  } if(result.scanned >= 10) {
      set[6] = true
  }

  fetch('https://helpsws.herokuapp.com/userdata', fetchs.setAchievements())
  .then(res=>res.json())
  .then(result => {
    if(result.days > 7 && result.plasticPercentage < 20) {
      set[1] = true
    } 
   var prev =  localStorage.getItem("status").split(",")
   var newAchi = false

   
   for(var i = 0; i<9; i++) {
     if(prev[i] == "true"){
       prev[i] = true
     }else {prev[i] = false}
     if(prev[i] != set[i]) {
       newAchi = true
      break
      }   
   }
   localStorage.setItem("status", set)
    
   setStatus(newAchi)
  })

  })
  }, [])
 
  const handleClickOpen = () => {
    setOpens(true);
  };
 
  var timer = 30;
  function timerCountdown(){
    var dialogTimer = setInterval(()=>{
      if(timer <= 10) {
        setDialog(true)
        timer = 1000
        clearInterval(dialogTimer)
      }
      timer -= 1
    }, 1000)
}

function reset() {
  setDialog(false);
  timer = 20;
}

if(check==="true") {
  timerCountdown()
 }
function Somee() {
  const [some,setSome] =React.useState(10)
  const [opend, setOpend] = React.useState(true);
useEffect(()=>{
  if (some===0) {
    endsession()
  } else {
  var x =
  some > 0 &&  setInterval(()=>{
      setSome(some - 1)                                
  }, 1000) 
  return () => clearInterval(x)
}
}, [some])

  const handleCloses = () => {
   reset() 
  };
  return (
    <>
     <Dialog onClose={handleCloses} aria-labelledby="customized-dialog-title" open={opend}>
        <DialogTitle id="customized-dialog-title" onClose={handleCloses}>
          <div className="modHead">
          End Session
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <div className="modFont"gutterBottom>
           Session will end in {some} seconds please click on here button to continue this session
          </div>
        </DialogContent>
        <Button onClick={handleCloses}><div className="hereStyle">here</div></Button>
      </Dialog>
    </>
  )
}



function endsession() {

    setDialog(false)
   
    
 const email=localStorage.getItem("email")
    fetch('https://helpsws.herokuapp.com/id', fetchs.Piechart())
    .then(res => res.json())
    .then(result => {
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
    }
      )
    .then(result=>{
      setOpens(true)
      
      handleClickOpen() 
        localStorage.setItem("check", "false")
       setDialog(false)
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
const handleClose = () => {
  setOpens(false);
  window.location.replace("/")
};
function Nap() {
  return (
    <div>
    {status===true? <div className="status"></div> : ' '}
    <Ach />
    </div>
  )
}
return (
  <div className="cn6">
  <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
    <BottomNavigationAction label="Achievements" onClick={() => history.push("/Reward")} value="Achievements" icon={<Nap />} />
    <BottomNavigationAction label="Scan" onClick={() => history.push("/Camera")} value="Scan" icon={<CropFreeIcon />} />
   {check==="true"?
    <BottomNavigationAction label="Stop" onClick={()=>endsession()} value="Stop" icon={<StopIcon />} /> : ' '}
    <BottomNavigationAction label="Home" onClick={()=>{window.location.replace("/")}} value="Home" icon={<HomeIcon />} />   
  </BottomNavigation>


  <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={opens}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <div className="modHead">End Session</div>
        </DialogTitle>
        <DialogContent dividers>
          <div className="modFont"gutterBottom>
           Session ended successfully 
          </div>
        </DialogContent>
      </Dialog>
      {dialog===true && check==="true"? <Somee /> : ' '}
  </div>
)};

export default Footer;
