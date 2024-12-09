let btnPurchaseSubmit = document.getElementById("btnPurchaseSubmit");

function validatePurchaseForm(event) {
    // Prevent the default form submission
    event.preventDefault();

    let isValid = true;

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
        operationsManagerError
    ];

    const fields = [
        ncrNo,
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


    errorFields.forEach(error => (error.style.display = "none"));
    fields.forEach(field => {
        if (field) {
            field.style.border = "1px solid #ced4da";
        }
    });

    const currentYear = new Date().getFullYear();

   
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
        dateOPError.textContent = "Please select a valid date in the current year.";
        dateOPError.style.display = "inline";
        isValid = false;
    }


    if (!carRaisedYes.checked && !carRaisedNo.checked) {
        carRaisedError.style.display = "inline";
        isValid = false;
    }

   
    if (!carNumber.value.trim() || carNumber.value <= 0) {
        carNumber.style.border = "2px solid red";
        carNoError.style.display = "inline";
        isValid = false;
    }

    if (!followRequiredYes.checked && !followRequiredNo.checked) {
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


btnPurchaseSubmit.addEventListener("click", validatePurchaseForm);

// Clear error on input for text fields
function clearError(inputId, errorId) {
    const inputField = document.getElementById(inputId);
    const errorMessage = document.getElementById(errorId);

    if (inputField) {
        inputField.addEventListener("input", function () {
            if (inputField.value.trim()) {
                inputField.style.border = "1px solid #ced4da";
                if (errorMessage) {
                    errorMessage.style.display = "none";
                }
            }
        });
    }
}


function clearChkBxError(inputName, errorId) {
    const radioGroup = document.getElementsByName(inputName);
    const errorMessage = document.getElementById(errorId);

    if (radioGroup.length) {
        radioGroup.forEach((radio) => {
            radio.addEventListener("change", function () {
                if (document.querySelector(`input[name="${inputName}"]:checked`)) {
                    if (errorMessage) {
                        errorMessage.style.display = "none";
                    }
                }
            });
        });
    }
}


clearError("ncr_noPurchase", "ncrNoErrorPurchase");
clearError("OPdatePurchase", "dateOPErrorPurchase");
clearError("carnumberPurchase", "carNoErrorPurchase");
clearError("followtypePurchase", "followupErrorPurchase");
clearError("followdatePurchase", "followdateErrorPurchase");
clearError("operationsmanagernamePurchase", "operationsmanagerErrorPurchase");

clearChkBxError("carraised", "carraisedErrorPurchase");
clearChkBxError("followrequired", "followrequiredErrorPurchase");
