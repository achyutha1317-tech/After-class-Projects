function getBalance() {
    return Number(document.getElementById("balance").innerText);
}

function getAmount() {
    return Number(document.getElementById("amount").value);
}

function showMessage(text) {
    document.getElementById("message").innerText = text;
}

function isAmountValid() {
    let typed = document.getElementById("amount").value;

    if (typed == "") {
        showMessage ("Please enter an amount.")
        return false;
    } else if (Number(typed) <= 0) {
        showMessage("Amount must be more than zero");
        return false;
    }

    return true;
}


document.getElementById("credit-btn").addEventListener("click", function() {
    if (isAmountValid() == false) {
        return;
    }

    let amount = getAmount();
    let newBalance = getBalance() + amount;
    printBalance(newBalance);
    showMessage("Credited" + amount + "successfully.");
    document.getElementById("amount").value = "";
});

document.getElementById("debit-btn").addEventListener("click", function () {
    if (isAmountValid() == false) {
        return;
    }
    let amount = getAmount();

    if (amount > getBalance()) {
        showMessage("Not enough balance.");
        return;
    }

    let newBalance = getAmount() - amount;
    printBalance(newBalance);
    showMessage("Debited " + amount + " successfully.");
    document.getElementById("amount").value = "";

});
  

