const statusTypes = {
    closed: "Closed",
    engineer: "Engineer",
    procurement: "Procurement",
    quality_inspector: "Quality Inspector",
    open: "Open",
    archived: "Archived"
};

function updateSearch() { // Help from https://www.w3schools.com/howto/howto_js_filter_table.asp
    const srcTable = document.getElementById("searchTable");
    const srcTableRows = srcTable.getElementsByTagName("tr");

    const ncrNum = document.getElementById("searchInputNumber").value.toLowerCase();
    const ncrDateFrom = document.getElementById("ncrdatefrom").value ? new Date(document.getElementById("ncrdatefrom").value) : null;
    const ncrDateTo = document.getElementById("ncrdateto").value ? new Date(document.getElementById("ncrdateto").value) : null;
    const ncrStatus = document.getElementById("ncrstatus").value;

    for (let x = 1; x < srcTableRows.length; x++) { // Start fsrom 1 to skip header row
        const row = srcTableRows[x];
        const tableNum = row.getElementsByTagName("td")[0]?.textContent.toLowerCase();
        const tableDate = new Date(row.getElementsByTagName("td")[1]?.textContent);
        const tableStatus = row.getElementsByTagName("td")[3]?.textContent.trim();

        // Apply filters
        const matchesNumber = !ncrNum || tableNum.includes(ncrNum);
        const matchesDate = (!ncrDateFrom || tableDate >= ncrDateFrom) && (!ncrDateTo || tableDate <= ncrDateTo);
        const matchesStatus = !ncrStatus || tableStatus === ncrStatus;

        // Show row if all filters match
        row.style.display = matchesNumber && matchesDate && matchesStatus ? "" : "none";
    }
}
