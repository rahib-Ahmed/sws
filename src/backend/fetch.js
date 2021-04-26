export function getTrashId() {
  console.log("called first")
  const query = window.location.search;
  const idParam = new URLSearchParams(query)

  // const id = idParam.get('trashid')

  const id = "4"; // static id remove when completed!
  
  localStorage.setItem("id", id)
  console.log("local Storage set" + localStorage.getItem("id"))

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