import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './App.css'

// buttons item

// function a11yProps(index) {
//   return {
//     id: `action-tab-${index}`,
//     'aria-controls': `action-tabpanel-${index}`,
//   };
// }

// const StyledTabs = withStyles({
//     root: {
//     borderRadius: 25,
//     color: "white",
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//  }


    
//   })(Tabs);

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: 'rgb(121,161,114)',
//     width: 500,
//     position: 'relative',
//     borderRadius: 25,
//   },
// }));

// export default function FloatingActionButtonZoom() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   const transitionDuration = {
//     enter: theme.transitions.duration.enteringScreen,
//     exit: theme.transitions.duration.leavingScreen,
//   };

//   return (
//     <div className={classes.root}>
//         <StyledTabs
//         className="hello"
//           value={value}
//           TabIndicatorProps={{
//             style: {
//                 backgroundColor: 'white',
//             }
//           }} 
//           onChange={handleChange}
//           textColor="inherit"
//           variant="fullWidth"
//        >
//           <Tab  label="Data" {...a11yProps(0)} />
//           <Tab label="Storage" {...a11yProps(1)} />
//           <Tab label="Composition" {...a11yProps(2)} />
//         </StyledTabs>
//     </div>
//   );
// }

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Y'},
  {
    label: 'O'},
  {
    label: 'L'
  },
  {
    label: 'O'
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  }
}));

function Text(){
  const classes = useStyles();
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

export default Text;