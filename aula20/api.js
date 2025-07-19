
function Calcular() {
    let valor1 = parseFloat(document.getElementById("n1").value)
    let valor2 = parseFloat(document.getElementById("n2").value)
    let operador = (document.getElementById("operacao").value)
    let resultadocalc = 0
    switch (operador) {
        case '+':
            resultadocalc = valor1 + valor2;
            break;
        case '-':
            resultadocalc = valor1 - valor2;
            break;
        case '*':
            resultadocalc = valor1 * valor2;
            break;
        case '/':
            resultadocalc = valor1 / valor2;
            break;
    }


    document.getElementById("resultadocalc").innerText = resultadocalc;

}
