var  fatorial, numero;
fatorial = 1;

function numFat(){
    numero = prompt("Informe um numero: ")
    for(var contador = 1;  contador <= numero; contador++){
        fatorial = fatorial + contador;
    }

    document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " é: " +fatorial
}