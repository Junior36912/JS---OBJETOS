console.log("---------------ADICIONANDO O ESTUDANTE.JSON PARA UMA VARIAVEL-----------------")

const estudante = require('./estudante.json');
console.log(estudante);


console.log("---------------TIPO DA VARIAVEL ESTUDANTE QUE CONTEM JSON-----------------")
console.log(typeof estudante)


console.log("---------------OBSERVANDO AS CHAVES DO OBJETO-----------------")
const chaves = Object.keys(estudante);
console.log(chaves);