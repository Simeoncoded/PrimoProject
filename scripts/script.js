mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener('DOMContentLoaded', function () {
    // Initialize notification and email counters
    const notificationCounter = document.getElementById('notification-counter');
    const emailCounter = document.getElementById('email-counter');

    if (notificationCounter) {
        const notificationCount = localStorage.getItem('notificationCount') || 0;
        notificationCounter.textContent = notificationCount;
    }

    if (emailCounter) {
        const emailCount = localStorage.getItem('emailCount') || 0;
        emailCounter.textContent = emailCount;
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
            localStorage.setItem('ncrLastNum', ncrData.ncr_no);

            // Increment notification and email counters
            incrementNotificationCount();
            incrementEmailCount();

            // Alert user and redirect
            alert("Form submitted successfully!");
            form.reset();
            window.location.href = 'ncrlog.html';
        });
    }

    // Populate notifications dynamically
    const notificationList = document.getElementById('notificationList');
    if (notificationList) {
        const ncrs = JSON.parse(localStorage.getItem('ncrs')) || [];
        notificationList.innerHTML = ''; // Clear any existing items
    
        if (ncrs.length > 0) {
            ncrs.forEach(ncr => {
                // Determine the section (Engineering or Purchasing)
                const section = ncr.process.includes('engineering') ? 'Engineering' : 'Purchasing';
                const ncrLogLink = `ncrlog.html?ncr_no=${ncr.ncr_no}`; // Link to NCR log with query param
    
                // Create a list item for each NCR
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <a class="dropdown-item" href="${ncrLogLink}">
                        NCR #${ncr.ncr_no} - ${section} Section
                    </a>
                `;
                notificationList.appendChild(listItem);
            });
        } else {
            // Show a message if no NCRs are available
            const noItems = document.createElement('li');
            noItems.innerHTML = '<span class="dropdown-item">No notifications available</span>';
            notificationList.appendChild(noItems);
        }
    }
    
    // Clear LocalStorage button functionality
    const clearStorageBtn = document.getElementById('clearStorageBtn');
    if (clearStorageBtn) {
        clearStorageBtn.addEventListener('click', function () {
            // Clear all items from localStorage
            localStorage.clear();
            alert('Local Storage cleared!');

            // Reset the notification and email counters on the page
            if (notificationCounter) notificationCounter.textContent = 0;
            if (emailCounter) emailCounter.textContent = 0;
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

// Function to increment email count
function incrementEmailCount() {
    const emailCounter = document.getElementById('email-counter');
    if (emailCounter) {
        let count = parseInt(emailCounter.textContent) || 0;
        count++;
        emailCounter.textContent = count;
        localStorage.setItem('emailCount', count);
    }
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







