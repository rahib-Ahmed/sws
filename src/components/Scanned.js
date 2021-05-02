import React, { useEffect } from 'react';
import * as fetchs from '../backend/fetch';
import { useHistory} from "react-router-dom";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function Scanned() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(open);
  };
const history = useHistory()
useEffect(()=>{
fetch('https://helpsws.herokuapp.com/scanned', fetchs.getTrashId())
  .then((res) => res.json())
  .then((result) => {
    console.log("in scanned here")
    console.log(result)
    var x = true
    history.push({pathname: "/App", state: x})
  })
})
return(
  <div>
  <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
    <CircularProgress color="inherit" />
  </Backdrop>
</div>
)
}

export default Scanned;