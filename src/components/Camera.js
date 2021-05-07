import React from "react";
import '../App.css';
import QrReader from "react-qr-reader";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Header from './Header'
import Footer from "./Footer";
import * as fetchs from '../backend/fetch'
import { useHistory } from "react-router-dom";

function Camera() {
  
  const [delay,setDelay] = React.useState(300);
  const [result,setResult] = React.useState('Plas scan properly');
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleLink = () => {
    fetch('https://helpsws.herokuapp.com/userdata', fetchs.updateUserTrack())
    .then((res) => res.json())
    .then((results) => {
    
      localStorage.setItem("check", "true")
      fetch('https://helpsws.herokuapp.com/updateusertrack', fetchs.updateUserTrack("scanned"))
      .then(res => res.json())
      .then(resu => window.location.replace(result) )
      
     })
    
    .catch(err=>console.log(err))
  }; 
  const handleClose = () =>{
    setOpen(false)
  }
 const handleScan = (data) => {
    if (data) {
      setResult(data);
      setOpen(true)
    }
  }
  const handleError = (err) => {
    console.error(err);
  }
  
    return (
      <div className="posi">
        <Header className="pc1"  />
        <QrReader 
        className="camera"
        showViewFinder={false}
          delay={delay}
          onError={handleError}
          onScan={handleScan}
        />
        <div className="pc2">
        <Footer />
        </div>

          <div>
          <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title"><div className="modHead">{"Please follow the link to the app."}</div></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className="modFont">{result}</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>{ result==="trash_link_here"?<Button disabled={true} >Open Link</Button> :
          <Button onClick={handleLink} color="primary">
            <div className="openlinkStyle">
            Open Link
            </div>
          </Button>}
        </DialogActions>
      </Dialog>
    </div>
      </div>
    );
}

export default Camera;
