export function getTrashId() {
  console.log("called first")
  const query = window.location.search;
  const idParam = new URLSearchParams(query)
  
  const id = idParam.get('trashid')                                                
  // const id = "4"; // static id remove when completed!
  localStorage.setItem("id", id)


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

export function updateUserTrack(type){
  
  // console.log(type)
  var email = localStorage.getItem("email")
  var searchParams = new URLSearchParams();
  searchParams.append("email", email);
  searchParams.append("task", type);
  var header = new Headers()
  header.append("Content-Type", "application/x-www-form-urlencoded")

  const req = {

    method: 'POST',
    header: header,
    body: searchParams
  }


  return req;
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
  var completedMessage=['Way to go, on your first step towards a sustainable planet!','All organic Novice!','All organic Junior!','All organic Senior!','All organic Pro','Hello Neighbours!','Hello World!','Doing my part.','Im going all the way!']
        return completedMessage;
}

export function setAchievements() {

  var email = localStorage.getItem("email")
  var searchParams = new URLSearchParams();
  searchParams.append("email", email);
  searchParams.append("days", "7")
  var header = new Headers()
  header.append("Content-Type", "application/x-www-form-urlencoded")
  var req = {
    method: 'POST',
    body: searchParams,
    header: header
  }

  return req;
}
