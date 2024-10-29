
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

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

