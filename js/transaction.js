document.addEventListener("DOMContentLoaded", function () {

    const tableBody = document.getElementById("transactionTable");
    const search = document.getElementById("search");
    const filter = document.getElementById("filter");

    function displayTransactions() {

        try {

            tableBody.innerHTML = `
                <tr>
                    <td colspan="5">Loading...</td>
                </tr>
            `;

            let transactions = getTransactions();

            const searchText = search ? search.value.toLowerCase() : "";
            const filterValue = filter ? filter.value : "All";

            let filtered = transactions.filter(function (item) {

                let matchCategory = item.category
                    .toLowerCase()
                    .includes(searchText);

                let matchType =
                    filterValue === "All" ||
                    item.type === filterValue;

                return matchCategory && matchType;
            });

            tableBody.innerHTML = "";

            if (filtered.length === 0) {

                tableBody.innerHTML = `
                    <tr>
                        <td colspan="5">No Transactions Found</td>
                    </tr>
                `;
                return;
            }

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

            tableBody.innerHTML = `
                <tr>
                    <td colspan="5">❌ Error Loading Transactions</td>
                </tr>
            `;

            console.error(error);
        }
    }

    window.removeTransaction = function (index) {
        deleteTransaction(index);
        displayTransactions();
    };

    if (search) {
        search.addEventListener("input", displayTransactions);
    }

    if (filter) {
        filter.addEventListener("change", displayTransactions);
    }

    displayTransactions();

});