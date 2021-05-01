import React, { useEffect } from 'react';
import * as fetchs from '../backend/fetch';
import { useHistory} from "react-router-dom";

function Scanned() {
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
        in
    </div>
)
}

export default Scanned;