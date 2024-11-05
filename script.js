function calculateResult() {
    const inputA = parseFloat(document.getElementById("inputA").value);
    let x;

    if (isNaN(inputA)) {
        document.getElementById("resultOutput").innerText = "Пожалуйста, введите корректное число.";
        return;
    }

    if (inputA < 10) {
        x = Math.pow(inputA, 4);
    } else if (inputA > 61) {
        x = inputA;
    } else {
        x = inputA - Math.sin(Math.pow(inputA, 2));
    }

    document.getElementById("resultOutput").innerText = "Результат x = " + x.toFixed(4);
}