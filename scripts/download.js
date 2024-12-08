async function downloadReport(format, button) {
    if (format === "pdf") {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();

        // Title Section
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(16);
        pdf.text("Non-Conformance Report (NCR)", 10, 15);

        // Fetch Data from the Table Row
        const row = button.closest("tr");
        const cells = row.querySelectorAll("td");

        const ncrNumber = cells[0].innerText.trim();
        const date = cells[1].innerText.trim();
        const supplier = cells[2].innerText.trim();
        const status = cells[3].innerText.trim();

        // Hardcode or dynamically fetch the extra details (this can be replaced with dynamic logic)
        const inspector = "John Doe";
        const engineer = "Jane Smith";
        const purchasing = "Mike Johnson";
        const defectType = "Manufacturing Defect";  // Example
        const priority = "High";  // Example
        const rootCause = "Improper calibration";  // Example
        const correctiveAction = "Recalibrate machines";  // Example
        const preventiveAction = "Implement regular machine checks";  // Example
        const dueDate = "2023-11-15";  // Example
        const resolutionDate = "2023-11-10";  // Example
        const comments = "Issue resolved, awaiting final inspection";  // Example
        const attachments = "Report.pdf";  // Example

        // Headers and Values for the Report
        const headers = [
            "NCR ID", "Date", "Supplier", "Status", "Inspector", "Engineer", "Purchasing",
            "Defect Type", "Priority", "Root Cause", "Corrective Action", "Preventive Action",
            "Due Date", "Resolution Date", "Comments", "Attachments"
        ];

        const values = [
            ncrNumber, date, supplier, status, inspector, engineer, purchasing, defectType, 
            priority, rootCause, correctiveAction, preventiveAction, dueDate, resolutionDate, 
            comments, attachments
        ];

        // Formatting the PDF
        let startX = 10;
        let startY = 30;
        const lineHeight = 10;

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12);

        // Loop through headers and values to format the table-like layout
        headers.forEach((header, index) => {
            pdf.text(`${header}:`, startX, startY);
            pdf.setFont("helvetica", "normal");
            pdf.text(values[index], startX + 40, startY); // Align values next to headers
            startY += lineHeight; // Move to the next line
        });

        // Add space between sections
        startY += 10;

        // Add Attachments Section (if available)
        if (attachments) {
            pdf.text("Attachments:", startX, startY);
            pdf.text(attachments, startX + 40, startY);
        }

        // Save the PDF with the NCR Number in the filename
        pdf.save(`NCR_Report_${ncrNumber}.pdf`);
    }
}
