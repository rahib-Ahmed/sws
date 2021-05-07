import React from 'react'
import '../App.css'
import { useHistory } from "react-router-dom";
import img1 from '../images/green-energy.png';
import img2 from '../images/green-tea.png';
import img3 from '../images/ecology.png';
import * as fetchs from '../backend/fetch'
import Footer from './Footer';
import Button from './Button'
import { ValueAxis } from 'devextreme-react/chart';
function Reward(){

        var locked= fetchs.getLocked()
        var unlocked= fetchs.getUnlocked()
        var [status,setStatus]=React.useState(localStorage.getItem("status").split(","))
        var images=[img1, img2, img3,img1, img2, img3,img1, img2, img3]
        var login = localStorage.getItem("first")
     
    
        var data= []
        for(var i=0; i<9; i++){
            var temp={
                i : i,
                locked: locked[i],
                unlocked: unlocked[i],
                status: status[i],
                image: images[i]
            }
        data.push(temp)
        }
    
    return(
    <div className="rewardMain">
        <div className="but">
        <Button className="data" />
        </div>
        <div className="rewardModal">
            { data.map((value)=>{
                var message;
                if(value.status=="true"){
                    message= value.unlocked 
                }
                else{
                    message= value.locked
                }
                 return(
                 <div className="rewardModel">
                     {value.status=="true"?<img className="rewardImg"  src={value.image}></img>:<img  id={value.i}  className="rewardImg imgInactive" src={value.image}></img>}
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
