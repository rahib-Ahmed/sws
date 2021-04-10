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

function Piechart(props){
 console.log(props.area)
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
  
  function formatTxt(arg){
    return `${arg.argumentText} (${arg.percentText})`;
  }
 
  return(
    <div className="cn2">
<PieChart
        index={0}
        dataSource={props.area}
        palette={['	#D3D3D3', '	#F0F0F0', '	#E8E8E8', '#E0E0E0', '#DCDCDC', '#D8D8D8' ]}
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
          position="inside"
          backgroundColor="transparent"
          visible={true}
          customizeText={formatTxt}
          >
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