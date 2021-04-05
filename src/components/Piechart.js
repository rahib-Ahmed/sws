import React, { useEffect } from 'react';
import '../App.css';
import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Export,
  Legend,
  AdaptiveLayout,
  Tooltip
} from 'devextreme-react/ui/pie-chart';


function Piechart() {

console.log("called second")
  const [data, setData] = React.useState([])
  useEffect(()=>{

    console.log("second"+ localStorage.getItem("id"))
    var id = localStorage.getItem("id")
    var searchParams = new URLSearchParams();
    searchParams.append("id", id);
    var header = new Headers()
    header.append("Content-Type", "application/x-www-form-urlencoded")
  
    const req = {
  
      method: 'POST',
      header: header,
      body: searchParams
    }
    
    var temp = [];
   
    fetch('https://helpsws.herokuapp.com/id', req)
    .then(res => res.json())
    .then(result => {
      
      console.log(result)
      const plastic = result.plasticCount;
      const metal = result.metalCount;
      const bio = result.bioCount;
      const glass = result.glassCount;
      const paper = result.paperCount;
  
      const areas = [{
        country: 'Plastic',  area: plastic},
         {
        country: 'Metal',  area: metal},  
         {
        country: 'Glass',  area: glass},
         {
        country: 'Bio',  area: bio},
         {
        country: 'Paper',  area: paper},
      ];
    
      for(var i=0; i<areas.length; i++)
   {
      temp.push(areas[i])
    
          }
          setData(temp)
    })
  }, [])
 
var pointClickHandler = function(e) {
    toggleVisibility(e.target);
  }
  
  var legendClickHandler = function(e){
  let arg = e.target;
  let item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];
  
  toggleVisibility(item);
  }
  
  var toggleVisibility = function(item){
  item.isVisible() ? item.hide() : item.show();
  }
  
  var customizeTooltip = function(pointInfo) {
    return pointInfo.value > 50 ? { color: 'red' } : { }; 
  }
    
 
  return(
    <div className="cn2">
<PieChart
        index={0}
        dataSource={data}
        // palette="bright"
        onPointClick={pointClickHandler}
        onLegendClick={legendClickHandler}
      >
      <Tooltip 
        enabled={true}
        customizeTooltip={customizeTooltip}
      />
      
      <Series
          // color="white"
          argumentField="country"
          valueField="area"
      >
          <Label 
          position="outside"
          visible={true}>
            <Connector visible={true} width={0.3} />
          </Label>
        </Series>
   

        <Size width={300} />
        <Export enabled={false} />
        <Legend 
        orientation="vertical"
        horizontalAlignment="center"
        verticalAlignment="bottom"
        rowCount={2}
        columnCount={1}
        columnItemSpacing={10}
        rowItemSpacing={10}
        />
          <AdaptiveLayout
                    height={200}
                    width={300}
                />
      </PieChart>   
      </div>
    )};   
    export default Piechart;