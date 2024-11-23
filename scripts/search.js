function updateSearch() { // Help from https://www.w3schools.com/howto/howto_js_filter_table.asp
    const srcTable = document.getElementById("ncrTable"); // Table element
    const srcTableRows = srcTable.getElementsByTagName("tr"); // All rows in the table

    const ncrNum = document.getElementById("searchInputNumber").value.toLowerCase().trim();
    const ncrSupplier = document.getElementById("searchSupplier").value.toLowerCase().trim();
    const ncrDateFrom = document.getElementById("ncrdatefrom").value ? new Date(document.getElementById("ncrdatefrom").value) : null;
    const ncrDateTo = document.getElementById("ncrdateto").value ? new Date(document.getElementById("ncrdateto").value) : null;
    const ncrStatus = document.getElementById("ncrstatus").value.toLowerCase().trim();

    for (let x = 1; x < srcTableRows.length; x++) { 
        const row = srcTableRows[x];
        const tableNum = row.getElementsByTagName("td")[0]?.textContent.toLowerCase().trim();
        const tableDate = new Date(row.getElementsByTagName("td")[1]?.textContent.trim());
        const tableSupplier = row.getElementsByTagName("td")[2]?.textContent.toLowerCase().trim();
        const tableStatus = row.getElementsByTagName("td")[3]?.textContent.trim().toLowerCase();

        // Validate date parsing
        const isValidDate = tableDate instanceof Date && !isNaN(tableDate);

        // Apply filters
        const matchesNumber = !ncrNum || (tableNum && tableNum.includes(ncrNum));
        const matchesSupplier = !ncrSupplier || (tableSupplier && tableSupplier.includes(ncrSupplier));
        const matchesDate = (!ncrDateFrom || (isValidDate && tableDate >= ncrDateFrom)) &&
                            (!ncrDateTo || (isValidDate && tableDate <= ncrDateTo));
        const matchesStatus = !ncrStatus || (tableStatus && tableStatus === ncrStatus);

        // Show row if all filters match
        row.style.display = matchesNumber && matchesSupplier && matchesDate && matchesStatus ? "" : "none";
    }
}
