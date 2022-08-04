let nacionalidade = prompt("Escreva aqui sua nacionalidade")

const nacionalidadesRegistradas = ["brasileira", "argentina", "uruguaia", "chilena", "colombiana"]

if (nacionalidadesRegistradas.includes(nacionalidade)) {
    console.log("Sua nacionalidade é:", nacionalidade);
} else {
    console.log("Nacionalidade não encontrada");
}