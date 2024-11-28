window.addEventListener("load", function () {
    // Get the selected NCR number from localStorage
    const ncrnum = localStorage.getItem('selectedNcr');
    const ncrs = JSON.parse(localStorage.getItem('ncrs')); // Parse stored NCRs
    let thisNcr = null;

    // Find the selected NCR object
    ncrs.forEach((ncr) => {
        if (ncr.ncr_no === ncrnum) {
            thisNcr = ncr;
        }
    });

    // If the NCR isn't found, log an error and stop execution
    if (!thisNcr) {
        console.error("NCR not found");
        return;
    }

    // Form field elements
    const ncrInput = document.getElementById("ncr_no");
    const dateInput = document.getElementById("date");
    const supplierInput = document.getElementById("supplier_name");
    const prodInput = document.getElementById("po_prod_no");
    const salesInput = document.getElementById("sales_order_no");
    const itemInput = document.getElementById("item_description");
    const defectInput = document.getElementById("defect_description");
    const receivedInput = document.getElementById("quantity_received");
    const defectiveInput = document.getElementById("quantity_defective");
    const repInput = document.getElementById("quality_rep_name");
    const conformInputs = document.querySelectorAll('input[name="nonconforming"]'); // Radio buttons
    const engInputs = document.querySelectorAll('input[name="ennotneeded"]'); // Radio buttons

    // Prefill form fields with data from thisNcr
    ncrInput.value = thisNcr.ncr_no || ""; // Default to empty if not present
    ncrInput.setAttribute("disabled", true); // Disable editing

    dateInput.value = thisNcr.date || new Date().toISOString().substring(0, 10); // Default to current date
    dateInput.setAttribute("disabled", true); // Disable editing

    supplierInput.value = thisNcr.supplier_name || "";
    prodInput.value = thisNcr.po_prod_no || "";
    salesInput.value = thisNcr.sales_order_no || "";
    itemInput.value = thisNcr.item_description || "";
    defectInput.value = thisNcr.defect_description || "";
    receivedInput.value = thisNcr.quantity_received || "";
    defectiveInput.value = thisNcr.quantity_defective || "";
    repInput.value = thisNcr.quality_rep_name || "";

    // Handle radio button inputs (e.g., conformInputs and engInputs)
    if (thisNcr.nonconforming) {
        conformInputs.forEach((radio) => {
            if (radio.value === thisNcr.nonconforming) {
                radio.checked = true;
            }
        });
    }

    if (thisNcr.ennotneeded) {
        engInputs.forEach((radio) => {
            if (radio.value === thisNcr.ennotneeded) {
                radio.checked = true;
            }
        });
    }

    // Save button logic
    const saveButton = document.getElementById("btnSubmit");
    saveButton.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent form submission

        // Update the current NCR object with the new values
        thisNcr.supplier_name = supplierInput.value;
        thisNcr.po_prod_no = prodInput.value;
        thisNcr.sales_order_no = salesInput.value;
        thisNcr.item_description = itemInput.value;
        thisNcr.defect_description = defectInput.value;
        thisNcr.quantity_received = receivedInput.value;
        thisNcr.quantity_defective = defectiveInput.value;
        thisNcr.quality_rep_name = repInput.value;

        // Get the selected value from the nonconforming radio buttons
        conformInputs.forEach((radio) => {
            if (radio.checked) {
                thisNcr.nonconforming = radio.value;
            }
        });

        // Get the selected value from the ennotneeded radio buttons
        engInputs.forEach((radio) => {
            if (radio.checked) {
                thisNcr.ennotneeded = radio.value;
            }
        });

        // Save the updated ncrs array back to localStorage
        localStorage.setItem('ncrs', JSON.stringify(ncrs));

        // Show a success message or redirect the user
        alert("NCR updated successfully!");

    
        window.location.href = "ncrlog.html";
    });
});
