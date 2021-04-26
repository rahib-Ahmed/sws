import React, { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer'
import Carouseltext from './components/Carousl';
import Tabsbutton from './components/Tabs';
import Header from './components/Header'
import * as fetchs from './backend/fetch.js'



function App() {


  var [pie, setPie] = React.useState([])
  var [loadtab, setLoadtab] = React.useState(false)
  var [empty, setEmpty] = React.useState()
  var [quote, setQuote] = React.useState([])
  var [loadcarousel, setLoadcarousel] = React.useState(false)
  const props = {
      pieData: pie,
      empty: empty,
      load: loadtab,
      quote: quote,
      loadCarousel: loadcarousel
  }

  useEffect(()=>{
    
    fetch('https://helpsws.herokuapp.com/scanned', fetchs.getTrashId())
  .then((res) => res.json())
  .then((result) => {
    setLoadtab(true)
    // console.log("res "+result+" load state "+load)
  })

  fetch('https://helpsws.herokuapp.com/id', fetchs.Piechart())
.then(res => res.json())
.then(result => {
  //   console.log(result)
  // console.log("res"+result)
  const plastic = result.plasticPercentage;
  const metal = result.metalPercentage;
  const bio = result.bioPercentage;
  const glass = result.glassPercentage;
  const paper = result.paperPercentage;
  const empty = result.emptyPercentage;
  

  const areas = [
    {
      label: 'Plastic',  y: plastic},
     {
      label: 'Metal',  y: metal},  
     {
      label: 'Glass',  y: glass},
     {
      label: 'Bio',  y: bio},
     {
      label: 'Paper',  y: paper},
  ];
  setEmpty(empty)
  setPie(areas)
  // console.log(areas)
  
})
fetch('https://helpsws.herokuapp.com/getsentence', fetchs.getQuote())
  .then(res => res.json())
  .then((res)=>{

    var text= []
    
    
    for(var i=0; i<res.sentences.length; i++){
        text.push({"label": res.sentences[i].sentence})
}

  setQuote(text)
  setLoadcarousel(true)
  // console.log(text)
  })
  
  }, [])

  return ( 
    
    <div className="backg basic">
  
    <Header />
    <Tabsbutton {...props} />     
    {loadcarousel===true?
      <Carouseltext {...props} />
    : ' '}
    <Footer />
 
    </div>
  )
}
  export default App;