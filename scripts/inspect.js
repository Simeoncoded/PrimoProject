let btnSub = document.getElementById("btnSubmit");
const btnPurchaseSave = document.getElementById("btnPurchaseSave");


// Disable the NCR number field after input (readonly)
document.getElementById("ncr_no").addEventListener("input", function () {
    const ncrNumberInput = document.getElementById("ncr_no");

    if (ncrNumberInput.value.trim()) {
        ncrNumberInput.setAttribute("readonly", true);
    }
});

function validateForm() {
    

    // Variables for required fields
    const ncrNum = document.getElementById("ncr_no");
    const date = document.getElementById("date");
    const idCheckBox = document.querySelectorAll('input[name="process"]:checked');
    const supplierName = document.getElementById("supplier_name");
    const poProdNo = document.getElementById("po_prod_no");
    const salesOrderNo = document.getElementById("sales_order_no");
    const itemDescription = document.getElementById("item_description");
    const defectDescription = document.getElementById("defect_description");
    const quantityReceived = document.getElementById("quantity_received");
    const quantityDefective = document.getElementById("quantity_defective");
    const qualityRepName = document.getElementById("quality_rep_name");
    const nonconforming = document.querySelector('input[name="nonconforming"]:checked');
    const enginNotNeeded = document.querySelector('input[name="ennotneeded"]:checked');

    let isValid = true;

    // Get current year
    const currentYear = new Date().getFullYear();

    // Reset error messages
    const errorFields = [
        "ncrNoError",
        "dateError",
        "identifyError",
        "supplierError",
        "prodError",
        "salesError",
        "desItemError",
        "desDefectError",
        "quanRecievedError",
        "quanDefectiveError",
        "qualityError",
        "itemMarkError",
        "enginNotMarkedError"
    ];
    errorFields.forEach(errorId => (document.getElementById(errorId).style.display = "none"));

    // Reset field borders
    const fields = [ncrNum, date, supplierName, poProdNo, salesOrderNo, itemDescription,
        defectDescription, quantityReceived, quantityDefective, qualityRepName];
    fields.forEach(field => field.style.border = "1px solid #ced4da");

    // Validation for each field
    if (!date.value) {
        date.style.border = "2px solid red";
        document.getElementById("dateError").style.display = "inline"; // Date is required message
        isValid = false;
    } else if (new Date(date.value).getFullYear() !== currentYear) {
        date.style.border = "2px solid red";
        document.getElementById("dateYearError").style.display = "inline"; // Valid year message
        isValid = false;
    }

    if (idCheckBox.length === 0) {
        document.getElementById("identifyError").style.display = "inline";
        isValid = false;
    }

    if (!supplierName.value.trim()) {
        supplierName.style.border = "2px solid red";
        document.getElementById("supplierError").style.display = "inline";
        isValid = false;
    }

    if (!poProdNo.value.trim()) {
        poProdNo.style.border = "2px solid red";
        document.getElementById("prodError").style.display = "inline";
        isValid = false;
    }

    if (!salesOrderNo.value.trim()) {
        salesOrderNo.style.border = "2px solid red";
        document.getElementById("salesError").style.display = "inline";
        isValid = false;
    }

    if (!itemDescription.value.trim()) {
        itemDescription.style.border = "2px solid red";
        document.getElementById("desItemError").style.display = "inline";
        isValid = false;
    }

    if (!defectDescription.value.trim()) {
        defectDescription.style.border = "2px solid red";
        document.getElementById("desDefectError").style.display = "inline";
        isValid = false;
    }

    if (!quantityReceived.value || quantityReceived.value <= 0) {
        quantityReceived.style.border = "2px solid red";
        document.getElementById("quanRecievedError").style.display = "inline";
        isValid = false;
    }

    if (!quantityDefective.value || quantityDefective.value < 0) {
        quantityDefective.style.border = "2px solid red";
        document.getElementById("quanDefectiveError").style.display = "inline";
        isValid = false;
    }

    // Additional validation: Quantity Defective <= Quantity Received
    if (parseInt(quantityDefective.value) > parseInt(quantityReceived.value)) {
        quantityDefective.style.border = "2px solid red";
        document.getElementById("quanDefectiveError").style.display = "inline";
        document.getElementById("quanDefectiveError").textContent =
            "Quantity Defective cannot be greater than Quantity Received.";
        isValid = false;
    }

    if (!qualityRepName.value.trim()) {
        qualityRepName.style.border = "2px solid red";
        document.getElementById("qualityError").style.display = "inline";
        isValid = false;
    }

    if (!nonconforming) {
        document.querySelector('input[name="nonconforming"]').parentNode.style.border = "2px solid red";
        document.getElementById("itemMarkError").style.display = "inline";
        isValid = false;
    }

    if (!enginNotNeeded) {
        document.querySelector('input[name="ennotneeded"]').parentNode.style.border = "2px solid red";
        document.getElementById("enginNotMarkedError").style.display = "inline";
        isValid = false;
    }

    // Submit the form if all validations pass
    if (isValid) {
        document.getElementById("ncrForm").submit();  // Manually submit the form after validation
    }
}

// Clear error on input
function clearError(inputId, errorId) {
    const inputField = document.getElementById(inputId);
    const errorMessage = document.getElementById(errorId);

    inputField.addEventListener("input", function () {
        if (inputField.value.trim()) {
            inputField.style.border = "1px solid #ced4da";
            errorMessage.style.display = "none";
        }
    });
}

