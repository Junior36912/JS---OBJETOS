console.log("---------------IMPORTANDO O q1/DADOS.JSON PARA UMA VARIAVEL E ACESSANDO-----------------")

const dadosImport = require('./dados.json');
console.log(dadosImport)

console.log("---------------ACESSAR KEYS-----------------")
console.log(dadosImport.usuarios)

console.log("---------------TENTANDO ACESSAR DIRETAMENTE-----------------")

for(let chave in dadosImport){
    const texto = `${chave} é ${dadosImport[chave]}`
    console.log(texto)
}

