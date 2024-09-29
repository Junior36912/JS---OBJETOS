const estudantes = require('./estudantes.json')

function ordena(lista, propriedade){
    return lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) return -1;
        if (a[propriedade] > b[propriedade]) return 1;
        return 0
    })
}

function ordenaInverso(lista, propriedade){
    return lista.sort((a, b) => {
        if (a[propriedade] > b[propriedade]) return -1;
        if (a[propriedade] < b[propriedade]) return 1;
        return 0
    })
}

console.log("----------------------ORDENAR OBJETOS SEGUINDO UMA PROPRIEDADE----------------------")

console.log("----------------------ORDEM CRESCENTE POR NOME----------------------")

const testeOrdem = ordena(estudantes, 'nome')

console.log(testeOrdem)

console.log("----------------------ORDEM DECRESCENTE POR NOME----------------------")

const testeOrdemDecrescente = ordenaInverso(estudantes, 'nome')

console.log(testeOrdemDecrescente)