clearError("date", "dateError");
clearError("date","dateYearError");
clearError("supplier_name", "supplierError");
clearError("po_prod_no", "prodError");
clearError("sales_order_no", "salesError");
clearError("item_description", "desItemError");
clearError("defect_description", "desDefectError");
clearError("quantity_received", "quanRecievedError");
clearError("quantity_defective", "quanDefectiveError");
clearError("quality_rep_name", "qualityError");

function clearChkBxError(inputName, errorId) {
    const radioGroup = document.getElementsByName(inputName);
    const errorMessage = document.getElementById(errorId);

    radioGroup.forEach((radio) => {
        radio.addEventListener("change", function () {
            if (document.querySelector(`input[name="${inputName}"]:checked`)) {
                errorMessage.style.display = "none";
                radioGroup.forEach((r) => (r.parentNode.style.border = "none"));
            }
        });
    });
}

clearChkBxError("nonconforming", "itemMarkError");
clearChkBxError("ennotneeded", "enginNotMarkedError");

// real-time validation for Quantity Defective
document.getElementById("quantity_defective").addEventListener("input", function () {
    const received = parseInt(document.getElementById("quantity_received").value);
    const defective = parseInt(this.value);

    if (defective > received) {
        this.style.border = "2px solid red";
        document.getElementById("quanDefectiveError").textContent =
            "Quantity Defective cannot be greater than Quantity Received.";
        document.getElementById("quanDefectiveError").style.display = "inline";
    } else {
        this.style.border = "1px solid #ced4da";
        document.getElementById("quanDefectiveError").style.display = "none";
    }
});

function validatePurchaseForm() {
    let isValid = true;

    // Input Fields
    const ncrNo = document.getElementById("ncr_no"); 
    const opDate = document.getElementById("date");
    const carRaisedYes = document.getElementById("carraised_yes");
    const carRaisedNo = document.getElementById("fcarraised_no");
    const carNumber = document.getElementById("carnumber");
    const followRequiredYes = document.getElementById("followrequired_yes");
    const followRequiredNo = document.getElementById("followrequired_no");
    const followType = document.getElementById("followtype");
    const followDate = document.getElementById("followdate");
    const operationsManager = document.getElementById("operationsmanagername");

    // Error Messages
    const ncrNoError = document.getElementById("ncrNoError");
    const dateOPError = document.getElementById("dateOPError");
    const carRaisedError = document.getElementById("carraisedError");
    const carNoError = document.getElementById("carNoError");
    const followRequiredError = document.getElementById("followrequiredError");
    const followupError = document.getElementById("followupError");
    const followdateError = document.getElementById("followdateError");
    const followUpdateError = document.getElementById("followUpdateError");
    const operationsManagerError = document.getElementById("operationsmanagerError");

    // Arrays for resetting styles and errors
    const errorFields = [
        dateOPError,
        carRaisedError,
        carNoError,
        followRequiredError,
        followupError,
        followdateError,
        followUpdateError,
        operationsManagerError
    ];

    const fields = [
        opDate,
        carRaisedYes,
        carRaisedNo,
        carNumber,
        followRequiredYes,
        followRequiredNo,
        followType,
        followDate,
        operationsManager
    ];

    // Reset styles and error messages
    errorFields.forEach(error => (error.style.display = "none"));
    fields.forEach(field => {
        if (field) {
            field.style.border = "1px solid #ced4da";
        }
    });

    const currentYear = new Date().getFullYear();

    // validation stuff 
    if (!ncrNo.value.trim()) {
        ncrNo.style.border = "2px solid red";
        ncrNoError.style.display = "inline";
        isValid = false;
    }
    if (!opDate.value) {
        opDate.style.border = "2px solid red";
        dateOPError.style.display = "inline";
        isValid = false;
    } else if (new Date(opDate.value).getFullYear() !== currentYear) {
        opDate.style.border = "2px solid red";
        dateOPError.style.display = "inline";
        dateOPError.textContent = "Please select a valid date in the current year.";
        isValid = false;
    }

    if (!carRaisedYes.checked && !carRaisedNo.checked) {
        carRaisedYes.parentNode.style.border = "2px solid red";
        carRaisedNo.parentNode.style.border = "2px solid red";
        carRaisedError.style.display = "inline";
        isValid = false;
    }

    if (!carNumber.value.trim() || carNumber.value <= 0) {
        carNumber.style.border = "2px solid red";
        carNoError.style.display = "inline";
        isValid = false;
    }

    if (!followRequiredYes.checked && !followRequiredNo.checked) {
        followRequiredYes.parentNode.style.border = "2px solid red";
        followRequiredNo.parentNode.style.border = "2px solid red";
        followRequiredError.style.display = "inline";
        isValid = false;
    }

    if (!followType.value.trim()) {
        followType.style.border = "2px solid red";
        followupError.style.display = "inline";
        isValid = false;
    }

    if (!followDate.value) {
        followDate.style.border = "2px solid red";
        followdateError.style.display = "inline";
        isValid = false;
    }

    if (!operationsManager.value.trim()) {
        operationsManager.style.border = "2px solid red";
        operationsManagerError.style.display = "inline";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("purchasesectionform").submit();
    }
}



// Add event listener to validate form
btnSub.addEventListener("click", validateForm);
btnPurchaseSave.addEventListener("click", validatePurchaseForm);

