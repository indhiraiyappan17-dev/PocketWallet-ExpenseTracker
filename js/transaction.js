document.addEventListener("DOMContentLoaded", function () {

    const tableBody = document.getElementById("transactionTable");
    const search = document.getElementById("search");
    const filter = document.getElementById("filter");

    function displayTransactions() {

        try {

            // Loading State
            tableBody.innerHTML = `
                <tr>
                    <td colspan="5">Loading...</td>
                </tr>
            `;

            // Get Transactions
            let transactions = getTransactions();

            const searchText = search ? search.value.toLowerCase() : "";
            const filterValue = filter ? filter.value : "All";

            // Clear Table
            tableBody.innerHTML = "";

            // Filter Transactions
            let filtered = transactions.filter(function (item) {

                let matchCategory = item.category
                    .toLowerCase()
                    .includes(searchText);

                let matchType =
                    filterValue === "All" ||
                    item.type === filterValue;

                return matchCategory && matchType;
            });

            // No Data
            if (filtered.length === 0) {

                tableBody.innerHTML = `
                    <tr>
                        <td colspan="5">No Transactions Found</td>
                    </tr>
                `;

                return;
            }

            // Display Data
            filtered.forEach(function (item, index) {

                tableBody.innerHTML += `
                    <tr>
                        <td>${item.date}</td>
                        <td>${item.type}</td>
                        <td>${item.category}</td>
                        <td>₹${item.amount}</td>
                        <td>
                            <button onclick="removeTransaction(${index})">
                                Delete
                            </button>
                        </td>
                    </tr>
                `;

            });

        } catch (error) {

            // Error State
            tableBody.innerHTML = `
                <tr>
                    <td colspan="5">
                        ❌ Error Loading Transactions
                    </td>
                </tr>
            `;

            console.error(error);

        }

    }

    // Delete Transaction
    window.removeTransaction = function (index) {

        deleteTransaction(index);

        displayTransactions();

    };

    // Search
    if (search) {
search.addEventListener("input", displayTransactions);

    // Filter
    if (filter) {

        filter.addEventListener("change", displayTransactions);

    }

    // Initial Load
    displayTransactions();

});