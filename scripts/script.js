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
