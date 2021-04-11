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

  useEffect(()=>{
    
    fetch('https://helpsws.herokuapp.com/scanned', fetchs.getTrashId())
  .then((res) => res.json())
  .then((result) => {
    console.log("res"+result)
  })

  fetch('https://helpsws.herokuapp.com/id', fetchs.Piechart())
.then(res => res.json())
.then(result => {
  
  console.log("res"+result)
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

  setPie(areas)
  console.log(areas)
})

  }, [])

  return ( 
    
    <div className="backg basic">
  
    <Header />
    {/* {load===false? " " : 
    <Piechart loading={load} /> 
  } */}
    <Tabsbutton pieData={pie} />     
    <Carouseltext />
<div className="cn5">
    {/* <button onClick={()=>{on()}}>hello</button> */}hello
    </div>
    <Footer />
 
    </div>
  )
}
  export default App;