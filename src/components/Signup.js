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
function Signup(){
  var [name,setName]=React.useState('')
  var [password,setPassword]=React.useState('')
  var [email,setEmail]=React.useState('')
  var [mailerr,setMailerr]=React.useState('')
  var [namerr,setNamerr]=React.useState('')
  var [passerr,setPasserr]=React.useState('')
  const props={
    email: email,
    name: name,
  }
  const history = useHistory();

  function validator() {
    var mail= "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
    var pass="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
    !email.match(mail)? setMailerr('Please enter a valid mail!') : setMailerr('');
    name ===''? setNamerr('Please enter a UserName!') : setNamerr('');
    !password.match(pass)? setPasserr('Password should contain special characters, capital letters and numbers!') : setPasserr('');
  }
  
  function submit(){
    if(mailerr === '' && passerr === '' && namerr === '') {
    var params = new URLSearchParams()
    params.append("email",email)
    params.append("name",name)
    params.append("password",password)
    var header = new Headers()
    header.append("Content-Type", "application/x-www-form-urlencoded")
    var request={
      method:'POST',
      body:params,
      header: header,
    }
    fetch('https://helpsws.herokuapp.com/addaccount', request)
    .then((res) => res.json())
    .then((result) => {
    console.log("res"+result)
    setName('');
    setEmail('');
    setPassword('');
    fetch('https://helpsws.herokuapp.com/sendmail', request)
    .then((res) => res.json())
    .then((result) => {
     console.log("res"+result)
     alert('Mail Sent!')
  })
    history.push({pathname:'/Validation',state: props})
    })
  } 

   }
 
    return(
    
        <div className="mainX">
           <img alt="logo of sws" src={img}></img>
            <div className="inner">
             <ValidationTextField
              required
              id="validation-outlined-input"
              label="Email"
              variant="outlined"
              value={email}
              onBlur={()=>validator()}
              onChange={(x)=>setEmail(x.target.value)}
            />
            <div><p class="error">{mailerr}</p></div>
            <div className="textf">
        <ValidationTextField
              required
              id="validation-outlined-input"
              label="UserName"
              variant="outlined"
              value={name}
              onBlur={()=>validator()}
              onChange={(x)=>setName(x.target.value)}
            />
            </div>
            <div><p class="error">{namerr}</p></div>
        <div className="textf">
         <ValidationTextField
          required
          id="validation-outlined-input"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onBlur={()=>validator()}
          onChange={(x)=>setPassword(x.target.value)}
        /></div>
        <div>
        <p style={errbox} class="error">{passerr}</p>
        </div>
        <div className="btn1">
        <button classname="button" onClick={()=>submit()}>SignUp</button>
        </div>
        </div>
        
        </div>
    )
}
export default Signup