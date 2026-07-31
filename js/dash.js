document.addEventListener("DOMContentLoaded", function () {

    const incomeElement = document.getElementById("totalIncome");
    const expenseElement = document.getElementById("totalExpense");
    const balanceElement = document.getElementById("balance");
    const transactionElement = document.getElementById("totalTransactions");

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

});
