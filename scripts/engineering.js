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
