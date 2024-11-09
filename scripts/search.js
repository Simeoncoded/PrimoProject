
function updateSearch(){ // Help from https://www.w3schools.com/howto/howto_js_filter_table.asp

    srcTable = document.getElementById("searchTable")
    srcTableRows = document.getElementsByTagName("tr")

    ncrNum = document.getElementById("searchInputNumber")
    ncrDateFrom = document.getElementById("ncrdatefrom")
    ncrDateTo = document.getElementById("ncrdateto")
    ncrStatus = document.getElementById("ncrstatus")

    for(x = 0; x < srcTableRows.length; x++){

        tableNum = srcTableRows[x].getElementsByTagName("td")[0]; // Gets first td from the row, which is under the NCR Number Column
        tableDate = srcTableRows[x].getElementsByTagName("td")[1]; // Gets second td from the row, which is under the NCR Date Column
        tableStatus = srcTableRows[x].getElementsByTagName("td")[3]; // Gets fourth td from the row, which is under the Status Column
        
        if(tableNum){

            if (tableNum.textContent.indexOf(ncrNum.value) > -1) { // If search value matches a row value then display the row, otherwise hide the row
                srcTableRows[x].style.display = ""
            } else {
                srcTableRows[x].style.display = "none"
            }
        }

        if(tableDate){

            if(tableDate.textContent >= ncrDateFrom && tableDate.textContent <= ncrDateTo){
                srcTableRows[x].style.display = ""
            } else {
                srcTableRows[x].style.display = "none"
            }
        }

        if(tableStatus){

            if(tableStatus.textContent.indexOf(ncrStatus.value) > -1) { // Should be an enum + dropdown list
                srcTableRows[x].style.display = ""
            } else {
                srcTableRows[x].style.display = "none"
            }
        }
    }
}