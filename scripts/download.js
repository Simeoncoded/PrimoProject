async function downloadReport(format, button) {
    if (format === "pdf") {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();

        // Title Section
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(16);
        pdf.text("Non-Conformance Report (NCR)", 10, 15);

        
        const row = button.closest("tr");
        const cells = row.querySelectorAll("td");

        const ncrNumber = cells[0].innerText.trim();
        const date = cells[1].innerText.trim();
        const supplier = cells[2].innerText.trim();
        const status = cells[3].innerText.trim();

        const inspector = "John Doe";
        const engineer = "Jane Smith";
        const purchasing = "Mike Johnson";
        const defectType = "Manufacturing Defect";  
        const priority = "High";  
        const rootCause = "Improper calibration";  
        const correctiveAction = "Recalibrate machines";  
        const preventiveAction = "Implement regular machine checks";  
        const dueDate = "2023-11-15";  
        const resolutionDate = "2023-11-10";  
        const comments = "Issue resolved, awaiting final inspection";  
        const attachments = "Report.pdf";  

       
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

       
        let startX = 10;
        let startY = 30;
        const lineHeight = 10;

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12);

   
        headers.forEach((header, index) => {
            pdf.text(`${header}:`, startX, startY);
            pdf.setFont("helvetica", "normal");
            pdf.text(values[index], startX + 40, startY); 
            startY += lineHeight; 
        });

        startY += 10;

        
        if (attachments) {
            pdf.text("Attachments:", startX, startY);
            pdf.text(attachments, startX + 40, startY);
        }

        // Save the PDF with the NCR Number in the filename
        pdf.save(`NCR_Report_${ncrNumber}.pdf`);
    }
}
