import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CropFreeIcon from '@material-ui/icons/CropFree';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from "react-router-dom";
import PublicSharpIcon from '@material-ui/icons/Public';
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
      <img className="iconsize" src={achi}></img>
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
    top: 10,
    right: -40,
    color: theme.palette.grey[500],
  },
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
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
  const handleClickOpen = () => {
    setOpens(true);
  };
  const handleClose = () => {
    localStorage.setItem("check", "false")
    setOpens(false);
    window.location.replace("/App")
  };
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
      handleClickOpen() 
      
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
    <BottomNavigationAction label="Achievements" onClick={() => history.push("/Reward")} value="Achievements" icon={<Ach />} />
    <BottomNavigationAction label="Scan" onClick={() => history.push("/Camera")} value="Scan" icon={<CropFreeIcon />} />
   {check==="true"?
    <BottomNavigationAction label="Stop" onClick={()=>endsession()} value="Stop" icon={<StopIcon />} /> : ' '}
    <BottomNavigationAction label="Home" onClick={()=>{window.location.replace("/App")}} value="Home" icon={<HomeIcon />} />   
  </BottomNavigation>

  <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={opens}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          End Session
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
           Session ended successfully 
          </Typography>
        </DialogContent>
      </Dialog>
  </div>
)};

export default Footer;