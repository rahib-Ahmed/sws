import React from 'react'
import '../App.css'
import { useHistory } from "react-router-dom";
import img1 from '../images/green-energy.png';
import img2 from '../images/green-tea.png';
import img3 from '../images/ecology.png';
import * as fetchs from '../backend/fetch'
function Reward(){
        var locked= fetchs.getLocked()
        var unlocked= fetchs.getUnlocked()
        var [status,setStatus]=React.useState([false,false,false,false,false,false,false,false,false])
        var images=[img1, img2, img3,img1, img2, img3,img1, img2, img3]
        var data= []
        for(var i=0; i<9; i++){
            var temp={
                locked: locked[i],
                unlocked: unlocked[i],
                status: status[i],
                image: images[i]
            }
        data.push(temp)
        }

    return(
    <div className="rewardMain">
        <div className="rewardModal">
            { data.map((value)=>{
                var message;
                if(value.status){
                    message= value.unlocked
                }
                else{
                    message= value.locked
                }
                 return(
                 <div className="rewardModel">
                     {value.status?<img className="rewardImg"  src={value.image}></img>:<img className="rewardImg imgInactive" src={value.image}></img>}
                     <div className="rewardMessage">
                        {message}
                     </div>
                </div>
                )
            })}
       
        </div>
    </div>)
}
export default Reward