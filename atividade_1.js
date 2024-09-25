const pessoa = {
    nome: "Júnior Jackson",
    idade: 19,
    solteiro: false,
    hobbies: ["Trilha", "Natureza", "Jogos Eletrônicos"]
};

pessoa.endereco = {
    Rua: "Pedro II", 
    Bairro: "Piaui",
    Estado: "Brasil"
}

console.log(pessoa)

function mostrarInfoPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}   |   (${typeof pessoa.nome})`);
    console.log(`Idade: ${pessoa.idade}   |   (${typeof pessoa.idade})`);
    console.log(`Solteiro: ${pessoa.solteiro}   |   (${typeof pessoa.solteiro})`);
    console.log(`Hobbies: ${pessoa.hobbies.join(", ")}    |    (${typeof pessoa.hobbies})`);
    console.log(`Endereço 
    Rua: ${pessoa.endereco.Rua},
    Bairro: ${pessoa.endereco.Bairro},
    Estado: ${pessoa.endereco.Estado}   |  |    (${typeof pessoa.endereco})`)
}

mostrarInfoPessoa(pessoa);

