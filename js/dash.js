document.addEventListener("DOMContentLoaded", function () {

    const incomeElement = document.getElementById("totalIncome");
    const expenseElement = document.getElementById("totalExpense");
    const balanceElement = document.getElementById("balance");
    const transactionElement = document.getElementById("totalTransactions");
    const recentTransactions = document.getElementById("recentTransactions");

    const totals = calculateTotals();
    const transactions = getTransactions();

    if (incomeElement) {
        incomeElement.textContent = "₹" + totals.income;
    }

    if (expenseElement) {
        expenseElement.textContent = "₹" + totals.expense;
    }

    if (balanceElement) {
        balanceElement.textContent = "₹" + totals.balance;
    }

    if (transactionElement) {
        transactionElement.textContent = transactions.length;
    }

    // Show Recent Transactions
    if (recentTransactions) {

        recentTransactions.innerHTML = "";

        if (transactions.length === 0) {
            recentTransactions.innerHTML =
                `<tr><td colspan="4">No Transactions Available</td></tr>`;
        } else {

            transactions.slice(-5).reverse().forEach(function(item) {

                recentTransactions.innerHTML += `
                    <tr>
                        <td>${item.date}</td>
                        <td>${item.category}</td>
                        <td>${item.type}</td>
                        <td>₹${item.amount}</td>
                    </tr>
                `;

            });

        }
    }

});