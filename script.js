function addCaracter(caracter) {
    const valueDisplay = document.querySelector(".displayGrid").value

    document.querySelector(".displayGrid").value = valueDisplay + caracter
}

function limpaTela() {
    document.querySelector(".displayGrid").value = ""
}

function calc() {
    const valueDisplay = document.querySelector(".displayGrid").value

    document.querySelector(".displayGrid").value = eval(valueDisplay)
}

function inverterNumero() {
    const valueDisplay = document.querySelector(".displayGrid").value

    document.querySelector(".displayGrid").value = valueDisplay * -1
}

