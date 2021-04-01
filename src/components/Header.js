import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const avatar = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
  })); 

  
function Header() {


const classes = avatar();

return ( 

     <div className="cn1">
      Hello, User
      <div>
    <Avatar className={classes.purple}>OP</Avatar>
    </div>
   </div>
   
)};

export default Header;