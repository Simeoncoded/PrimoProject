
function updateSearch(){ // Help from https://www.w3schools.com/howto/howto_js_filter_table.asp

    srcTable = document.getElementById("searchTable")
    srcTableRows = document.getElementsByTagName("tr")

    ncrNum = document.getElementById("searchInputNumber")

    for(x = 0; x < srcTableRows.length; x++){

        tableDesc = srcTableRows[x].getElementsByTagName("td")[0]; // Gets first td from the row, which is under the NCR Number Column
        
        if(tableDesc){

            if (tableDesc.textContent.indexOf(ncrNum.value) > -1) { // If search value matches a row value then display the row, otherwise hide the row
                srcTableRows[x].style.display = ""
            } else {
                srcTableRows[x].style.display = "none"
            }
        }
    }
}
