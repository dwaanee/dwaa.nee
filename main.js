function showPinScreen() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("pinScreen").style.display = "block";
}

function checkPin() {
    var pin = document.getElementById("pinInput").value;
    if (pin === "121919") {
        alert("Correct PIN! ❤️");
    } else {
        alert("Wrong PIN! Try again.");
    }
}
