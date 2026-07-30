function getTransactions() {
    return JSON.parse(localStorage.getItem("transactions")) || [];
}
function saveTransactions(transactions) {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}
function addTransaction(transaction) {
    const transactions = getTransactions();
    transactions.push(transaction);
    saveTransactions(transactions);
}
