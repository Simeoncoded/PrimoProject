window.addEventListener("load", function () {
    // Get the selected NCR number from localStorage
    const ncrnum = localStorage.getItem('selectedNcr');
    const ncrs = JSON.parse(localStorage.getItem('ncrs')); // Parse stored NCRs
    let thisNcr = null;

    // Find the selected NCR object
    ncrs.forEach((ncr) => {
        if (ncr.ncr_no == ncrnum) {
            thisNcr = ncr;
        }
    });

    
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

    // Engineer field elements
    const engReview = document.getElementById("review_engineering") // Select Statement
    const engNotifyCustomer = document.querySelectorAll('input[name="customer_notification"]'); // Radio buttons
    const engDisposition = document.getElementById("disposition")
    const engUpdateDrawing = document.querySelectorAll('input[name="drawing_update"]'); // Radio buttons
    const engOrgVersion = document.getElementById("original_revision")
    const engUpdVersion = document.getElementById("updated_revision")
    const engName = document.getElementById("engineer_name")
    const engRevisionDate = document.getElementById("revision_date")
    const engDetails = document.getElementById("engineering")
    const engDate = document.getElementById("engineering_date")

    // Prefill form fields with data from thisNcr
    ncrInput.value = thisNcr.ncr_no; 
    ncrInput.setAttribute("disabled", true); 

    dateInput.value = thisNcr.date; // Default to current date
    dateInput.setAttribute("disabled", true); 

    supplierInput.value = thisNcr.supplier_name || "";
    prodInput.value = thisNcr.po_prod_no || "";
    salesInput.value = thisNcr.sales_order_no || "";
    itemInput.value = thisNcr.item_description || "";
    defectInput.value = thisNcr.defect_description || "";
    receivedInput.value = thisNcr.quantity_received || "";
    defectiveInput.value = thisNcr.quantity_defective || "";
    repInput.value = thisNcr.quality_rep_name || "";

    // Engineer field
    if(thisNcr.eng == {}){
    } else {
            
        engReview = thisNcr.eng.Review || "";
        engNotifyCustomer = thisNcr.eng.NotifyCustomer || "";
        engDisposition = thisNcr.eng.Disposition || "";
        engUpdateDrawing  = thisNcr.eng.UpdateDrawing || "";
        engOrgVersion  = thisNcr.eng.OrgVersion || "";
        engUpdVersion = thisNcr.eng.UpdVersion || "";
        engName  = thisNcr.eng.Name || "";
        engRevisionDate  = thisNcr.eng.RevisionDate || "";
        engDetails = thisNcr.eng.Details || "";
        engDate = thisNcr.eng.Date || "";
        
    }

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

    engNotifyCustomer.forEach((radio) => {
        if (radio.value === thisNcr.eng.NotifyCustomer) {
            radio.checked = true;
        }
    });

    engUpdateDrawing.forEach((radio) => {
        if (radio.value === thisNcr.eng.UpdateDrawing) {
            radio.checked = true;
        }
    });

    // Save button logic
    const saveButton = document.getElementById("btnSubmit");
    saveButton.addEventListener("click", function (e) {
        e.preventDefault(); 

        // Update the current NCR object with the new values
        thisNcr.supplier_name = supplierInput.value;
        thisNcr.po_prod_no = prodInput.value;
        thisNcr.sales_order_no = salesInput.value;
        thisNcr.item_description = itemInput.value;
        thisNcr.defect_description = defectInput.value;
        thisNcr.quantity_received = receivedInput.value;
        thisNcr.quantity_defective = defectiveInput.value;
        thisNcr.quality_rep_name = repInput.value;

        conformInputs.forEach((radio) => {
            if (radio.checked) {
                thisNcr.nonconforming = radio.value;
            }
        });

      
        engInputs.forEach((radio) => {
            if (radio.checked) {
                thisNcr.ennotneeded = radio.value;
            }
        });


        // Save the updated ncrs array back to localStorage
        localStorage.setItem('ncrs', JSON.stringify(ncrs));

       
        alert("NCR updated successfully!");

    
        window.location.href = "ncrlog.html";
    });
    
    const saveEngButton = document.getElementById("btnSubmit");
    saveEngButton.addEventListener("click", function (e) {
        e.preventDefault(); 
        
        // Engineer field
        
        thisNcr.eng.Review = engReview.value;
        thisNcr.eng.Disposition = engDisposition.value;
        thisNcr.eng.OrgVersion = engOrgVersion.value;
        thisNcr.eng.UpdVersion = engUpdVersion.value;
        thisNcr.eng.Name = engName.value;
        thisNcr.eng.RevisionDate = engRevisionDate.value;
        thisNcr.eng.Details = engDetails.value;
        thisNcr.eng.Date = engDate.value;
       
        engNotifyCustomer.forEach((radio) => {
            if (radio.checked) {
                thisNcr.eng.NotifyCustomer = radio.value;
            }
        });

        engUpdateDrawing.forEach((radio) => {
            if (radio.checked) {
                thisNcr.eng.UpdateDrawing = radio.value;
            }
        });

        localStorage.setItem('ncrs', JSON.stringify(ncrs));

       
        alert("NCR updated successfully!");

    
       window.location.href = "ncrlog.html";
    })
    
document.querySelector('#btnSave').addEventListener('click', function(event) {
    event.preventDefault();
    const ncrNumber = document.getElementById('ncr_no').value;

    // Check if NCR number is empty
    if (!ncrNumber) {
        alert('Please enter an NCR number before saving.');
        return; 
    }

    // If NCR number is filled, continue to save
    const formData = {
        ncr_no: ncrNumber,
        date: document.getElementById('date').value,
        process: document.querySelector('input[name="process"]:checked')?.value,
        supplier_name: document.getElementById('supplier_name').value,
        po_prod_no: document.getElementById('po_prod_no').value,
        sales_order_no: document.getElementById('sales_order_no').value,
        item_description: document.getElementById('item_description').value,
        defect_description: document.getElementById('defect_description').value,
        quantity_received: document.getElementById('quantity_received').value,
        quantity_defective: document.getElementById('quantity_defective').value,
        quality_rep_name: document.getElementById('quality_rep_name').value,
        nonconforming: document.querySelector('input[name="nonconforming"]:checked')?.value,
        ennotneeded: document.querySelector('input[name="ennotneeded"]:checked')?.value
    };

    
    localStorage.setItem('ncrFormData', JSON.stringify(formData));
    alert('Form data saved successfully!');
});
});
