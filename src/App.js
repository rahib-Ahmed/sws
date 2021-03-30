import React from 'react';
import './App.css';
import { makeStyles, useTheme, withStyles  } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Export,
  Legend,
  AdaptiveLayout,
  Tooltip,
  SeriesBorder
} from 'devextreme-react/ui/pie-chart';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const StyledTabs = withStyles({
    root: {
    borderRadius: 25,
    color: "white",
    boxShadow: "0 3px 5px 2px black",
 }
})(Tabs);

const tab_slider = makeStyles(() => ({
  root: {
    backgroundColor: 'rgb(121,161,114)',
    width: 375,
    borderRadius: 25,
  }
}));

const pie_chart = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

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

function getTrashId() {
  const query = window.location.search;
  const idParam = new URLSearchParams(query)

  const id = idParam.get('trashid')

  var searchParams = new URLSearchParams();
  searchParams.append("id", id);
  var header = new Headers()
  header.append("Content-Type", "application/x-www-form-urlencoded")

  var res = {
    method: 'POST',
    header: header,
    body: searchParams
  }

  fetch('https://helpsws.herokuapp.com/scanned', res)
  .then(res => res.json())
  .then(result => console.log(result))

  
}
getTrashId()

function FloatingActionButtonZoom() {
  const classes = tab_slider();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <div className={classes.root}>
        <StyledTabs
        className="hello"
          value={value}
          TabIndicatorProps={{
            style: {
                backgroundColor: 'white',
            }
          }} 
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
       >
          <Tab  label="Data" {...a11yProps(0)} />
          <Tab label="Storage" {...a11yProps(1)} />
          <Tab label="Composition" {...a11yProps(2)} />
        </StyledTabs>
    </div>
  );
}



function App() {

// pointClickHandler = pointClickHandler.bind(this);
// legendClickHandler = legendClickHandler.bind(this);

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
  
const classes = pie_chart();

  return (    
    <div className="backg basic">
       
       <div className="cn1">
        Hello, User
        <div>
      <Avatar className={classes.purple}>OP</Avatar>
      </div>
     </div>
      
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
   

        <Size width={400} />
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

      <div className="cn3">
        <FloatingActionButtonZoom />       
      </div>

      <div className="cn4">
        are
      </div>
      
      <div className="cn5">
        four
      </div>
    </div>
  )
}
  export default App;