function getRowData(button) {
   
    const row = button.closest("tr");
    const cells = row.querySelectorAll("td");
    
    return Array.from(cells).map((cell) => cell.innerText.trim());
}

async function downloadReport(format, button) {
    if (format === "pdf") {
        // Initialize jsPDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();

        // Set Title
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(14);
        pdf.text("NCR Report", 10, 10);

        // Get row data for the clicked button
        const rowData = getRowData(button);

        // Define the column headers
        const headers = ["NCR Number", "Date", "Supplier", "Status"];
        const columnSpacing = [10, 50, 100, 150]; // X positions for each column

        // Add headers to the PDF
        pdf.setFontSize(12);
        pdf.setFont("helvetica", "bold");
        headers.forEach((header, index) => {
            pdf.text(header, columnSpacing[index], 20);
        });

        // Add row data to the PDF
        pdf.setFont("helvetica", "normal");
        rowData.slice(0, 4).forEach((data, index) => { // Only take the first 4 fields
            pdf.text(data, columnSpacing[index], 30);
        });

        // Save the generated PDF
        pdf.save("NCR_Report.pdf");
    }
}
