function updateSearch() {
    const srcTable = document.getElementById("ncrTable"); // Match your table ID
    const srcTableRows = srcTable.getElementsByTagName("tr");

    const ncrNum = document.getElementById("searchInputNumber").value.toLowerCase();
    const ncrDateFrom = document.getElementById("ncrdatefrom").value ? new Date(document.getElementById("ncrdatefrom").value) : null;
    const ncrDateTo = document.getElementById("ncrdateto").value ? new Date(document.getElementById("ncrdateto").value) : null;
    const ncrStatus = document.getElementById("ncrstatus").value.toLowerCase().trim();

    for (let x = 1; x < srcTableRows.length; x++) { // Start from 1 to skip header row
        const row = srcTableRows[x];
        const tableNum = row.getElementsByTagName("td")[0]?.textContent.toLowerCase();
        const tableDate = new Date(row.getElementsByTagName("td")[1]?.textContent.trim()); // Trim whitespace
        const tableStatus = row.getElementsByTagName("td")[3]?.textContent.trim().toLowerCase();

        // Validate date parsing
        const isValidDate = tableDate instanceof Date && !isNaN(tableDate);

        // Apply filters
        const matchesNumber = !ncrNum || (tableNum && tableNum.includes(ncrNum));
        const matchesDate = (!ncrDateFrom || (isValidDate && tableDate >= ncrDateFrom)) &&
                            (!ncrDateTo || (isValidDate && tableDate <= ncrDateTo));
        const matchesStatus = !ncrStatus || (tableStatus && tableStatus === ncrStatus);

        // Show row if all filters match
        row.style.display = matchesNumber && matchesDate && matchesStatus ? "" : "none";
    }
}
