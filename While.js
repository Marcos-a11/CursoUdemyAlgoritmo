function acaoBotao(){

var  idade, nome, cont, limit;

limit = prompt("Digite a quantidade de vezes")
cont = 0

while(cont < limit){
nome = prompt("Informe seu nome: ")
idade = prompt("Informe sua idade: ")
    if(idade > 18){
        document.getElementById("paragrafo").innerText = nome + "Voce é maior de idade"
    }else{
        document.getElementById("paragrafo").innerText = nome + "Voce é menor de idade"
        cont++
    }
}
}