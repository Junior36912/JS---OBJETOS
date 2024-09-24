const listaCPFs = ['12312312312', '123234435345'];

const infosPessoa = ['nome', 'José Silva', 'idade', 32];
console.log(infosPessoa[1]);

const objPessoa = {
  nome: 'Júnior Jackson',
  idade: 19,
  cpf: '12312312312',
  turma: 'JavaScript'
}

const objPessoa2 = {
    nome: 'João Marcos',
    idade: 22,
    cpf: '32132132132',
    turma: 'JavaScript'
}


console.log(objPessoa.nome)
console.log(objPessoa.idade)
console.log(objPessoa.cpf)
console.log(objPessoa.turma)

//console.log(objPessoa2.nome)
//console.log(objPessoa2.idade)
//console.log(objPessoa2.cpf)
//console.log(objPessoa2.turma)

console.log(objPessoa.nome);
console.log(`Nome do estudante: ${objPessoa.nome}`);
console.log(`Três primeiros números do CPF são: ${objPessoa.cpf.substring(0,3)}`);