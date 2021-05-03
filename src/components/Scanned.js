import React, { useEffect } from 'react';
import * as fetchs from '../backend/fetch';
import { useHistory} from "react-router-dom";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../images/greenside.png';
import { Typography } from '@material-ui/core';
import { FieldPanelTexts } from 'devextreme-react/pivot-grid';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
  <div >
  <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
  <CircularProgress color="inherit" />
    <Typography style={{marginTop: '50px'}}>Chotto Matte Kudasai</Typography>
    
  </Backdrop>
</div>
)
}

export default Scanned;