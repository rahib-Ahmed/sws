import React from 'react';
import './../App.css'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import recycle from '../images/recycle.png'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Switch from '@material-ui/core/Switch';
import * as fetchs from '../backend/fetch' 


 


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

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

 


export default function MenuAppBar() {
  
  const switchs = makeStyles((theme) => ({
    toggle: {
      '& .MuiSwitch-root' :{
        color: '#CE5310',
      },
           '& .Mui-checked': {
              color: '#CE5310',
              
          },
          '& .MuiSwitch-track': {
            color: '#CE5310',
              backgroundColor:'#CE5310'
          }, 
          '& .MuiSwitch-thumb' : {
            color: '#CE5310',
          },
          '& .MuiSwitch-input' : {
            color: '#CE5310',
          },
        
      },
   })) 
  const name = localStorage.getItem("name")
  const [opens, setOpens] = React.useState(false);
  const [toggle, setToggle] = React.useState(false)
  const [sin, setSin] = React.useState(false)
   const classes = switchs()
  const handleClickOpen = () => {
    setOpens(true);
  };
  const handleClose = () => {
    setOpens(false);
  };
  
 const toggled = (event) => {
    setToggle(event.target.checked)
    if(event.target.checked === true) {
      setSin(true)
      fetch('https://helpsws.herokuapp.com/updateusertrack', fetchs.updateUserTrack("recycled"))
      .then(res => res.json())
      .then(ress => {
        
  })
    }
  
}



  return (
    <div className="cn1">
      <AppBar style={{ background: 'white', borderRadius: 25, color: '#05431A' }} className="bars" position="static">
        <Toolbar>
          <div>
          <Typography variant="h6">
            Hello, {name.split(" ", 1)}
          </Typography>
          </div>
          <div onClick={handleClickOpen} className="gap">
          <img alt="logo of sws" className="recycleImg" src={recycle}></img>
          </div>
        </Toolbar>
      </AppBar>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={opens}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <div className="modHead">
          Doing your part
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <div className="modFont">
          The main aim of SWS2.0 is to help the planet by helping you keep track and make sustainable choices. Though we provide you with the tools 
          to make these choices, your journey goes one step beyond. We believe recycling marks the end of the journey you started with us.
          We give you this option to mark the completion of your journey and we'll help you keep a track of this as well.<br/> <em>Happy Recycling!</em>
           </div> 
          </Typography>
        </DialogContent>
        <DialogActions>
            <div className="modHead">I recycled </div>
            <Switch className={classes.toggle} disabled={sin}  onChange={toggled} checked={toggle} value={toggle}  />
        </DialogActions>
      </Dialog>
    </div>
  );
}
