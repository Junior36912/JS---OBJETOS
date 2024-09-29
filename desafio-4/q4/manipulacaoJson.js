const dadosAnimais = require('./animais.json')

//a) Leia o conteúdo do arquivo animais.json.
console.log("---------------------------------CONTEUDO ANIMAIS.JSON----------------------------------")
console.log(require('./animais.json'))


//b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().
console.log("---------------------------------CONTEUDO ANIMAIS.JSON EM PARSE----------------------------------")
console.log(dadosAnimais)


//c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.
console.log("---------------------------------ADICIONANDO UM NOVO ANIMAL AO dadosAnimais----------------------------------")
const novoAnimal = {
    id: 4,
    nome: "Urubu Rei",
    tipo: "Ave",
    habitat: "Mata do Cerrado"
}

dadosAnimais.animais.push(novoAnimal)
console.log(dadosAnimais)

//d) Modifique o habitat de um animal existente no array de animais.
console.log("---------------------------------MODIFICANDO UM HABITAT DO OBJ----------------------------------")
dadosAnimais.animais[0].habitat = "Brasil"
console.log(dadosAnimais)

//e) Remova um animal do array de animais.
console.log("---------------------------------REMOVENDO UM ANIMAL----------------------------------")
dadosAnimais.animais.splice(1, 1)
console.log(dadosAnimais)


//f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().
console.log("---------------------------------CONTEUDO ANIMAIS.JSON EM STRINGIFY----------------------------------")
const dadosAnimaisString = JSON.stringify(dadosAnimais)
console.log(dadosAnimaisString)

//g) Imprima no console o objeto JavaScript resultante das operações.
console.log("---------------------------------DADOS ANIMAIS FINAL----------------------------------")
console.log(dadosAnimais)