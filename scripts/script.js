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

    // Initialize notification and email counters
    if (notificationCounter) {
        const notificationCount = localStorage.getItem('notificationCount') || 0;
        notificationCounter.textContent = notificationCount;
    }
    if (emailCounter) {
        const emailCount = localStorage.getItem('emailCount') || 0;
        emailCounter.textContent = emailCount;
    }

    updateNotificationList();

    // NCR Form Submission
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); 

            // Collect NCR form data
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
                source: "purchasing",
                eng: {},
                pur: {}
            };

            // Save NCR data to localStorage
            const existingNCRs = JSON.parse(localStorage.getItem('ncrs')) || [];
            existingNCRs.push(ncrData);
            localStorage.setItem('ncrs', JSON.stringify(existingNCRs));

            // Create notification for NCR submission
            const notification = {
                ncr_no: ncrData.ncr_no,
                source: ncrData.source,
                action: "Action Required - Engineering"
            };
            addNotificationToList(notification);
            saveNotificationToLocalStorage(notification); // Save notification to local storage

            incrementNotificationCount();
            incrementEmailCount();

            alert("NCR form submitted successfully! Notifications and email have been sent to the Engineering Section.");
            form.reset();
            window.location.href = 'ncrlog.html';
        });
    }
    
    // Engineering form submission
    if (engineeringForm) {
        engineeringForm.addEventListener('submit', function (e) {
            e.preventDefault();

           
            const ncrNumber = document.getElementById('ncr_number').value;

           
            if (!ncrNumber) {
                alert("NCR number is missing! Please provide the NCR number.");
                return;
            }

            // Collect engineering form data
            const engineeringData = {
                review_engineering: document.getElementById('review_engineering').value,
                customer_notification: document.querySelector('input[name="customer_notification"]:checked')?.value,
                disposition: document.querySelector('select[name=review_engineering]').value,
                drawing_update: document.querySelector('input[name=drawing_updateEngineering]:checked').checked,
                original_revision: document.getElementById('original_revisionEngineering').value,
                updated_revision: document.getElementById('updated_revisionEngineering').value,
                engineer_name: document.getElementById('engineer_nameEngineering').value,
                revision_date: document.getElementById('revision_dateEngineering').value,
                engineering_details: document.getElementById('engineering').value,
                engineering_date: document.getElementById('engineering_date').value,
                source: "engineering"
            };

            
            const notification = {
                ncr_no: ncrNumber, 
                source: engineeringData.source,
                action: "Action Required - Purchasing"
            };
            addNotificationToList(notification);
            saveNotificationToLocalStorage(notification); // Save notification to local storage

            incrementNotificationCount();
            incrementEmailCount();

            alert("Engineering form submitted successfully! Notifications and email have been sent to purchasing section.");
            engineeringForm.reset();
            window.location.href = 'ncrlog.html'; 
        });
    }

    // Clearing local storage
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
        const notifications = JSON.parse(localStorage.getItem('notifications')) || []; // Fetch notifications from local storage
        notificationList.innerHTML = ''; // Clear existing items

        if (notifications.length > 0) {
            notifications.forEach(notification => {
                const ncrLogLink = `ncrlog.html?ncr_no=${notification.ncr_no}`;
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <a class="dropdown-item" href="${ncrLogLink}">
                        NCR #${notification.ncr_no} - ${notification.action}
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

    function saveNotificationToLocalStorage(notification) {
        const existingNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
        existingNotifications.push(notification);
        localStorage.setItem('notifications', JSON.stringify(existingNotifications)); // Save notifications to local storage
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
