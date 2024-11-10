let btnSub = document.getElementById("btnSubmit");

function validateForm() { 
    // variabels for required fields
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
    //Error messages 
    const ncrNumError = document.getElementById("ncrNoError");
    ncrNumError.style.display = "none";

    const dateError = document.getElementById("dateError");
    dateError.style.display = "none";

    const identifyError = document.getElementById("identifyError");
    identifyError.style.display = "none";

    const supplierError = document.getElementById("supplierError");
    supplierError.style.display = "none";

    const prodError = document.getElementById("prodError");
    prodError.style.display = "none";

    const salesError = document.getElementById("salesError");
    salesError.style.display = "none";

    const desItemError = document.getElementById("desItemError");
    desItemError.style.display = "none";
    
    const desDefectError = document.getElementById("desDefectError");
    desDefectError.style.display = "none";

    const quanRecievedError = document.getElementById("quanRecievedError");
    quanRecievedError.style.display = "none";

    const quanDefectiveError = document.getElementById("quanDefectiveError");
    quanDefectiveError.style.display = "none";

    const qualityError = document.getElementById("qualityError");
    qualityError.style.display = "none";
    
    const itemMarkError = document.getElementById("itemMarkError");
    itemMarkError.style.display = "none";

    const enginNotMarkedError = document.getElementById("enginNotMarkedError");
    enginNotMarkedError.style.display = "none";

    // resets all field border
    const fields = [ncrNum, date, supplierName, poProdNo, salesOrderNo, itemDescription, 
                    defectDescription, quantityReceived, quantityDefective, qualityRepName];
    fields.forEach(field => field.style.border = "1px solid #ced4da"); // defalut Bootstrap border

    // validation for all fields
    if (!ncrNum.value.trim()) {
        ncrNum.style.border = "2px solid red";
        //displays the error message in red below the field of input
        ncrNumError.style.display = "inline"; 
        isValid = false;
    }

    if (!date.value) {
        date.style.border = "2px solid red";
        dateError.style.display = "inline";
        isValid = false;
    }

    if (idCheckBox.length === 0) {
        document.querySelector('input[name="process"]').parentNode.style.border = "2px solid red";
        identifyError.style.display ="inline";
        isValid = false;
    }

    if (!supplierName.value.trim()) {
        supplierName.style.border = "2px solid red";
        supplierError.style.display ="inline";
        isValid = false;
    }

    if (!poProdNo.value.trim()) {
        poProdNo.style.border = "2px solid red";
        prodError.style.display ="inline";
        isValid = false;
    }

    if (!salesOrderNo.value.trim()) {
        salesOrderNo.style.border = "2px solid red";
        salesError.style.display ="inline";
        isValid = false;
    }

    if (!itemDescription.value.trim()) {
        itemDescription.style.border = "2px solid red";
        desItemError.style.display = "inline";
        isValid = false;
    }

    if (!defectDescription.value.trim()) {
        defectDescription.style.border = "2px solid red";
        desDefectError.style.display = "inline";
        isValid = false;
    }

    if (!quantityReceived.value || quantityReceived.value <= 0) {
        quantityReceived.style.border = "2px solid red";
        quanRecievedError.style.display = "inline";
        isValid = false;
    }

    if (!quantityDefective.value || quantityDefective.value < 0) {
        quantityDefective.style.border = "2px solid red";
        quanDefectiveError.style.display = "inline";
        isValid = false;
    }

    if (!qualityRepName.value.trim()) {
        qualityRepName.style.border = "2px solid red";
        qualityError.style.display = "inline";

        isValid = false;
    }

    if (!nonconforming) {
        document.querySelector('input[name="nonconforming"]').parentNode.style.border = "2px solid red";
        itemMarkError.style.display = "inline";
        isValid = false;
    }

    if (!enginNotNeeded) {
        document.querySelector('input[name="ennotneeded"]').parentNode.style.border = "2px solid red";
        enginNotMarkedError.style.display = "inline";
        isValid = false;
    }

    // Submit if all fields are valid
    if (isValid) {
        document.getElementById("ncrForm").submit();
    }
}

btnSub.addEventListener("click", validateForm);
