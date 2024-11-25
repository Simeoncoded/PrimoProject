ncrs = [
    {
    date: 
    "2024-11-25",
    defect_description: 
    "The eggs are white and yellow",
    ennotneeded: 
    "Yes",
    item_description: 
    "Green eggs and Ham",
    ncr_no: 
    "2024-001",
    nonconforming: 
    "Yes",
    po_prod_no: 
    "1278",
    process: 
    ['Supplier or Rec-Insp'],
    quality_rep_name: 
    "Doctor Seuss",
    quantity_defective: 
    "200",
    quantity_received: 
    "2000",
    sales_order_no: 
    "433",
    status: 
    "open",
    supplier_name: 
    "green_goods",
    }
]

function codeAddress() {
    const existingNCRs = JSON.parse(localStorage.getItem('ncrs')) || -1;
    if (existingNCRs == -1) {
        localStorage.setItem('ncrs', JSON.stringify(ncrs))
        localStorage.setItem('ncrLastNum', ncrs.length)
        location.reload()
        
    }
}
window.onload = codeAddress;
