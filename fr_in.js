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

console.log("------------------------------------PERCORRENDO CHAVE--------------------------------------")

for (let chave in estudante) {
    console.log(chave);
}

console.log("----------------------------PERCORRENDO ESTUDANTE PELA CHAVE-------------------------------")

for (let chave in estudante) {
    console.log(estudante[chave]);
}

console.log("--------------------------------PERCORRENDO COM O TYPEOF-----------------------------------")

for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    const texto = `A chave ${chave} tem o valor de tipo ${estudante[chave]}`
    console.log(texto);
}

console.log("--------------------------------PERCORRENDO COM O VALOR-----------------------------------")

for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        const texto = `'${chave}' é: ${estudante[chave]}`
        console.log(texto);
    }
}


