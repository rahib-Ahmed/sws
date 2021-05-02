import React from 'react';
import './../App.css'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import recycle from '../images/recycle.png'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';




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

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);




export default function MenuAppBar() {



  const name = localStorage.getItem("name")
  const [opens, setOpens] = React.useState(false);

  const handleClickOpen = () => {
    setOpens(true);
  };
  const handleClose = () => {
    setOpens(false);
  };
  



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
          Recycle
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
           Recycle here to get the achievements 
          </Typography>
        </DialogContent>
        <DialogActions>
            <Typography>Recycle</Typography>
            <Switch />
        </DialogActions>
      </Dialog>
    </div>
  );
}
