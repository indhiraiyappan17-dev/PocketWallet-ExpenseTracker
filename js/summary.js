document.addEventListener("DOMContentLoaded", function () {

    const incomeElement = document.getElementById("summaryIncome");
    const expenseElement = document.getElementById("summaryExpense");
    const balanceElement = document.getElementById("summaryBalance");
    const categoryTable = document.getElementById("categorySummary");

    const transactions = getTransactions();
    const totals = calculateTotals();

    // Display Overall Summary
    if (incomeElement) {
        incomeElement.textContent = "₹" + totals.income;
    }

    if (expenseElement) {
        expenseElement.textContent = "₹" + totals.expense;
    }

    if (balanceElement) {
        balanceElement.textContent = "₹" + totals.balance;
    }

    // Category Summary
    let categoryTotals = {};

    transactions.forEach(function(item){

        if(categoryTotals[item.category]){
            categoryTotals[item.category] += Number(item.amount);
        }else{
            categoryTotals[item.category] = Number(item.amount);
        }

    });

    if(categoryTable){

        categoryTable.innerHTML = "";

        if(Object.keys(categoryTotals).length === 0){

            categoryTable.innerHTML = `
                <tr>
                    <td colspan="2">No Data Available</td>
                </tr>
            `;

        }else{

            for(let category in categoryTotals){

                categoryTable.innerHTML += `
                    <tr>
                        <td>${category}</td>
                        <td>₹${categoryTotals[category]}</td>
                    </tr>
                `;

            }

        }

    }

});