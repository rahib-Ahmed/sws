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
  Tooltip
} from 'devextreme-react/ui/pie-chart';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CropFreeIcon from '@material-ui/icons/CropFree';
import HomeIcon from '@material-ui/icons/Home';


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
 }
})(Tabs);

const tab_slider = makeStyles(() => ({
  root: {
    backgroundColor: 'rgb(121,161,114)',
    width: '95%',
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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: '“Be yourself; everyone else is already taken.”'},
  {
    label: 'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best'},
  {
    label: 'Two things are infinite: the universe and human stupidity and Im not sure about the universe.'
  },
  {
    label: 'So many books, so little time'
  },
];

const carousel_text = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // maxWidth: '94%',

  },
  header: {
    flex: 1,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#B1E6B9',
    textAlign: 'center',
  }
}));

function CarouselText(){
  const classes = carousel_text();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return(
    <div className={classes.root}>
    <Paper square elevation={0} className={classes.header}>
      <Typography>{tutorialSteps[activeStep].label}</Typography>
    </Paper>
    <AutoPlaySwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
    >
      {tutorialSteps.map((step, index) => (
        <div>
          {Math.abs(activeStep - index) <= 2 ? (
            <div key={step.label} />
          ) : null}
        </div>
      ))}
    </AutoPlaySwipeableViews>

  </div>
);
}

const bottom = makeStyles({
  root: {
    width: '95%',
    backgroundColor: '#CCF5D2',
    borderRadius: 40
  },
});

function LabelBottomNavigation() {
  const classes = bottom();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Switch" value="switch" icon={<CropFreeIcon />} />
      <BottomNavigationAction label="Scan" value="scan" icon={<CropFreeIcon />} />
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
    </BottomNavigation>
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

      <div className="cn3">
        <FloatingActionButtonZoom />       
      </div>

      <div className="cn4">
       <CarouselText />
      </div>

      <div className="cn5">
        hello
      </div>
      
      <div className="cn6">
      <LabelBottomNavigation />
      </div>
      </div>
  )
}
  export default App;