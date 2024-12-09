let btnEngSubmit = document.getElementById("btnEngSubmit");

function validateEngineeringForm() {
    const reviewEngineering = document.getElementById("review_engineering");
    const customerNotification = document.querySelector('input[name="customer_notificationEngineering"]:checked');
    const disposition = document.getElementById("dispositionEngineering");
    const drawingUpdate = document.querySelector('input[name="drawing_updateEngineering"]:checked');
    const originalRevision = document.getElementById("original_revisionEngineering");
    const updatedRevision = document.getElementById("updated_revisionEngineering");
    const engineerName = document.getElementById("engineer_nameEngineering");
    const revisionDate = document.getElementById("revision_dateEngineering");
    const engineeringDetails = document.getElementById("engineering");
    const engineeringDate = document.getElementById("engineering_date");

    let isValid = true;

    const errorFields = [
        "review_engineeringError",
        "customerNotificationDesc",
        "dispositionErrorEngineering",
        "original_revisionErrorEngineering",
        "updated_revisionError",
        "engineer_nameErrorEngineering",
        "revision_dateErrorEngineering",
        "revision_dateYearErrorEngineering",
        "engineeringError",
        "engineering_dateError",
        "engineering_dateYearError"
    ];
    errorFields.forEach(errorId => (document.getElementById(errorId).style.display = "none"));

    const fields = [reviewEngineering,disposition,originalRevision,
        updatedRevision,engineerName,revisionDate,engineeringDetails,engineeringDate
    ];
    fields.forEach(field => {
        if (field) field.style.border = "1px solid #ced4da";
    });

    if (!reviewEngineering.value.trim()) {
        reviewEngineering.style.border = "2px solid red";
        document.getElementById("review_engineeringError").style.display = "inline";
        isValid = false;
    }

    if (!customerNotification) {
        document.getElementById("customerNotificationDesc").style.display = "inline";
        isValid = false;
    }

    if (!disposition.value.trim()) {
        disposition.style.border = "2px solid red";
        document.getElementById("dispositionErrorEngineering").style.display = "inline";
        isValid = false;
    }

    if (drawingUpdate && drawingUpdate.value === "yes") {
        if (!originalRevision.value.trim()) {
            originalRevision.style.border = "2px solid red";
            document.getElementById("original_revisionErrorEngineering").style.display = "inline";
            isValid = false;
        }
        if (!updatedRevision.value.trim()) {
            updatedRevision.style.border = "2px solid red";
            document.getElementById("updated_revisionError").style.display = "inline";
            isValid = false;
        }
    }

    if (!engineerName.value.trim()) {
        engineerName.style.border = "2px solid red";
        document.getElementById("engineer_nameErrorEngineering").style.display = "inline";
        isValid = false;
    }

    const currentYear = new Date().getFullYear();

    if (!revisionDate.value) {
        revisionDate.style.border = "2px solid red";
        document.getElementById("revision_dateErrorEngineering").style.display = "inline";
        isValid = false;
    } else if (new Date(revisionDate.value).getFullYear() !== currentYear) {
        revisionDate.style.border = "2px solid red";
        document.getElementById("revision_dateYearErrorEngineering").style.display = "inline";
        isValid = false;
    }

    if (!engineeringDetails.value.trim()) {
        engineeringDetails.style.border = "2px solid red";
        document.getElementById("engineeringError").style.display = "inline";
        isValid = false;
    }

    if (!engineeringDate.value) {
        engineeringDate.style.border = "2px solid red";
        document.getElementById("engineering_dateError").style.display = "inline";
        isValid = false;
    } else if (new Date(engineeringDate.value).getFullYear() !== currentYear) {
        engineeringDate.style.border = "2px solid red";
        document.getElementById("engineering_dateYearError").style.display = "inline";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("engineeringForm").submit(); 
    }
}

function clearEngineeringError(inputId, errorId) {
    const inputField = document.getElementById(inputId);
    const errorMessage = document.getElementById(errorId);

    inputField.addEventListener("input", function () {
        if (inputField.value.trim()) {
            inputField.style.border = "1px solid #ced4da";
            errorMessage.style.display = "none";
        }
    });
}

function clearEngineeringChkBxError(inputName, errorId) {
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

clearEngineeringError("review_engineering", "review_engineeringError");
clearEngineeringError("dispositionEngineering", "dispositionErrorEngineering");
clearEngineeringError("original_revisionEngineering", "original_revisionErrorEngineering");
clearEngineeringError("updated_revisionEngineering", "updated_revisionError");
clearEngineeringError("engineer_nameEngineering", "engineer_nameErrorEngineering");
clearEngineeringError("revision_dateEngineering", "revision_dateErrorEngineering");
clearEngineeringError("engineering", "engineeringError");
clearEngineeringError("engineering_date", "engineering_dateError");

//radio button ones
clearEngineeringChkBxError("customer_notificationEngineering", "customerNotificationDesc");
clearEngineeringChkBxError("drawing_updateEngineering", "original_revisionErrorEngineering");


btnEngSubmit.addEventListener("click", validateEngineeringForm);
