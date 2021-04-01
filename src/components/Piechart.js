import React from 'react';
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

  
  const areas = [{
    country: 'Plastic',  area: 60},
     {
    country: 'Metal',  area: 10},  
     {
    country: 'Glass',  area: 10},
     {
    country: 'Bio',  area: 10},
     {
    country: 'Paper',  area: 9},
     {
    country: 'Other',  area: 1}
  ];

function Piechart() {
  

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
        dataSource={areas}
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