let btnSub = document.getElementById("btnSubmit");

function validateForm() {
    const fields = [
        { id: "ncr_no", errorId: "ncrNoError" },
        { id: "review_engineering", errorId: "review_engineeringError" },
        { id: "disposition", errorId: "dispositionError" },
        { id: "original_revision", errorId: "original_revisionError" },
        { id: "updated_revision", errorId: "updated_revisionError" },
        { id: "engineer_name", errorId: "engineer_nameError" },
        { id: "revision_date", errorId: "revision_dateError", dateErrorId: "revision_dateYearError" },
        { id: "engineering", errorId: "engineeringError" },
        { id: "engineering_date", errorId: "engineering_dateError", dateErrorId: "engineering_dateYearError" },
    ];

    let isValid = true;

    fields.forEach(({ id, errorId, dateErrorId }) => {
        const field = document.getElementById(id);
        const errorElement = errorId ? document.getElementById(errorId) : null;
        const dateErrorElement = dateErrorId ? document.getElementById(dateErrorId) : null;

        // Reset error states
        field.style.border = "";
        if (errorElement) {
            errorElement.style.display = "none";
        }
        if (dateErrorElement) {
            dateErrorElement.style.display = "none";
        }

        // Validate required fields and dropdowns
        if (!field.value.trim() || (field.id === "review_engineering" && field.value === "Select disposition")) {
            field.style.border = "2px solid red";
            if (errorElement) {
                errorElement.style.display = "inline";
            }
            isValid = false;
        }

        // Date validation: Check if the selected date is within the current year
        if ((field.id === "revision_date" || field.id === "engineering_date") && field.value) {
            const selectedDate = new Date(field.value);
            const currentYear = new Date().getFullYear();

            if (selectedDate.getFullYear() !== currentYear) {
                field.style.border = "2px solid red";
                if (dateErrorElement) {
                    dateErrorElement.style.display = "inline";
                }
                isValid = false;
            }
        }
    });

    if (isValid) {
        document.getElementById("form").submit();
    }
}

// Add event listeners to clear validation dynamically
function clearValidation(event) {
    const field = event.target;
    field.style.border = "";
    const errorElement = document.getElementById(`${field.id}Error`);
    if (errorElement) {
        errorElement.style.display = "none";
    }
    const dateErrorElement = document.getElementById(`${field.id}YearError`);
    if (dateErrorElement) {
        dateErrorElement.style.display = "none";
    }
}

const inputFields = [
    "ncr_no",
    "review_engineering",
    "disposition",
    "original_revision",
    "updated_revision",
    "engineer_name",
    "revision_date",
    "engineering",
    "engineering_date",
];

inputFields.forEach((fieldId) => {
    const field = document.getElementById(fieldId);
    if (field) {
        field.addEventListener("input", clearValidation);
        field.addEventListener("change", clearValidation); // For dropdowns and date fields
    }
});

// Add click event listener for validation
btnSub.addEventListener("click", validateForm);


document.addEventListener('DOMContentLoaded', function () {
    // Initialize notification and email counters
    const notificationCounter = document.getElementById('notification-counter');
    const emailCounter = document.getElementById('email-counter');

    if (notificationCounter) {
        const count = localStorage.getItem('notificationCount') || 0;
        notificationCounter.textContent = count;
    }

    if (emailCounter) {
        const emailCount = localStorage.getItem('emailCount') || 0;
        emailCounter.textContent = emailCount;
    }

    // Engineering form submission handling
    const engineeringForm = document.getElementById('engineeringForm');
    if (engineeringForm) {
        engineeringForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent page refresh
            
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
            };

            // Save form data to localStorage
            const existingForms = JSON.parse(localStorage.getItem('engineeringForms')) || [];
            existingForms.push(engineeringData);
            localStorage.setItem('engineeringForms', JSON.stringify(existingForms));

            // Increment notification and email counters
            incrementNotificationCount();
            incrementEmailCount();

            // Alert user and reset form
            alert("Engineering form submitted successfully!");
            engineeringForm.reset();
            window.location.href = 'ncrlog.html';
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
