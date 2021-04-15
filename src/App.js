import React, { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer'
import Carouseltext from './components/Carousl';
import Tabsbutton from './components/Tabs';
import Header from './components/Header'
import * as fetchs from './backend/fetch.js'



function App() {


  var [pie, setPie] = React.useState([])
  var [load, setLoad] = React.useState(false)
  var [empty, setEmpty] = React.useState()
  const props = {
      pieData: pie,
      empty: empty,
      load: load
  }

  useEffect(()=>{
    
    fetch('https://helpsws.herokuapp.com/scanned', fetchs.getTrashId())
  .then((res) => res.json())
  .then((result) => {
    setLoad(true)
    console.log("res "+result+" load state "+load)
  })

  fetch('https://helpsws.herokuapp.com/id', fetchs.Piechart())
.then(res => res.json())
.then(result => {
    console.log(result)
  console.log("res"+result)
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
  console.log(areas)
})

  }, [])

  return ( 
    
    <div className="backg basic">
  
    <Header />
    <Tabsbutton {...props} />     
    <Carouseltext />
<div className="cn5">
    {/* <button onClick={()=>{on()}}>hello</button> */}hello
    </div>
    <Footer />
 
    </div>
  )
}
  export default App;