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

function Camera() {
  
  const [delay,setDelay] = React.useState(300);
  const [result,setResult] = React.useState('Plas scan properly');
  const [open, setOpen] = React.useState(false);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleLink = () => {
    window.location.replace(result)
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
        <Footer  />
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
        <DialogTitle id="alert-dialog-slide-title">{"Plz follow the link for trash bin data"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {result}
          </DialogContentText>
        </DialogContent>
        <DialogActions>{ result==="trash_link_here"?<Button disabled={true} >Open Link</Button> :
          <Button onClick={handleLink} color="primary">
            Open Link
          </Button>}
        </DialogActions>
      </Dialog>
    </div>
      </div>
    );
}

export default Camera;