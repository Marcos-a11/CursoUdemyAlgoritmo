var numero1, numero2, operacao, resultado;

function acaoBotao(){
    numero1 = prompt("Numero 1: ");
    numero2 = prompt("Numero 2: ");
    operacao = prompt("Infome a operação: +, -, *, /");
    
    if(operacao == "+"){
        resultado = parseInt(numero1) + parseInt(numero2);
    
    }else if(operacao == "-"){
        resultado = parseInt(numero1) - parseInt(numero2);
    
    }else if (operacao == "*"){
        resultado = parseInt(numero1) * parseInt(numero2);
    
    }else if(operacao == "/"){
        resultado = parseInt(numero1) / parseInt(numero2);
        
    }
    
    document.getElementById("paragrafo").innerText = "Resultado: "+resultado;
}
