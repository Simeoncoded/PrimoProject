// Select the form and counter elements
const form = document.querySelector('form');
const notificationCounter = document.getElementById('notification-counter');

// Reset the counter in localStorage and on the page
localStorage.setItem('notificationCount', 0);
notificationCounter.textContent = 0;

// Function to increment the notification count
function incrementNotificationCount() {
    let count = parseInt(notificationCounter.textContent);
    count++;
    notificationCounter.textContent = count;
    localStorage.setItem('notificationCount', count); // Persist in local storage
}

// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    
    incrementNotificationCount();
    
    // Optionally: Display a success message or clear the form
    alert("Form submitted successfully!");
    form.reset(); // Clear the form fields if desired
});


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
