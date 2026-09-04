let total = 0;
let categoryTotals = {};
let expenses = [];

function addExpense() {

    let name = document.getElementById("expenseName").value;
    let amount = Number(document.getElementById("expenseAmount").value);
    let category = document.getElementById("expenseCategory").value;

    if (name === "" || amount <= 0) {
        alert("Please enter a valid expense.");
        return;
    }

    let expense = {
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    updateApp();

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}


function deleteExpense(index) {

    expenses.splice(index, 1);

    updateApp();
}


function updateApp() {

    total = 0;
    categoryTotals = {};

    let expenseHTML = "";

    for (let i = 0; i < expenses.length; i++) {

        let expense = expenses[i];

        total = total + expense.amount;

        if (categoryTotals[expense.category]) {
            categoryTotals[expense.category] =
                categoryTotals[expense.category] + expense.amount;
        } else {
            categoryTotals[expense.category] = expense.amount;
        }

        expenseHTML +=
            "<p>" +
            expense.category +
            " | " +
            expense.name +
            " - RM" +
            expense.amount +
            " " +
            "<button onclick='deleteExpense(" + i + ")'>Delete</button>" +
            "</p>";
    }

    document.getElementById("expenseList").innerHTML = expenseHTML;

    document.getElementById("total").innerText = total;

    document.getElementById("balance").innerText = 3800 - total;


    let categoryHTML = "";

    for (let category in categoryTotals) {

    let icon = "";

    if (category === "Food") {
        icon = "🍔";
    } else if (category === "Petrol") {
        icon = "🚗";
    } else if (category === "Shopping") {
        icon = "🛍️";
    } else if (category === "Bills") {
        icon = "🏠";
    } else if (category === "Pets") {
        icon = "🐱";
    } else {
        icon = "📦";
    }

    categoryHTML +=
        '<div class="category-card">' +
        '<div class="category-icon">' + icon + '</div>' +
        '<div class="category-name">' + category + '</div>' +
        '<div class="category-amount">RM ' +
        categoryTotals[category].toFixed(2) +
        '</div>' +
        '</div>';
}

    document.getElementById("categoryTotals").innerHTML = categoryHTML;
}
