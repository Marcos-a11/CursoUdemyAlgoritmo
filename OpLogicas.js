var nota, nota1, nome, media, passou;

nome = prompt("Informe seu nome: ")
nota = prompt("Digite a nota 1 do aluno: ");
nota1 = prompt("Digite a nota 2 do aluno: ");

passou = false;

media = (parseInt(nota)+parseInt(nota1)) / 2;

if (media >= 6){
    passou = true;
    if(passou && (media >= 7 && media <= 9)){
        alert("Nome: "+nome);
        alert("Nota 1: "+nota);
        alert("Nota 2: "+nota1);
        alert("Sua media é:"+media)
        alert("Parabens vc foi aprovdo");
    }else{
        alert("Nome: "+nome);
        alert("Nota 1: "+nota);
        alert("Nota 2: "+nota1);
        alert("Sua media é:"+media);
        alert("vc foi reprovado");
    }
}
