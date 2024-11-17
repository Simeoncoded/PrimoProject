ncr = {
    "form1":{
        
    "ncrNum":"2023-001",
    "ncrDate":"2023-09-09",

    "identifyProcess":{
        "recInspect":false,
        "prodOrder":true
        },
    "supplierName":"Johnwick",
    "prodNum":"1984-A",
    "saleOrderNum":"21",
    "itemDescription":"jimminy crickets",
    "defectDescription":"Somebody's poisoned the waterhole",
    "quantityRecieved":"200",
    "quantityDefective":"150",

    "qaName":"Deer Man",
    "nonConforming":true,
    "needEngineer":true
    },

    "form2":{
        
    "ncrNum":"2022-001",
    "ncrDate":"2022-09-09",

    "identifyProcess":{
        "recInspect":false,
        "prodOrder":true
        },
    "supplierName":"Johnwick",
    "prodNum":"1984-A",
    "saleOrderNum":"21",
    "itemDescription":"jimminy crickets",
    "defectDescription":"Somebody's poisoned the waterhole",
    "quantityRecieved":"200",
    "quantityDefective":"150",

    "qaName":"Deer Man",
    "nonConforming":true,
    "needEngineer":true
    },
    
    "form3":{
        
    "ncrNum":"2022-001",
    "ncrDate":"2022-02-03",

    "identifyProcess":{
        "recInspect":false,
        "prodOrder":true
        },
    "supplierName":"Johnwick",
    "prodNum":"1984-A",
    "saleOrderNum":"21",
    "itemDescription":"jimminy crickets",
    "defectDescription":"Somebody's poisoned the waterhole",
    "quantityRecieved":"200",
    "quantityDefective":"150",

    "qaName":"Deer Man",
    "nonConforming":true,
    "needEngineer":true
    }
}
table = document.querySelector("#ncrlog")

console.log(ncr)

table.insertAdjacentHTML("afterbegin", 
    '<tr>' +
        '<td>4683-001</td>' +
        '<td>2023-10-12</td>' +
        '<td>John Doe</td>' +
        '<td class="status-empty">Closed</td>' +
        '<td> <button class="vbtn">Edit</button>  <button class="vbtn"onclick="showNcrDetails()">Details</button></td>' +
    '</tr>')
