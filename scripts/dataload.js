ncrs = [
    //initial ten records
    {
        ncr_no: "2024-001",
        status: "open",
        // quality:{
            date: "2024-11-25",
            defect_description: "The eggs are white and yellow",
            ennotneeded: "Yes",
            item_description: "Green eggs and Ham",
            nonconforming: "Yes",
            po_prod_no: "1278",
            process: "Supplier or Rec-Insp",
            quality_rep_name: "Doctor Seuss",
            quantity_defective: "200",
            quantity_received: "2000",
            sales_order_no: "433",
            supplier_name: "Green Goods Ltd.",
        // },
        // engineer:{

        // },
        // purchasing:{

        // }
    },
    {
        ncr_no: "2024-002",
        status: "closed",
        // quality:{
            date: "2024-11-15",
            defect_description: "The wood is rotten",
            ennotneeded: "Yes",
            item_description: "Ply woods",
            nonconforming: "Yes",
            po_prod_no: "5142",
            process: "Supplier or Rec-Insp",
            quality_rep_name: "Jake blant",
            quantity_defective: "100",
            quantity_received: "1000",
            sales_order_no: "2321",
            supplier_name: "blue goods ltd",
        // },
        // engineer:{

        // },
        // purchasing:{

        // }
    },
    {
        ncr_no: "2024-003",
        status: "open",
        // quality:{
            date: "2024-10-20",
            defect_description: "Jackets are bleached",
            ennotneeded: "No",
            item_description: "Grey jackets",
            nonconforming: "No",
            po_prod_no: "3562",
            process: "Supplier or Rec-Insp",
            quality_rep_name: "Jake Paul",
            quantity_defective: "20",
            quantity_received: "500",
            sales_order_no: "433",
            supplier_name: "Green Goods Ltd.",
        // },
        // engineer:{

        // },
        // purchasing:{

        // }
    },
    {
        ncr_no: "2024-004",
        status: "closed",
        // quality:{
            date: "2024-10-19",
            defect_description: "The planks are bent",
            ennotneeded: "No",
            item_description: "Planks",
            nonconforming: "Yes",
            po_prod_no: "5732",
            process: "Supplier or Rec-Insp",
            quality_rep_name: "John Lot",
            quantity_defective: "20",
            quantity_received: "100",
            sales_order_no: "2421",
            supplier_name: "Green Goods Ltd.",
        // },
        // engineer:{

        // },
        // purchasing:{

        // }
    },
    {
        ncr_no: "2024-005",
        status: "open",
        // quality:{
            date: "2024-11-14",
            defect_description: "Wires are damaged",
            ennotneeded: "No",
            item_description: "Wires",
            nonconforming: "Yes",
            po_prod_no: "1424",
            process: "Supplier or Rec-Insp",
            quality_rep_name: "Kate Smith",
            quantity_defective: "10",
            quantity_received: "40",
            sales_order_no: "572",
            supplier_name: "Green Goods Ltd.",
        // },
        // engineer:{

        // },
        // purchasing:{

        // }
    },
    {
        ncr_no: "2024-006",
        status: "closed",
        // quality:{
            date: "2024-09-10",
            defect_description: "Screens are cracked",
            ennotneeded: "No",
            item_description: "Phone screens",
            nonconforming: "Yes",
            po_prod_no: "2342",
            process: "Supplier or Rec-Insp",
            quality_rep_name: "Jack Brown",
            quantity_defective: "200",
            quantity_received: "2000",
            sales_order_no: "433",
            supplier_name: "Green Goods Ltd.",
        // },
        // engineer:{

        // },
        // purchasing:{

        // }
    },
    {
        ncr_no: "2024-007",
        status: "open",
        // quality:{
            date: "2024-11-13",
            defect_description: "School bags are torn",
            ennotneeded: "Yes",
            item_description: "School bags",
            nonconforming: "Yes",
            po_prod_no: "0928",
            process: "Supplier or Rec-Insp",
            quality_rep_name: "Tate Wilson",
            quantity_defective: "5",
            quantity_received: "20",
            sales_order_no: "24525",
            supplier_name: "Green Goods Ltd.",
        // },
        // engineer:{

        // },
        // purchasing:{

        // }
    },
    {
        ncr_no: "2024-008",
        status: "closed",
        // quality:{
            date: "2024-11-29",
            defect_description: "Plain woods are warped",
            ennotneeded: "Yes",
            item_description: "Plain woods",
            nonconforming: "No",
            po_prod_no: "4723",
            process: "Supplier or Rec-Insp",
            quality_rep_name: "Tote Wilson",
            quantity_defective: "400",
            quantity_received: "900",
            sales_order_no: "2871",
            supplier_name: "Green Goods Ltd.",
        // },
        // engineer:{

        // },
        // purchasing:{

        // }
    },
    {
        ncr_no: "2024-009",
        status: "open",
        // quality:{
            date: "2024-11-18",
            defect_description: "Laptop Screens are not working",
            ennotneeded: "No",
            item_description: "Laptop Screens",
            nonconforming: "Yes",
            po_prod_no: "7423",
            process: "Supplier or Rec-Insp",
            quality_rep_name: "Joe Rouge",
            quantity_defective: "20",
            quantity_received: "34",
            sales_order_no: "1241",
            supplier_name: "Green Goods Ltd.",
        // },
        // engineer:{

        // },
        // purchasing:{

        // }
    },
    {
        ncr_no: "2024-010",
        status: "closed",
        // quality:{
            date: "2024-11-05",
            defect_description: "Cottons are not soft",
            ennotneeded: "Yes",
            item_description: "Cottons",
            nonconforming: "Yes",
            po_prod_no: "2351",
            process: "Supplier or Rec-Insp",
            quality_rep_name: "Kay Gold",
            quantity_defective: "200",
            quantity_received: "600",
            sales_order_no: "1341",
            supplier_name: "Green Goods Ltd.",
        // },
        // engineer:{

        // },
        // purchasing:{

        // }
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
    "Top Choice Suppliers",
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

    location.reload
}


window.onload = codeAddress;



