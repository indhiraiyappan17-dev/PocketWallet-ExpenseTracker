const incomeEl = document.getElementById("summaryIncome");
const expenseEl = document.getElementById("summaryExpense");
const balanceEl = document.getElementById("summaryBalance");
const summaryTable = document.getElementById("summaryTable");

function loadSummary() {

    const transactions = getTransactions();

    let income = 0;
    let expense = 0;
    let categories = {};

    transactions.forEach(item => {

        const amount = Number(item.amount);

        if (item.type === "Income") {
            income += amount;
        } else {
            expense += amount;
        }

        if (!categories[item.category]) {
            categories[item.category] = 0;
        }

        categories[item.category] += amount;

    });

    const balance = income - expense;

    if (incomeEl) incomeEl.textContent = "₹" + income;
    if (expenseEl) expenseEl.textContent = "₹" + expense;
    if (balanceEl) balanceEl.textContent = "₹" + balance;

    if (summaryTable) {

        summaryTable.innerHTML = "";

        for (let category in categories) {

            summaryTable.innerHTML += `
            <tr>
                <td>${category}</td>
                <td>₹${categories[category]}</td>
            </tr>
            `;

        }

    }

}

loadSummary();
