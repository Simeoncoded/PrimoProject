ncrs = [
    {
        date: "2024-11-25",
        defect_description: "The eggs are white and yellow",
        ennotneeded: "Yes",
        item_description: "Green eggs and Ham",
        ncr_no: "2024-001",
        nonconforming: "Yes",
        po_prod_no: "1278",
        process: "Supplier or Rec-Insp",
        quality_rep_name: "Doctor Seuss",
        quantity_defective: "200",
        quantity_received: "2000",
        sales_order_no: "433",
        status: "open",
        supplier_name: "Green Goods Ltd.",
    }
]

suppliers = [
    "Acme Supplies",
    "Green Goods Ltd.",
    "Fast Track Supplies",
    "Prime Sources Inc.",
    "Blue Ocean Trading",
    "World Wide Distributors",
    "Eco Trade Partners",
    "Luxury Goods International",
    "Mega Supplies Co.",
    "Top Choice Suppliers"
]

function callCurrentUser() {

    console.log(localStorage.getItem('user'))

}

function codeAddress() {
    const existingNCRs = JSON.parse(localStorage.getItem('ncrs')) || -1;
    if (existingNCRs == -1) {
        localStorage.setItem('ncrs', JSON.stringify(ncrs));
        localStorage.setItem('ncrLastNum', ncrs.length);
    }
    
    const existingSuppliers = JSON.parse(localStorage.getItem('suppliers')) || -1;
    if (existingSuppliers == -1) { 
        localStorage.setItem('suppliers', JSON.stringify(suppliers));
    }
}


window.onload = codeAddress;



