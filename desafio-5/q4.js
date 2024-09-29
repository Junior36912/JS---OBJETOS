const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]

console.log("----------------------ORDENS DE UMA LSITA DE ANIMAIS QUE SÃO OBJ----------------------")


function ordemCresc(lista, propriedade){
    return lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) return -1;
        if (a[propriedade] > b[propriedade]) return 1;
        return 0
    })
}

function ordemDecresc(lista, propriedade){
    return lista.sort((a, b) => {
        if (a[propriedade] > b[propriedade]) return -1;
        if (a[propriedade] < b[propriedade]) return 1;
        return 0
    })
}


console.log("----------------------ORDEM CRESCENTE----------------------")
const animaisCresc = ordemCresc(animais, 'id')
console.log(animaisCresc)


console.log("----------------------ORDEM DECRESCENTE----------------------")
const animaisDecresc = ordemDecresc(animais, 'id')
console.log(animaisDecresc)
