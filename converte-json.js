console.log("---------------ADICIONANDO O ESTUDANTE.JSON PARA UMA VARIAVEL-----------------")
const estudante = require('./estudante.json')

console.log("---------------TRASNFORMANDO OBJETO PARA STRING-----------------")

const stringEstudante = JSON.stringify(estudante);
console.log(stringEstudante)
console.log(typeof stringEstudante)

console.log("---------------STRING NÃO ACESSA CHAVES KEYS-----------------")
console.log(stringEstudante.nome)

console.log("---------------TRASNFORMANDO DE STRING PARA OBJETO-----------------")
const objEstudante = JSON.parse(stringEstudante);
console.log(objEstudante);
console.log(typeof objEstudante);