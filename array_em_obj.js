const estudante = {
    nome: 'Júnior Jackson',
    idade: 19,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: false,
    telefones: ['551199999998', '551199999993'],
    endereco: [{
      rua: 'Rua Muito_Engraçada',
      numero: 'XX',
      complemento: 'apto 43'
    }]
}

estudante.endereco.push({
    rua: 'Rua Não-Tinha-Nada',
    numero: '71',
    complemento: 'casa'
})

console.log("----------------------------OBJ ESTUDANTE----------------------------")

console.log(estudante);

console.log("----------------------------ENDEREÇO ESTUDANTE----------------------------")

console.log(estudante.endereco);
console.log(estudante.endereco[1]);

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento)


console.log("----------------------------------APENAS----------------------------------")

console.log(listaEnderecosComComplemento);