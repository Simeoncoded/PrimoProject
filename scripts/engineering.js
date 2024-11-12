let btnSub = document.getElementById("btnSubmit");

function validateForm() {
    const ncrNum = document.getElementById("ncr_no");
    const date = document.getElementById("date");
    const review_engineering = document.getElementById("review_engineering");
    const disposition = document.getElementById("disposition");
    const original_revision = document.getElementById("original_revision");
    const updated_revision = document.getElementById("updated_revision");
    const engineer_name = document.getElementById("engineer_name");
    const revision_date = document.getElementById("revision_date");
    const engineering = document.getElementById("engineering");
    const engineering_date = document.getElementById("engineering_date");

    //error msgs
    const ncrNumError = document.getElementById("ncrNoError");
    ncrNumError.style.display = "none";

    const dateError = document.getElementById("dateError");
    dateError.style.display = "none";

    const review_engineeringError = document.getElementById("review_engineeringError");
    review_engineeringError.style.display = "none";

    const original_revisionError = document.getElementById("original_revisionError");
    original_revisionError.style.display = "none";

    const updated_revisionError = document.getElementById("updated_revisionError");
    updated_revisionError.style.display = "none";

    const engineer_nameError = document.getElementById("engineer_nameError");
    engineer_nameError.style.display = "none";

    const revision_dateError = document.getElementById("revision_dateError");
    revision_dateError.style.display = "none";

    const engineeringError = document.getElementById("engineeringError");
    engineeringError.style.display = "none";

    const engineering_dateError = document.getElementById("engineering_dateError");
    engineering_dateError.style.display = "none";

    let isValid = true;

    if (!ncrNum.value.trim()) {
        ncrNum.style.border = "2px solid red";
        ncrNumError.style.display = "inline";
        isValid = false;
    }

    if (!date.value) {
        date.style.border = "2px solid red";
        dateError.style.display = "inline";
        isValid = false;
    }

    if (!review_engineering.value || review_engineering.value === "Select disposition") {
        review_engineering.style.border = "2px solid red";
        review_engineeringError.style.display = "inline";
        isValid = false;
    }

    if (!disposition.value.trim()) {
        disposition.style.border = "2px solid red";
        // dispositionError.style.display = "inline";
        isValid = false;
    }

    if (!original_revision.value.trim()) {
        original_revision.style.border = "2px solid red";
        original_revisionError.style.display = "inline";
        isValid = false;
    }
    if(!updated_revision.value.trim()){
        updated_revision.style.border = "2px solid red";
        updated_revisionError.style.display = "inline";
        isValid = false;    }

    if (!engineer_name.value.trim()) {
        engineer_name.style.border = "2px solid red";
        engineer_nameError.style.display = "inline";
        isValid = false;
    }

    if (!revision_date.value) {
        revision_date.style.border = "2px solid red";
        revision_dateError.style.display = "inline";
        isValid = false;
    }

    if (!engineering.value.trim()) {
        engineering.style.border = "2px solid red";
        engineeringError.style.display = "inline";
        isValid = false;
    }

    if (!engineering_date.value) {
        engineering_date.style.border = "2px solid red";
        engineering_dateError.style.display = "inline";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("form").submit();
    }
}
btnSub.addEventListener("click", validateForm);
