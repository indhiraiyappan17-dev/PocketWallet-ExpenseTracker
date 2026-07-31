const form = document.getElementById("transactionForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const type = document.getElementById("type").value;
        const category = document.getElementById("category").value;
        const amount = document.getElementById("amount").value;
        const date = document.getElementById("date").value;

        if (type === "" || category === "" || amount === "" || date === "") {
            alert("Please fill all fields.");
            return;
        }

        if (Number(amount) <= 0) {
            alert("Amount must be greater than zero.");
            return;
        }

        const transaction = {
            type: type,
            category: category,
            amount: Number(amount),
            date: date
        };

        addTransaction(transaction);

        alert("Transaction Added Successfully!");

        form.reset();

    });

}