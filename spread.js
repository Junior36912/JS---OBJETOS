const estudante = {
    nome: 'Junior Jackson',
    idade: 19,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: false,
    telefones: ['551199999998', '551199999993'],
    enderecos: [{
        rua: 'Rua Numero-Zero',
        numero: '24',
        complemento: 'apto 43'
    },
    {
        rua: 'Rua Dos-Bobos',
        numero: '71',
        complemento: null
    }]
}



function exibirTelefones(telefone1, telefone2) {
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
}

console.log("-------------------------------EXIBIR SEM SPREAD-----------------------------------")

exibirTelefones(estudante.telefones[0], estudante.telefones[1]);

console.log("-------------------------------EXIBIR COM SPREAD-----------------------------------")

exibirTelefones(...estudante.telefones);

console.log("----------------------------EXIBIR DADOS COM SPREAD--------------------------------")

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0],
}

console.log(dadosEnvio);


console.log("-------------------------------EXIBIR SPREAD OBJ DIFERENTES-----------------------------------")

const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}
    
const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}

const guerreiroKeysDiferentes = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiroKeysDiferentes)

console.log("-------------------------------EXIBIR SPREAD OBJ KEYS IGUAIS -----------------------------------")

const mago1 = {
    nome: "Gandalf",
    classe: "mago"
}
const guerreiro1 = {
    nome: "Aragorn",
    classe: "guerreiro"
}
    
const ranger1 = {
    nome: "Legolas",
    classe: "ranger"
}

const personagensKeysIguais = { ...mago1, ...guerreiro1, ...ranger1 }
console.log(personagensKeysIguais)