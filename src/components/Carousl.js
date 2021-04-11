import React from 'react';
import '../App.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const text = [
    {
      label: '“Be yourself; everyone else is already taken.”'},
    {
      label: '"Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best"'},
    {
      label: '"Two things are infinite: the universe and human stupidity and Im not sure about the universe."'
    },
    {
      label: '"So many books, so little time"'
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

function Carouseltext(){
    const classes = carousel_text();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
    return(

      <div className="cn4">
      <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{text[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {text.map((step, index) => (
          <div>
            {Math.abs(activeStep - index) <= 2 ? (
              <div key={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
    </div>
  );
  }

  export default Carouseltext;