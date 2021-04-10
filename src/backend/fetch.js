export function getTrashId() {
  console.log("called first")
  const query = window.location.search;
  const idParam = new URLSearchParams(query)
  // const id = idParam.get('trashid')

  const id = "3"; // static id rmov when completed!
  localStorage.setItem("id", id)
  console.log("1st" + localStorage.getItem("id"))

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