let btnPurchaseSubmit = document.getElementById("btnPurchaseSubmit");

function validatePurchaseForm() {
    let isValid = true;

    // Input Fields
    const ncrNo = document.getElementById("ncr_noPurchase"); 
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
    const ncrNoError = document.getElementById("ncrNoErrorPurchase");
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
btnPurchaseSubmit.addEventListener("click", validatePurchaseForm);
