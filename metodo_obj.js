const estudante = {
    nome: 'Junior Jackson',
    idade: 19,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: false,
    telefones: ['551199999998', '551199999993'],
    enderecos: [{
        rua: 'Rua Numero-Zero',
        numero: '69',
        complemento: 'apto 43'
    },
    {
        rua: 'Rua Dos-Bobos',
        numero: '71',
        complemento: null
    }]
}

console.log("--------------CHAVES-----------------")

const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto);

console.log("--------------VERIFICAR SE EXISTE UMA CHAVE-----------------")

if (!chavesObjeto.includes("enderecos")){
    console.error("É necessario ter um endereço cadastrado!")
}else{
    console.log("Existe um endereço cadastrado!")

}

console.log("--------------VALORES-----------------")

const valoresObjeto = Object.values(estudante);
console.log(valoresObjeto);

console.log("--------------VERIFICAR SE EXISTE UM VALOR-----------------")

if(valoresObjeto.includes(19)){
    console.log("Pessoa tem 19 anos mesmo")
} else{
    console.log("Não tem 19 anos")
}

console.log("--------------CHAVES E VALORES-----------------")

const valoresEChavesObjeto = Object.entries(estudante)

console.log(valoresEChavesObjeto)

console.log("--------------ACESSANDO O 1° ITEM DAS CHAVES E VALORES-----------------")

console.log(valoresEChavesObjeto[0])

console.log("--------------ACESSANDO 1° ITEM DO 1° ITEM CHAVES E VALORES-----------------")

console.log(valoresEChavesObjeto[0][0])


console.log("--------------ACESSANDO CHAVES E VALORES COM FOR..LOOP-----------------")

for (const [key] of Object.entries(valoresEChavesObjeto)) {
    console.log(`${valoresEChavesObjeto[key][0]} : ${valoresEChavesObjeto[key][1]}`); 
}

console.log("--------------ACESSANDO CHAVES E VALORES COM forEach-----------------")

Object.entries(valoresEChavesObjeto).forEach(([key]) => {
    console.log(`${valoresEChavesObjeto[key][0]} : ${valoresEChavesObjeto[key][1]}`); 
});


console.log("-------------------------FUSÃO DE OBJETOS----------------------------")

const objetoOriginal = { a: 1, b: 2 };
const objetoParaFundir = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaFundir);

console.log("Objeto original:", objetoOriginal);

console.log("Objeto para fundir:", objetoParaFundir);

console.log("Objeto fundido: ", objetoFusionado);
// Saída: { a: 1, b: 3, c: 4 }