const estudantes = require('./estudantes.json');

function filtrarPorPropriedade(lista, propriedade){
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    })
}

console.log("----------------------FILTRAR INFORMAÇÕES DENTRO DE UM OBJETO----------------------")
const listaEnderecosIncompletos = filtrarPorPropriedade(estudantes, 'cep')
console.log(listaEnderecosIncompletos)