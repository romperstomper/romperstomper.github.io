var xhr = new XMLHttpRequest();
xhr.open('GET', "health2", true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function() { 
  if (xhr.status === 200) {
    var myStuff = JSON.parse(xhr.responseText);
    //var count = Object.keys(myStuff).length;
    //console.log("count is " + count);
  }
  var table = document.createElement('table');
  var tableBody = document.createElement('tbody');
  var header = table.createTHead();
  var row = header.insertRow(0);
  var cell = row.insertCell(0);
  cell.style.border="1px solid black";
  cell.innerHTML = "Host";
  var cell = row.insertCell(1);
  cell.style.border="1px solid black";
  cell.innerHTML = "Status";

  for (var key in myStuff) {
    var row = document.createElement('tr');
    console.log("key is " + key);
    if (myStuff.hasOwnProperty(key)) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(key + " "));
      cell.style.border="1px solid black";
      row.appendChild(cell);
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(myStuff[key]));
      cell.style.border="1px solid black";
      row.appendChild(cell);
      }
    tableBody.appendChild(row);
  };

  table.appendChild(tableBody);
  document.body.appendChild(table);
  table.style.borderCollapse = "collapse";
}