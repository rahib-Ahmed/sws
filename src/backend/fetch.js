export function getTrashId() {
  console.log("called first")
  const query = window.location.search;
  const idParam = new URLSearchParams(query)
  
  const id = idParam.get('trashid')
  // const check = idParam.get('check')
  

                                                  
  // const id = "4"; // static id remove when completed!
  // var check = false
 
  localStorage.setItem("id", id)
  console.log("local Storage set" + localStorage.getItem("id") + " chck valu " + localStorage.getItem("check"));

  var searchParams = new URLSearchParams();
  searchParams.append("id", id);
  var header = new Headers()
  header.append("Content-Type", "application/x-www-form-urlencoded")
   
   var res = {
    method: 'POST',
    header: header,
    body: searchParams
  }

  return res;
}

export function Piechart() {

  console.log("called second")
  console.log("second" + localStorage.getItem("id"))
  var id = localStorage.getItem("id")
  var searchParams = new URLSearchParams();
  searchParams.append("id", id);
  var header = new Headers()
  header.append("Content-Type", "application/x-www-form-urlencoded")

  const req = {

    method: 'POST',
    header: header,
    body: searchParams
  }


  return req;

}

export function getQuote() {


  var searchParams = new URLSearchParams();
  searchParams.append("type", "quote");
  var header = new Headers()
  header.append("Content-Type", "application/x-www-form-urlencoded")

  const req = {

    method: 'POST',
    header: header,
    body: searchParams
  }


  return req;

}

export function pieData(x) {

  const plastic = x.plasticPercentage;
  const metal = x.metalPercentage;
  const bio = x.bioPercentage;
  const glass = x.glassPercentage;
  const paper = x.paperPercentage;
  


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
return areas;
}

export function getLocked(){
  var lockedMessage=['Unlocks on your first SignUp', 'Unlocks when your total plastic waste, for a week, is less than 20 percent', 
        'Unlocks when your total plastic waste, for a month, is less than 20 percent', 
        'Unlocks when your total plastic waste, for 6 months, is less than 20 percent',
        'Unlocks when your total plastic waste, for a year, is less than 20 percent', 'Unlocks when you use SWS at a public place for the first time',
        'Unlocks when you use SWS at a public place for 10', 'Unlocks when you recycle for the first time', 'Unlocks on 10 recycles']
        return lockedMessage;
}
export function getUnlocked(){
  var completedMessage=['a','b','c','d','e','f','g','h','i']
        return completedMessage;
}