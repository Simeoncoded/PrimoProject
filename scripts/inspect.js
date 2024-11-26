let btnSub = document.getElementById("btnSubmit");

// Disable the NCR number field after input (readonly)
document.getElementById("ncr_no").addEventListener("input", function () {
    const ncrNumberInput = document.getElementById("ncr_no");

    if (ncrNumberInput.value.trim()) {
        ncrNumberInput.setAttribute("readonly", true);
    }
});

// Function to clear error messages and reset borders
function clearError(field, errorId) {
    if (field) field.style.border = "1px solid #ced4da";
    const errorField = document.getElementById(errorId);
    if (errorField) errorField.style.display = "none";
}

// Add event listeners to clear errors when input changes
function attachClearErrorListeners() {
    const errorMappings = [
        { field: "date", error: "dateError" },
        { field: "date", error: "dateYearError" },
        { field: "supplier_name", error: "supplierError" },
        { field: "po_prod_no", error: "prodError" },
        { field: "sales_order_no", error: "salesError" },
        { field: "item_description", error: "desItemError" },
        { field: "defect_description", error: "desDefectError" },
        { field: "quantity_received", error: "quanRecievedError" },
        { field: "quantity_defective", error: "quanDefectiveError" },
        { field: "quality_rep_name", error: "qualityError" },
    ];

    errorMappings.forEach(({ field, error }) => {
        const inputField = document.getElementById(field);
        if (inputField) {
            inputField.addEventListener("input", () => clearError(inputField, error));
        }
    });

    // For checkboxes and radio buttons
    const processCheckboxes = document.querySelectorAll('input[name="process"]');
    processCheckboxes.forEach(checkbox =>
        checkbox.addEventListener("change", () => clearError(null, "identifyError"))
    );

    const nonconformingRadios = document.querySelectorAll('input[name="nonconforming"]');
    nonconformingRadios.forEach(radio =>
        radio.addEventListener("change", () => clearError(null, "itemMarkError"))
    );

    const enginNotNeededRadios = document.querySelectorAll('input[name="ennotneeded"]');
    enginNotNeededRadios.forEach(radio =>
        radio.addEventListener("change", () => clearError(null, "enginNotMarkedError"))
    );
}

attachClearErrorListeners();

function validateForm(event) {
    // Prevent default form submission
    event.preventDefault();

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

    // Validation for each field
    if (!date.value) {
        date.style.border = "2px solid red";
        document.getElementById("dateError").style.display = "inline";
        isValid = false;
    } else if (new Date(date.value).getFullYear() !== currentYear) {
        date.style.border = "2px solid red";
        document.getElementById("dateYearError").style.display = "inline";
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
        document.getElementById("ncrForm").submit();
    }
}

btnSub.addEventListener("click", validateForm);
