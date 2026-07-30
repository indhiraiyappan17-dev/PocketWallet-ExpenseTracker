const balance = document.getElementById("totalBalance");
const income = document.getElementById("totalIncome");
const expense = document.getElementById("totalExpense");

function updateDashboard() {

    const transactions = getTransactions();

    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach(item => {

        if (item.type === "Income") {
            totalIncome += Number(item.amount);
        } else {
            totalExpense += Number(item.amount);
        }

    });

    const totalBalance = totalIncome - totalExpense;

    if (balance) balance.textContent = "₹" + totalBalance;
    if (income) income.textContent = "₹" + totalIncome;
    if (expense) expense.textContent = "₹" + totalExpense;
}

updateDashboard();
