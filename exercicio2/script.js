let idade = +prompt("Qual a sua idade?")
let isMaiorIdade
let isTerminouEnsinoMedio = confirm("Você terminou o Ensino Médio?")
let isCursandoOutraFaculdade = confirm("Está cursando alguma faculdade?")

if(idade >= 18){
    isMaiorIdade = true
}else{
	isMaiorIdade = false
}

if (isMaiorIdade) {
    alert("Já é maior de idade, já pode ser preso!")
} else {
    alert("Você é menor de idade, então ta safe!")
}

if(isTerminouEnsinoMedio === true) {
    alert("Favela venceu!")
} else {
    alert("Relaxo, Benjamin Franklin também não fez ensino médio!")
} 

if (isCursandoOutraFaculdade === true) {
    alert("Caraca você já faz faculdade, você é GOAT!")
} else {
    alert("Calmo, que faculdade não é tudo!")
}