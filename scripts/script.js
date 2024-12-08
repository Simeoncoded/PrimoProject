mybutton = document.getElementById("btn-back-to-top");


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

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener('DOMContentLoaded', function () {
    
    const notificationCounter = document.getElementById('notification-counter');
    const emailCounter = document.getElementById('email-counter');
    const notificationList = document.getElementById('notificationList');
    const form = document.getElementById('ncrForm');
    const engineeringForm = document.getElementById('engineeringForm');
    const clearStorageBtn = document.getElementById('clearStorageBtn');

    
    if (notificationCounter) {
        const notificationCount = localStorage.getItem('notificationCount') || 0;
        notificationCounter.textContent = notificationCount;
    }
    if (emailCounter) {
        const emailCount = localStorage.getItem('emailCount') || 0;
        emailCounter.textContent = emailCount;
    }

    
    updateNotificationList();

    
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); 

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
                status: "open",
                source: "purchasing"
            };

            // Save NCR data to localStorage
            const existingNCRs = JSON.parse(localStorage.getItem('ncrs')) || [];
            existingNCRs.push(ncrData);
            localStorage.setItem('ncrs', JSON.stringify(existingNCRs));

           
            const notification = {
                ncr_no: ncrData.ncr_no,
                source: ncrData.source,
                action: "Action Required - Engineering "
            };
            addNotificationToList(notification);

            incrementNotificationCount();
            incrementEmailCount();

            alert("NCR form submitted successfully! Notifications and email has been sent to the Engineer Section");
            form.reset();
            window.location.href = 'ncrlog.html';
        });
    }

    // Engineering form submission
    if (engineeringForm) {
        engineeringForm.addEventListener('submit', function (e) {
            e.preventDefault(); 

            // Collect form data
            const engineeringData = {
                review_engineering: document.getElementById('review_engineering').value,
                customer_notification: document.querySelector('input[name="customer_notification"]:checked')?.value,
                disposition: document.getElementById('disposition').value,
                drawing_update: document.getElementById('drawing_update').checked,
                original_revision: document.getElementById('original_revision').value,
                updated_revision: document.getElementById('updated_revision').value,
                engineer_name: document.getElementById('engineer_name').value,
                revision_date: document.getElementById('revision_date').value,
                engineering: document.getElementById('engineering').value,
                engineering_date: document.getElementById('engineering_date').value,
                source: "engineering"
            };

            // Save engineering form data
            const existingForms = JSON.parse(localStorage.getItem('engineeringForms')) || [];
            existingForms.push(engineeringData);
            localStorage.setItem('engineeringForms', JSON.stringify(existingForms));

          
            const notification = {
                ncr_no: document.getElementById('ncr_number').value, // NCR number
                source: "engineering",
                action: "Action Required - Purchasing"
            };
            addNotificationToList(notification);

            incrementNotificationCount();
            incrementEmailCount();

            alert("Engineering form submitted successfully!");
            engineeringForm.reset();
        });
    }

    //clearing local storage
    if (clearStorageBtn) {
        clearStorageBtn.addEventListener('click', function () {
            localStorage.clear();
            alert('Local Storage cleared!');
            if (notificationCounter) notificationCounter.textContent = 0;
            if (emailCounter) emailCounter.textContent = 0;
            updateNotificationList();
        });
    }

  
    function addNotificationToList(notification) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <a class="dropdown-item" href="#">
                NCR #${notification.ncr_no} - ${notification.action}
            </a>
        `;
        notificationList.appendChild(listItem);
    }

    function updateNotificationList() {
        const ncrs = JSON.parse(localStorage.getItem('ncrs')) || [];
        notificationList.innerHTML = ''; // Clear existing items

        if (ncrs.length > 0) {
            ncrs.forEach(ncr => {
                const ncrLogLink = `ncrlog.html?ncr_no=${ncr.ncr_no}`;
                const actionLabel = ncr.source === 'engineering' ? 'Action - Purchasing' : 'Action - Engineering';
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <a class="dropdown-item" href="${ncrLogLink}">
                        NCR #${ncr.ncr_no} - ${actionLabel}
                    </a>
                `;
                notificationList.appendChild(listItem);
            });
        } else {
            const noItems = document.createElement('li');
            noItems.innerHTML = '<span class="dropdown-item">No notifications available</span>';
            notificationList.appendChild(noItems);
        }
    }

    function incrementNotificationCount() {
        if (notificationCounter) {
            let count = parseInt(notificationCounter.textContent) || 0;
            count++;
            notificationCounter.textContent = count;
            localStorage.setItem('notificationCount', count);
        }
    }

    function incrementEmailCount() {
        if (emailCounter) {
            let count = parseInt(emailCounter.textContent) || 0;
            count++;
            emailCounter.textContent = count;
            localStorage.setItem('emailCount', count);
        }
    }
});


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







