import React, { useEffect } from 'react';
import './App.css';
import Piechart from './components/Piechart'
import Footer from './components/Footer'
import Carouseltext from './components/Carousl';
import Tabsbutton from './components/Tabs';
import Header from './components/Header'
import * as fetch from './backend/fetch.js'



function App() {

  var [load, setLoad] = React.useState(false)

  useEffect(()=>{
    
    async function abd() {
      await fetch.getTrashId()
      setLoad(true)
    }
    abd()
  }, [])

  return ( 
    
    <div className="backg basic">
  
    <Header />
    {/* {load===false? " " : 
    <Piechart loading={load} /> 
  } */}
    <Tabsbutton />     
    <Carouseltext />
<div className="cn5">
    {/* <button onClick={()=>{on()}}>hello</button> */}hello
    </div>
    <Footer />
 
    </div>
  )
}
  export default App;