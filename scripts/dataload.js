url = document.getElementById("ncrdata").src
table = document.querySelector("#ncrlog")

//https://www.w3schools.com/xml/xml_http.asp

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       console.log("ready")
       var myvar = JSON.parse(this.responseText)
       console.log(myvar)
    }
};

xhttp.open("GET", "filename", true);
xhttp.send();


table.insertAdjacentHTML("afterbegin", 
    '<tr>' +
        '<td>4683-001</td>' +
        '<td>2023-10-12</td>' +
        '<td>John Doe</td>' +
        '<td class="status-empty">Closed</td>' +
        '<td> <button class="vbtn">Edit</button>  <button class="vbtn"onclick="showNcrDetails()">Details</button></td>' +
    '</tr>')
