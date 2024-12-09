
//supplier_name
    const suppliers = JSON.parse(localStorage.getItem('suppliers')) || [];

    // Populate table rows
    suppliers.forEach(supplier => {
        const row = document.createElement('option');
        row.outerHTML = `value=${supplier}`
        row.text = supplier
        document.getElementById("supplier_name").appendChild(row);
    })