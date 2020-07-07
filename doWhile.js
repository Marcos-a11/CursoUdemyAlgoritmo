function whileDo(){

    var num1, num2, sair

do {
    num1 = prompt("Digite o valor 1: ")
    num2 = prompt("Digite o valor 2: ")
    document.getElementById("paragrafo").innerText = "Resultado: " + (praseInt(num1) + parseInt(num2))
    sair = prompt("Deseja sair? s/n")
} while (sair != "n");
}