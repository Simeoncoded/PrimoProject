ncr = [
    {
        "ncrNum": "2023-001",
        "ncrDate": "2023-09-09",
        "ncrStatus": "open",

        "identifyProcess": {
            "recInspect": false,
            "prodOrder": true
        },
        "supplierName": "Johnwick",
        "prodNum": "1984-A",
        "saleOrderNum": "21",
        "itemDescription": "jimminy crickets",
        "defectDescription": "Somebody's poisoned the waterhole",
        "quantityRecieved": "200",
        "quantityDefective": "150",

        "qaName": "Deer Man",
        "nonConforming": true,
        "needEngineer": true
    },

    {
        "ncrNum": "2022-001",
        "ncrDate": "2022-09-09",
        "ncrStatus": "open",

        "identifyProcess": {
            "recInspect": false,
            "prodOrder": true
        },
        "supplierName": "Johnwick",
        "prodNum": "1984-A",
        "saleOrderNum": "21",
        "itemDescription": "jimminy crickets",
        "defectDescription": "Somebody's poisoned the waterhole",
        "quantityRecieved": "200",
        "quantityDefective": "150",

        "qaName": "Deer Man",
        "nonConforming": true,
        "needEngineer": true
    },

    {
        "ncrNum": "2022-002",
        "ncrDate": "2022-02-03",
        "ncrStatus": "open",

        "identifyProcess": {
            "recInspect": false,
            "prodOrder": true
        },
        "supplierName": "Johnwick",
        "prodNum": "1984-A",
        "saleOrderNum": "21",
        "itemDescription": "jimminy crickets",
        "defectDescription": "Somebody's poisoned the waterhole",
        "quantityRecieved": "200",
        "quantityDefective": "150",

        "qaName": "Deer Man",
        "nonConforming": true,
        "needEngineer": true
    }
]

if (document.location.href == "ncrlog.html") {
    table = document.querySelector("#ncrlog")

    ncr.forEach(form => {

        table.insertAdjacentHTML("afterbegin",
            '<tr>' +
            `<td>${form.ncrNum}</td>` +
            `<td>${form.ncrDate}</td>` +
            `<td>${form.supplierName}</td>` +
            `<td class="status-${form.ncrStatus}">${form.ncrStatus}</td>` +
            `<td>   <button class="vbtn" onclick="showNcrEdit('${form.ncrNum}')">Edit</button>` +               // Add function to accept json object
            `       <button class="vbtn" onclick="showNcrDetails('${form.ncrNum}')">Details</button></td>` +    // change function to accept json object
            '</tr>')                                                                                            // showNcrEdit and showNcrDetails should link to an edit/details page and filled by json object

    });
}

let ncrNum
function showNcrEdit(ncrnum) {

    document.location.href = "edit.html";
    ncrNum = ncrnum

}

// grab ids from edit.html here
ncr_no = document.getElementById("ncr_no")

ncr_no.value = 123456

ncr.forEach(form => {
    if (form.ncrNum == ncrNum) {

        // Fill edit.html with data from form

    }
        console.log(form.ncrNum)

})

