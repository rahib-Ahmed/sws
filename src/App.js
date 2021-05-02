import React, { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer'
import Carouseltext from './components/Carousl';
import Tabsbutton from './components/Tabs';
import Header from './components/Header'
import * as fetchs from './backend/fetch.js';
import { useHistory, useLocation} from "react-router-dom";


function App() {


  var [pie, setPie] = React.useState([])
  var [sesstart, setSesstart] = React.useState()
  var [loadtab, setLoadtab] = React.useState(false)
  var [empty, setEmpty] = React.useState()
  var [quote, setQuote] = React.useState([])
  var [loadcarousel, setLoadcarousel] = React.useState(false)
  var [loadfoot, setLoadfoot] = React.useState(false)
  var [loadhead, setLoadhead] = React.useState(false)
  var [pieuser, setPieuser] = React.useState([])
  const history = useHistory();
  const email = localStorage.getItem("email")
  const check = localStorage.getItem("check").toString()
  const location = useLocation()
  
  const props = {
      pieData: pie,
      empty: empty,
      load: loadtab,
      quote: quote,
      loadCarousel: loadcarousel,
      sessionStart: sesstart,
      loadFoot: loadfoot,
      pieUser: pieuser
   }


  useEffect(()=>{
    
  setLoadtab(location.state)
  const params = new URLSearchParams()
  params.append("email", email)
  var header = new Headers()
  header.append("Content-Type", "application/x-www-form-urlencoded")
  var req = {
    method: 'POST',
    body: params,
    header: header
  }
 fetch('https://helpsws.herokuapp.com/getuser', req)
  .then((res) => res.json())
  .then((result) => {
  //   console.log("user DATA")
  // console.log(result)
  if(result.verified===false){
    history.push("/Signup")
  }
     localStorage.setItem("name", result.name)
     setLoadhead(true)
  })

  fetch('https://helpsws.herokuapp.com/userdata', req)
  .then((res) => res.json())
  .then((result) => {
    console.log("user DATA")
  console.log(result)
  fetchs.pieData(result)
  console.log(fetchs.pieData(result))
  setPieuser(fetchs.pieData(result))
 
    //  setName(result.name)
  }).catch(err=>console.log(err))
  
  
fetch('https://helpsws.herokuapp.com/id', fetchs.Piechart())
.then(res => res.json())
.then(result => {
  const empty = result.emptyPercentage
 
  setSesstart(result)
  // console.log(result)
  fetchs.pieData(result)
  // console.log(fetchs.pieData(result))
  setEmpty(empty)
  setPie(fetchs.pieData(result))
  
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
  // console.log(props.sessionStart)
  
  return ( 
    
  <div className="backg basic">
 {loadhead===true?
   <Header /> : ' '
}   {loadtab===true || check==="false"?
    <Tabsbutton {...props} /> : ' '
    }     
<div className="main">
    {loadcarousel===true?
      <Carouseltext {...props} />
       : ' '
    }
   <Footer {...props} />
    
  </div>
    </div>
  )
}
  export default App;