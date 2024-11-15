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


