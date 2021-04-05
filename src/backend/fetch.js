
export function getTrashId() {
console.log("called first")
  const query = window.location.search;
  const idParam = new URLSearchParams(query)
  // const id = idParam.get('trashid')
 
 const id = "3"; // static id rmov when completed!
 localStorage.setItem("id", id)
 console.log("1st"+localStorage.getItem("id"))

  var searchParams = new URLSearchParams();
  searchParams.append("id", id);
  var header = new Headers()
  header.append("Content-Type", "application/x-www-form-urlencoded")

  var res = {
    method: 'POST',
    header: header,
    body: searchParams
  }

  fetch('https://helpsws.herokuapp.com/scanned', res)
  .then((res) => res.json())
  .then((result) => {
    console.log(result)
  })
}



