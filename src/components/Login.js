import React from 'react'
import TextField from '@material-ui/core/TextField';
import img from '../images/greenside.png';
import '../App.css'
import { useHistory } from "react-router-dom";
import {
  withStyles,
} from "@material-ui/core/styles";
 const para={
   color: '#05431A',
   fontFamily: "Amiko",
   fontSize:'20px'
 }

const errbox = {
  fontSize: '10px',
  paddingLeft: '100px',
  paddingRight: '100px'
}

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "#b0b9c1",
      borderWidth: 2
    },
    "& input:invalid + fieldset": {
      borderColor: "#b0b9c1",
      borderWidth: 2
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      borderColor: "#6B9060",
      padding: "4px !important" // override inline-style
    }
  }
})(TextField);


function Login(){
  var [password,setPassword]=React.useState('')
  var [email,setEmail]=React.useState('')
  var [err,setErr]=React.useState('')

  const history = useHistory();
  const props = {
    email: email,
    logged: true
  }
  function login(){
 
  var params = new URLSearchParams()
  params.append("email",email)
  params.append("password",password)
  var header = new Headers()
  header.append("Content-Type", "application/x-www-form-urlencoded")
  var request={
    method:'POST',
    body:params,
    header: header,
  }
  fetch('https://helpsws.herokuapp.com/login', request)
  .then((res) => res.json())
  .then((result) => {
    // console.log(result)
    if(result.status === "User login successful") {
      localStorage.setItem("email", props.email)
      localStorage.setItem("check", "false" )
      localStorage.setItem("first", true)
      localStorage.getItem("check")
      localStorage.setItem("status", JSON.stringify([false,false,false, false,false,false, false,false,false]))
      history.push("/")
    } else if(result.status==="User is not verified") {
      history.push({pathname: "/Validation", state: props})
    } else {
      setErr(result.status)
    }
  })
 
}
    return(
    
        <div className="mainX">
           <img className="imgLogin" alt="logo of sws" src={img}></img>
            <div className="inner">
            <ValidationTextField
              required
              id="validation-outlined-input"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(x)=>setEmail(x.target.value)}
            />
            <div className="textf">
            <ValidationTextField
             required
            id="validation-outlined-input"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
           onChange={(x)=>setPassword(x.target.value)}
            /></div>
          <div>
          <p style={errbox} class="error">{err}</p>
         </div>
          <div className="btn1">
          <button classname="button" onClick={()=>login()}>Login</button>
         </div>
          <p style={para}>New User? SignUp <href onClick={()=>history.push("/Signup")}><u>here.</u></href></p>
        </div>
        </div>
      
    )
}
export default Login
