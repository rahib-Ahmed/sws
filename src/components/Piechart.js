import { makeStyles } from '@material-ui/core';
import React from 'react';
import '../App.css';
import CanvasJSReact from'../canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const canva = makeStyles({
  root: {
    backgroundColor: 'black',
    height: "500px", 
    width: "800px", 
    marginLeft: "-80px",
     marginRight: "-80px"
    // overflowX: 'hidden'
  }
})

function Piechart(props){
  const classes = canva()  
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
      dataPoints: props.pieData
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
			<div style={{width: "570px", display: "flex", justifyContent: "center",  overflowX: "hidden"}}> 
      <CanvasJSChart className={classes.root} options = {options} 
			/>
      <div className="hide"></div>
				 </div>
				
			</div> 

			
		 
      </div>
    )};   

    export default Piechart;