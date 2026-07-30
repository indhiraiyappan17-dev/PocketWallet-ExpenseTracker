const form = document.getElementById("transactionForm");

if (form) {

form.addEventListener("submit", function(e) {

e.preventDefault();

const type = document.getElementById("type").value;
const amount = document.getElementById("amount").value;
const category = document.getElementById("category").value;
const date = document.getElementById("date").value;
const description = document.getElementById("description").value;
const message = document.getElementById("message");

if (!type || !amount || !category || !date || !description) {
    message.style.color = "red";
    message.textContent = "Please fill all fields.";
    return;
}

if (amount <= 0) {
    message.style.color = "red";
    message.textContent = "Amount must be greater than zero.";
    return;
}

const transaction = {
    type,
    amount: Number(amount),
    category,
    date,
    description
};

addTransaction(transaction);

message.style.color = "green";
message.textContent = "Transaction Added Successfully!";

form.reset();

});

}
