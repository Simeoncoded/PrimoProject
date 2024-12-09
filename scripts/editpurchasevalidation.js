// Get the submit button
let btnPurchaseSubmit = document.getElementById("btnPurchaseSubmit");

function validatePurchaseForm(event) {
    // Prevent the default form submission
    event.preventDefault();

    let isValid = true; // Flag to track form validity

    // Get input fields
    const ncrNo = document.getElementById("ncr_noPurchase");
    const opDate = document.getElementById("OPdatePurchase");
    const carRaisedYes = document.getElementById("carraised_yesPurchase");
    const carRaisedNo = document.getElementById("fcarraised_noPurchase");
    const carNumber = document.getElementById("carnumberPurchase");
    const followRequiredYes = document.getElementById("followrequired_yesPurchase");
    const followRequiredNo = document.getElementById("followrequired_noPurchase");
    const followType = document.getElementById("followtypePurchase");
    const followDate = document.getElementById("followdatePurchase");
    const operationsManager = document.getElementById("operationsmanagernamePurchase");

    const ncrNoError = document.getElementById("ncrNoErrorPurchase");
    const dateOPError = document.getElementById("dateOPErrorPurchase");
    const carRaisedError = document.getElementById("carraisedErrorPurchase");
    const carNoError = document.getElementById("carNoErrorPurchase");
    const followRequiredError = document.getElementById("followrequiredErrorPurchase");
    const followupError = document.getElementById("followupErrorPurchase");
    const followdateError = document.getElementById("followdateErrorPurchase");
    const operationsManagerError = document.getElementById("operationsmanagerErrorPurchase");

    const errorFields = [
        ncrNoError,
        dateOPError,
        carRaisedError,
        carNoError,
        followRequiredError,
        followupError,
        followdateError,
        operationsManagerError,
    ];

    const fields = [
        ncrNo,
        opDate,
        carNumber,
        followType,
        followDate,
        operationsManager,
    ];

    // Clear previous error styles and messages
    errorFields.forEach((error) => (error.style.display = "none"));
    fields.forEach((field) => {
        if (field) {
            field.style.border = "1px solid #ced4da";
        }
    });

    const currentYear = new Date().getFullYear();

    // Validate NCR Number
    if (!ncrNo.value.trim()) {
        ncrNo.style.border = "2px solid red";
        ncrNoError.style.display = "inline";
        isValid = false;
    }

    // Validate OP Date
    if (!opDate.value) {
        opDate.style.border = "2px solid red";
        dateOPError.style.display = "inline";
        isValid = false;
    } else if (new Date(opDate.value).getFullYear() !== currentYear) {
        opDate.style.border = "2px solid red";
        dateOPError.textContent = "Please select a valid date in the current year.";
        dateOPError.style.display = "inline";
        isValid = false;
    }

    // Validate Car Raised
    if (!carRaisedYes.checked && !carRaisedNo.checked) {
        carRaisedError.style.display = "inline";
        isValid = false;
    }

    // Validate Car Number
    if (!carNumber.value.trim() || carNumber.value <= 0) {
        carNumber.style.border = "2px solid red";
        carNoError.style.display = "inline";
        isValid = false;
    }

    // Validate Follow-Up Requirement
    if (!followRequiredYes.checked && !followRequiredNo.checked) {
        followRequiredError.style.display = "inline";
        isValid = false;
    }

    // Validate Follow-Up Type
    if (!followType.value.trim()) {
        followType.style.border = "2px solid red";
        followupError.style.display = "inline";
        isValid = false;
    }

    // Validate Follow-Up Date
    if (!followDate.value) {
        followDate.style.border = "2px solid red";
        followdateError.style.display = "inline";
        isValid = false;
    }

    // Validate Operations Manager Name
    if (!operationsManager.value.trim()) {
        operationsManager.style.border = "2px solid red";
        operationsManagerError.style.display = "inline";
        isValid = false;
    }

    // If all validations pass, submit the form
    if (isValid) {
        document.getElementById("purchasesectionform").submit();
    }
}

// Attach event listener to submit button
btnPurchaseSubmit.addEventListener("click", validatePurchaseForm);

// Helper function to remove validation messages and styles
function resetValidation(event) {
    const field = event.target;

    // Find the associated error message by matching ID
    const errorField = document.getElementById(field.id + "ErrorPurchase");
    if (errorField) {
        errorField.style.display = "none"; // Hide the error message
    }
    field.style.border = "1px solid #ced4da"; // Reset the border style
}

// Attach event listeners to fields to reset validation on interaction
const inputFields = [
    document.getElementById("ncr_noPurchase"),
    document.getElementById("OPdatePurchase"),
    document.getElementById("carnumberPurchase"),
    document.getElementById("followtypePurchase"),
    document.getElementById("followdatePurchase"),
    document.getElementById("operationsmanagernamePurchase"),
];

inputFields.forEach((field) => {
    if (field) {
        field.addEventListener("input", resetValidation);
    }
});

// Attach event listeners to radio buttons
const radioButtons = [
    document.getElementById("carraised_yesPurchase"),
    document.getElementById("carraised_noPurchase"),
    document.getElementById("followrequired_yesPurchase"),
    document.getElementById("followrequired_noPurchase"),
];

radioButtons.forEach((radio) => {
    if (radio) {
        radio.addEventListener("change", () => {
            const errorField = document.getElementById(radio.name + "ErrorPurchase");
            if (errorField) {
                errorField.style.display = "none"; // Hide the error message
            }
        });
    }
});
