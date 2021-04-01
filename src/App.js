import React from 'react';
import './App.css';
import Piechart from './components/Piechart'
import Footer from './components/Footer'
import Carouseltext from './components/Carousl';
import Tabsbutton from './components/Tabs';
import Header from './components/Header'



// function getTrashId() {
//   const query = window.location.search;
//   const idParam = new URLSearchParams(query)

//   const id = idParam.get('trashid')

//   var searchParams = new URLSearchParams();
//   searchParams.append("id", id);
//   var header = new Headers()
//   header.append("Content-Type", "application/x-www-form-urlencoded")

//   var res = {
//     method: 'POST',
//     header: header,
//     body: searchParams
//   }

//   fetch('https://helpsws.herokuapp.com/scanned', res)
//   .then(res => res.json())
//   .then(result => console.log(result))
// }
// getTrashId()

function App() {

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