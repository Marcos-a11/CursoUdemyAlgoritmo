var numero1, numero2, operacao, resultado;

function acaoBotao(){
    numero1 = prompt("Numero 1: ");
    operacao = prompt("Infome a operação: +, -, *, /");
    numero2 = prompt("Numero 2: ");
    
    switch(operacao){
        case "+":
            resultado = parseInt(numero1) + parseInt(numero2);
            break;
        case "-":
            resultado = parseInt(numero1) - parseInt(numero2);
            break;
        case "*":
            resultado = parseInt(numero1) * parseInt(numero2);
            break;
        case "/":
            resultado = parseInt(numero1) / parseInt(numero2);
            break;
    } 
    
    document.getElementById("paragrafo").innerText = "Resultado: "+resultado;
}

