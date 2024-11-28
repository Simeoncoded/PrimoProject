document.addEventListener('DOMContentLoaded', function () {
    // Initialize notification counter
    const notificationCounter = document.getElementById('notification-counter');
    if (notificationCounter) {
        // Get the current count from localStorage and display it
        const count = localStorage.getItem('notificationCount') || 0;
        notificationCounter.textContent = count;
    }

    // Form submission handling
    const form = document.getElementById('ncrForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent page refresh

            // Collect form data
            const ncrData = {
                ncr_no: document.getElementById('ncr_no').value,
                date: document.getElementById('date').value,
                process: Array.from(document.querySelectorAll('input[name="process"]:checked')).map(c => c.value),
                supplier_name: document.getElementById('supplier_name').value,
                po_prod_no: document.getElementById('po_prod_no').value,
                sales_order_no: document.getElementById('sales_order_no').value,
                item_description: document.getElementById('item_description').value,
                defect_description: document.getElementById('defect_description').value,
                quantity_received: document.getElementById('quantity_received').value,
                quantity_defective: document.getElementById('quantity_defective').value,
                quality_rep_name: document.getElementById('quality_rep_name').value,
                nonconforming: document.querySelector('input[name="nonconforming"]:checked').value,
                ennotneeded: document.querySelector('input[name="ennotneeded"]:checked').value,
                status: "open"
            };

            // Store data in localStorage
            const existingNCRs = JSON.parse(localStorage.getItem('ncrs')) || [];
            existingNCRs.push(ncrData);
            localStorage.setItem('ncrs', JSON.stringify(existingNCRs));

            // Increment notification counter
            incrementNotificationCount();

            // Alert user and redirect
            alert("Form submitted successfully!");
            form.reset();
            window.location.href = 'ncrlog.html';
        });
    }

    // Clear LocalStorage button functionality
    const clearStorageBtn = document.getElementById('clearStorageBtn');
    if (clearStorageBtn) {
        clearStorageBtn.addEventListener('click', function () {
            // Clear all items from localStorage
            localStorage.clear();
            alert('Local Storage cleared!');
            // Reset the notification counter on the page
            notificationCounter.textContent = 0;
        });
    }
});

// Function to increment notification count
function incrementNotificationCount() {
    const notificationCounter = document.getElementById('notification-counter');
    if (notificationCounter) {
        let count = parseInt(notificationCounter.textContent) || 0;
        count++;
        notificationCounter.textContent = count;
        localStorage.setItem('notificationCount', count);
    }
}


// Initialize notification counter on page load
document.addEventListener('DOMContentLoaded', function () {
    const notificationCounter = document.getElementById('notification-counter');
    
    if (notificationCounter) {
        // Get the current count from localStorage
        const count = localStorage.getItem('notificationCount') || 0;
        notificationCounter.textContent = count; // Display the count
    } else {
        console.error("Notification counter element not found");
    }
});





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




