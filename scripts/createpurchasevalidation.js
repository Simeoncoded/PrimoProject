const btnSubmit = document.getElementById("btnSubmit");
const btnSave = document.getElementById("btnSave");


//same logic as other validation files just copy pasted in the variables and rewrote some of the logic
function validateForm() {
    let isValid = true;

    // input Fields
    const ncrNumber = document.getElementById("ncr_no");
    const opDate = document.getElementById("date");
    const carRaisedYes = document.getElementById("carraised_yes");
    const carRaisedNo = document.getElementById("fcarraised_no");
    const carNumber = document.getElementById("carnumber");
    const followRequiredYes = document.getElementById("followrequired_yes");
    const followRequiredNo = document.getElementById("followrequired_no");
    const followType = document.getElementById("followtype");
    const followDate = document.getElementById("followdate");
    const operationsmanager = document.getElementById("operationsmanagername");
    const preliminaryDecision = document.getElementById("preliminaryDecision");

    // error Messages
    const ncrNoError = document.getElementById("ncrNoError");
    const dateError = document.getElementById("dateError");
    const carRaisedError = document.getElementById("carraisedError");
    const carNoError = document.getElementById("carNoError");
    const followRequiredError = document.getElementById("followrequiredError");
    const followupError = document.getElementById("followupError");
    const followdateError = document.getElementById("followdateError");
    const operationsmanagerError = document.getElementById("operationsmanagerError");
    const preliminaryDecisionError = document.getElementById("preliminaryDecisionError");


    const errorFields = [ncrNoError, dateError, carRaisedError, carNoError,
        followRequiredError, followupError, followdateError];

    const fields = [ncrNumber, opDate, carRaisedYes, carRaisedNo, carNumber,
        followRequiredYes, followRequiredNo, followType, followDate
    ];

    errorFields.forEach(errorField => (errorField.style.display = "none"));
    fields.forEach(field => {
        if (field) {
            field.style.border = "1px solid #ced4da";
        }
    });

    const currentYear = new Date().getFullYear();

    if (!ncrNumber.value.trim()) {
        ncrNumber.style.border = "2px solid red";
        ncrNoError.style.display = "inline";
        isValid = false;
    }

    if (!opDate.value) {
        opDate.style.border = "2px solid red";
        dateError.style.display = "inline";
        isValid = false;
    } else if (new Date(opDate.value).getFullYear() !== currentYear) {
        opDate.style.border = "2px solid red";
        dateError.style.display = "inline";
        dateError.textContent = "Please select a valid date in the current year.";
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

    if (!operationsmanager.value.trim()) {
        operationsmanager.style.border = "2px solid red";
        operationsmanagerError.style.display = "inline";
        isValid = false;
    }
    if (!preliminaryDecision.value.trim()) {
        preliminaryDecision.style.border = "2px solid red";
        preliminaryDecisionError.style.display = "inline";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("ncrForm").submit();
    }
}

btnSubmit.addEventListener("click", validateForm);
btnSave.addEventListener("click", validateForm);
