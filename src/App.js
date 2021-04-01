import React, { useEffect } from 'react';
import './App.css';
import Piechart from './components/Piechart'
import Footer from './components/Footer'
import Carouseltext from './components/Carousl';
import Tabsbutton from './components/Tabs';
import Header from './components/Header'
import * as fetch from './backend/fetch.js'

function App() {

useEffect(() => {
  fetch.getTrashId()   
})

  return ( 
     
    <div className="backg basic">
    <Header />
    <Piechart /> 
    <Tabsbutton />     
    <Carouseltext />
<div className="cn5">
    hello
    </div>
    <Footer />
    </div>
  )
}
  export default App;