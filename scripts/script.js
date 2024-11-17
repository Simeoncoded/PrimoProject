const form = document.querySelector('form');
const notificationCounter = document.getElementById('notification-counter');


let initialCount = localStorage.getItem('notificationCount') || 0;
notificationCounter.textContent = initialCount;


function incrementNotificationCount() {
    let count = parseInt(notificationCounter.textContent);
    count++;
    notificationCounter.textContent = count;
    localStorage.setItem('notificationCount', count); 
}


if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        incrementNotificationCount();

 
        alert("Form submitted successfully!");
        form.reset(); 
    });
} else {
    console.error("Form element not found");
}



function showNcrDetails(ncrNumber, date, supplier, status) {
    const modalBody = document.getElementById("modalBodyContent");

    // Populate modal content with NCR details
    modalBody.innerHTML = `
        <p><strong>NCR Number:</strong> ${ncrNumber}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Supplier:</strong> ${supplier}</p>
        <p><strong>Status:</strong> ${status}</p>
    `;

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('ncrDetailsModal'));
    modal.show();
}

//https://www.w3schools.com/w3css/w3css_modal.asp
// https://www.w3schools.com/howto/howto_css_modals.asp
function showEditDetails(ncrNumber, date, supplier, status, prodNo, salesNo) {
    const modalBody = document.getElementById("editModalBodyContent");

    // add the stuff for whats shown inside the modal remember to check what else i need
    modalBody.innerHTML = `
        <form id="editNcrForm">
            <div class="mb-3">
                <label for="editNcrNumber" class="form-label"><strong>NCR Number:</strong></label>
                <input type="text" class="form-control" id="editNcrNumber" value="${ncrNumber}" readonly>
            </div>
            <div class="mb-3">
                <label for="editDate" class="form-label"><strong>Date:</strong></label>
                <input type="date" class="form-control" id="editDate" value="${date}">
            </div>
            <div class="mb-3">
                <label for="editSupplier" class="form-label"><strong>Supplier:</strong></label>
                <input type="text" class="form-control" id="editSupplier" value="${supplier}">
            </div>
            <div class="mb-3">
                <label for="editStatus" class="form-label"><strong>Status:</strong></label>
                <select class="form-control" id="editStatus">
                    <option value="Not Filled" ${status === 'Not Filled' ? 'selected' : ''}>Not Filled</option>
                    <option value="Filled" ${status === 'Filled' ? 'selected' : ''}>Filled</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="editProdNo" class="form-label"><strong>Edit Prod No:</strong></label>
                <input type="text" class="form-control" id="editProdNo" value="${prodNo}">
            </div>

            <div class="mb-3">
                <label for="editSalesNo" class="form-label"><strong>Edit Sales No:</strong></label>
                <input type="text" class="form-control" id="editSalesNo" value="${salesNo}">
            </div>

            <div class="mb-3">
                <label for="identifyError" class="form-label"><strong>Identify Process Applicable:</strong></label>
                <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="supplier" name="process"
                                value="Supplier or Rec-Insp">
                            <label class="form-check-label" for="supplier">Supplier or Rec-Insp</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="wip" name="process" value="WIP">
                            <label class="form-check-label" for="wip">WIP (Production Order)</label>
                        </div>
            </div>
            <div class="mb-3">
            <label for="editSupplier_name" class="form-label">Supplier Name*</label>                    
                    <select class="form-control" id="editSupplier_name" name="editSupplier_name" required aria-required="true">
                        <option value="">Select a supplier</option>
                        <option value="supplier1">Supplier 1</option>
                        <option value="supplier2">Supplier 2</option>
                        <option value="supplier3">Supplier 3</option>
                    </select>
            </div>

            <div class="mb-3">
            <label for="po_prod_no" class="form-label">PO or Prod. No.*</label>
                    <input type="text" class="form-control" id="po_prod_no" name="po_prod_no" required aria-required="true" placeholder="Enter product Number">
                    <span id="prodError" class="text-danger" style="display: none; font-size: 0.9em;">Prod. No is required</span>
            </div>

            <div class="mb-3">
            <label for="sales_order_no" class="form-label">Sales Order No.*</label>
                    <input type="text" class="form-control" id="sales_order_no" name="sales_order_no" required
                        aria-required="true" placeholder="Enter sales order number">
            </div>
            <div class="mb-3">            
                <label for="item_description" class="form-label">Description of Item (including SAP No.)*</label>
                <textarea class="form-control" id="item_description" name="item_description" rows="3" required aria-required="true" placeholder="Enter the description of the item"></textarea>
            </div>

            <div class="mb-3">
            <label for="defect_description" class="form-label">Description of Defect (in as much detail as
                        possible)</label>
                    <textarea class="form-control" id="defect_description" name="defect_description" rows="3" required
                        aria-required="true" placeholder="Enter the description of all defects"></textarea>
            </div>

            <div class="mb-3">
            <label for="quantity_received" class="form-label">Quantity Received*</label>
                    <input type="number" class="form-control" id="quantity_received" name="quantity_received" min="0"
                        required aria-required="true" placeholder="Enter the quantity of product received">
            </div>
            
            <div class="mb-3">
            <label for="quantity_defective" class="form-label">Quantity Defective*</label>
                    <input type="number" class="form-control" id="quantity_defective" name="quantity_defective" min="0"
                        required aria-required="true" placeholder="Enter the amount of defects ">
            </div>

            <div class="mb-3">
            <label for="quality_rep_name" class="form-label">Quality Representative's Name*</label>
                    <input type="text" class="form-control" id="quality_rep_name" name="quality_rep_name" required
                        aria-required="true" placeholder="Enter quality representative's name">
            </div>

            <div class="mb-3">
             <fieldset>
                        <legend class="form-label fw-bold">Item marked Nonconforming:*</legend>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="nonconforming_yes" name="nonconforming"
                                value="Yes" required aria-required="true">
                            <label class="form-check-label" for="nonconforming_yes">Yes</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="nonconforming_no" name="nonconforming"
                                value="No" required aria-required="true">
                            <label class="form-check-label" for="nonconforming_no">No</label>
                        </div>
                        
                        
                    </fieldset>
            </div>

            <div class="mb-3">
            <fieldset>
                        <legend class="form-label fw-bold">Engineering Not Needed:*</legend>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="enginnotneeded_yes" name="ennotneeded"
                                value="Yes" required aria-required="true">
                            <label class="form-check-label" for="enginnotneeded_yes">Yes</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="enginnotneeded_no" name="ennotneeded"
                                value="No" required aria-required="true">
                            <label class="form-check-label" for="enginnotneeded_no">No</label>
                        </div>
                        <span id="enginNotMarkedError" class="text-danger" style="display: none; font-size: 0.9em;">Required</span>
                    </fieldset>
            </div>

            <div class="mb-3">
            </div>

            <button type="button" class="btn btn-primary" onclick="saveNcrEdits()">Save changes</button>
        </form>
    `;

    // Show the modal
    const editModal = new bootstrap.Modal(document.getElementById('editNcrModal'));
    editModal.show();
}



document.querySelector('#btnSave').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    const ncrNumber = document.getElementById('ncr_no').value;

    // Check if NCR number is empty
    if (!ncrNumber) {
        alert('Please enter an NCR number before saving.');
        return; // Stop execution if NCR number is empty
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

    // Save to local storage (or proceed with other save actions)
    localStorage.setItem('ncrFormData', JSON.stringify(formData));
    alert('Form data saved successfully!');
});


