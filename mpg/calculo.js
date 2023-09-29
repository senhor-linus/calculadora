//calculadora de idade
function idade (){
    let anoDeNascimento = parseInt(prompt("Em que ano você nasceu?"));
    let idade = 2023 - anoDeNascimento;
    alert("Quem nasceu em " + anoDeNascimento + " vai fazer " + idade)
}

//calculadora de notas
function notas(){
    let nota1Trim = parseFloat(prompt("Digite a nota do primeiro trimestre:").textContent);
    let nota2Trim = parseFloat(prompt("Digite a nota do primeiro trimestre:").textContent);
    let nota3Trim = parseFloat(prompt("Digite a nota do primeiro trimestre: ").textContent);

    let resultado = nota1Trim + nota2Trim + nota3Trim;

if(resultado >= 180){
    //se for maior que 180 aparece como aprovado
    resultadoFinal.textContent = "Sim né, fez o básico!";
} else {
    //se não, aparece como reprovado e mostra o quanto de nota precisa 
    let notaNecessária = 180 (nota1Trim+nota2Trim+nota3Trim);
    resultadoFinal.textContent = "Não! Não fez nem o básico :/ ainda precisaria de " + "no terceiro";
}
}