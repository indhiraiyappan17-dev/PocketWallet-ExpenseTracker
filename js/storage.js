// Get all transactions
function getTransactions() {
    let transactions = localStorage.getItem("transactions");

    if (transactions === null) {
        return [];
    }

    return JSON.parse(transactions);
}

// Save all transactions
function saveTransactions(transactions) {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Add one transaction
function addTransaction(transaction) {
    let transactions = getTransactions();
    transactions.push(transaction);
    saveTransactions(transactions);
}

// Delete transaction
function deleteTransaction(index) {
    let transactions = getTransactions();
    transactions.splice(index, 1);
    saveTransactions(transactions);
}

// Calculate totals
function calculateTotals() {

    let transactions = getTransactions();

    let income = 0;
    let expense = 0;

    transactions.forEach(function(item){

        if(item.type === "Income"){
            income += Number(item.amount);
        }
        else{
            expense += Number(item.amount);
        }

    });

    return{
        income: income,
        expense: expense,
        balance: income - expense
    };

}