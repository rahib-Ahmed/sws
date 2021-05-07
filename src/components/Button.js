import React from 'react';
import '../App.css';
import back from '../images/undo.svg'
import { useHistory } from "react-router-dom";
function Button() {
    const history = useHistory();
    function backMain() {
        history.push("/")
    }

    return (
       
        <div onClick={()=>backMain()} className="but">
        <img src={back} />  
    </div>
    )
}

export default Button
