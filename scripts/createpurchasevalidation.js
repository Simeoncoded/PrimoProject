const btnSubmit = document.getElementById("btnSubmit");
const btnSave = document.getElementById("btnSave");

function validateForm() {

    let isValid = true;
    const ncrNumber = document.getElementById("ncr_no");
    const opDate = document.getElementById("date");
    const carRaisedYes = document.getElementById("carraised_yes");
    const carRaisedNo = document.getElementById("fcarraised_no");
    const carNumber = document.getElementById("carnumber");
    const followRequiredYes = document.getElementById("followrequired_yes");
    const followRequiredNo = document.getElementById("followrequired_no");
    const followType = document.getElementById("followtype");
    const followDate = document.getElementById("followdate");

    // Error Messages
    const ncrNoError = document.getElementById("ncrNoError");
    const dateError = document.getElementById("dateError");
    const carRaisedError = document.getElementById("carraisedError");
    const carNoError = document.getElementById("carNoError");
    const followRequiredError = document.getElementById("followrequiredError");
    const followupError = document.getElementById("followupError");
    const followdateError = document.getElementById("followdateError");
    const followUpdateError = document.getElementById("followUpdateError");

    const errorFields = [
        ncrNoError,
        dateError,
        carRaisedError,
        carNoError,
        followRequiredError,
        followupError,
        followdateError,
        followUpdateError
    ];
    errorFields.forEach(errorId => (document.getElementById(errorId).style.display = "none"));


    const fields = [ncrNumber, opDate, carRaisedYes, carRaisedNo, carNumber, followRequiredYes, followRequiredNo, followType, followDate];

    fields.forEach(field => field.style.border = "1px solid #ced4da");
    if (!opDate.value) {
        opDate.style.border = "2px solid red";
        document.getElementById("dateError").style.display = "inline"; // Date is required message
        isValid = false;
    } else if (new Date(opDate.value).getFullYear() !== currentYear) {
        opDate.style.border = "2px solid red";
        document.getElementById("dateYearError").style.display = "inline"; // Valid year message
        isValid = false;
    }


    // Validate NCR Number
    if (!ncrNumber.value.trim()) {
        ncrNumber.style.border = "2px solid red";
        ncrNoError.style.display = "inline";
        isValid = false;
    }

    // Validate Date
    if (!opDate.value) {
        opDate.style.border = "2px solid red";
        dateError.style.display = "inline";
        isValid = false;
    }

    // Validate if Car Raised
    if (!carRaisedYes.checked && !carRaisedNo.checked) {
        carRaisedYes.parentNode.style.border = "2px solid red";
        carRaisedNo.parentNode.style.border = "2px solid red";
        carRaisedError.style.display = "inline";
        isValid = false;
    }

    // Validate Car Number
    if (!carNumber.value.trim() || carNumber.value <= 0) {
        carNumber.style.border = "2px solid red";
        carNoError.style.display = "inline";
        isValid = false;
    }

    // Validate Follow-Up Required
    if (!followRequiredYes.checked && !followRequiredNo.checked) {
        followRequiredYes.parentNode.style.border = "2px solid red";
        followRequiredNo.parentNode.style.border = "2px solid red";
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

    // Submit the form if all validations pass
    if (isValid) {
        document.getElementById("ncrForm").submit(); // Manually submit the form after validation
    }


}


btnSub.addEventListener("click", validateForm);
