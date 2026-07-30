const tableBody = document.getElementById("historyTable");
const categoryFilter = document.getElementById("categoryFilter");

function displayTransactions(filter = "All") {

    if (!tableBody) return;

    const transactions = getTransactions();

    tableBody.innerHTML = "";

    let filtered = transactions;

    if (filter !== "All") {
        filtered = transactions.filter(item => item.type === filter);
    }

    if (filtered.length === 0) {
        tableBody.innerHTML = `
        <tr>
            <td colspan="4">No Results Found</td>
        </tr>`;
        return;
    }

    filtered.forEach(item => {

        tableBody.innerHTML += `
        <tr>
            <td>${item.date}</td>
            <td>${item.type}</td>
            <td>${item.category}</td>
            <td>₹${item.amount}</td>
        </tr>
        `;

    });

}
if (categoryFilter) {

    categoryFilter.addEventListener("change", function () {
        displayTransactions(this.value);
    });

}
displayTransactions();
