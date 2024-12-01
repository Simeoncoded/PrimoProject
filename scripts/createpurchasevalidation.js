const btnSubmit = document.getElementById("btnSubmit");
const btnSave = document.getElementById("btnSave");

function validateForm() {
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
    const dateYearError = document.getElementById("dateYearError");
    const carRaisedError = document.getElementById("carraisedError");
    const carNoError = document.getElementById("carNoError");
    const followRequiredError = document.getElementById("followrequiredError");
    const followupError = document.getElementById("followupError");
    const followdateError = document.getElementById("followdateError");
    const followUpdateError = document.getElementById("followUpdateError");
}


btnSub.addEventListener("click", validateForm);
