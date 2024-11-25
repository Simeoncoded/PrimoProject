let btnSub = document.getElementById("btnSubmit");

function validateForm() {
    const fields = [
        { id: "ncr_no", errorId: "ncrNoError" },
        { id: "review_engineering", errorId: "review_engineeringError" },
        { id: "disposition", errorId: "dispositionError" },
        { id: "original_revision", errorId: "original_revisionError" },
        { id: "updated_revision", errorId: "updated_revisionError" },
        { id: "engineer_name", errorId: "engineer_nameError" },
        { id: "revision_date", errorId: "revision_dateError" },
        { id: "engineering", errorId: "engineeringError" },
        { id: "engineering_date", errorId: "engineering_dateError" },
    ];

    let isValid = true;

    fields.forEach(({ id, errorId }) => {
        const field = document.getElementById(id);
        const errorElement = errorId ? document.getElementById(errorId) : null;

        // Reset error states
        field.style.border = "";
        if (errorElement) {
            errorElement.style.display = "none";
        }

        // Validate field
        if (!field.value.trim() || (field.id === "review_engineering" && field.value === "Select disposition")) {
            field.style.border = "2px solid red";
            if (errorElement) {
                errorElement.style.display = "inline";
            }
            isValid = false;
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
