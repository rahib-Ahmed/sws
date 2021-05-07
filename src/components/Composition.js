import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import '../App.css';
import CanvasJSReact from'../canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;

const CanvasJSChart = CanvasJSReact.CanvasJSChart;



function Composition(props){
  const [data,setData] = React.useState()
  useEffect(()=>{
    for (var i = 0; i < options.data[0].dataPoints.length; i++) {
      var x = options.data[0].dataPoints[i].y
          if(x===0) {
            setData(true)
          }
          break
      }
  })
  const options = {

    animationEnabled: true,
    backgroundColor: "#B1E6B9",
    segmentShowStroke: true,
    segmentStrokeWidth: 4,
    data: [{
      lineColor: "#B1E6B9",
      color: "white",
      type: "pie",
      indexLabelFontSize: 16,
      radius: 110,
      indexLabel: "{label} - {y}",
      exploded: true,
      yValueFormatString: "###0.0\"%\"",		
      dataPoints: props.pieUser
    }]
  }
  function explode() {
    for (var i = 0; i < options.data[0].dataPoints.length; i++) {
      options.data[0].dataPoints[i].exploded = true;
    }
  }
  explode();
 
  
  return(
    <div className="cn2">
	 <div style={{overflowX: "hidden", display: "flex", justifyContent:"center", alignItems: "center"}}>
			<div  style={{width: "570px", display: "flex", justifyContent: "center",  overflowX: "hidden"}}> 
       {data===true? <div className="noData">Scan to show</div> : <CanvasJSChart options = {options}/> }
       </div>
			</div>  
      </div>
    )};   

export default Composition;
