const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}


console.log("-------------DUPLICANDO OBJETO USANDO FUNÇÃO-----------")

function duplicaObjeto(obj){
    return {...obj}
}

const pessoaCopia = duplicaObjeto(pessoaOriginal)

pessoaCopia.nome = "Junior Jackson"
pessoaCopia.idade = 19
pessoaCopia.id = 2

console.log("----------------------OBJETO ORIGINAL------------------")
console.log(pessoaOriginal)

console.log("------------------------OBJETO COPIA-------------------")
console.log(pessoaCopia)