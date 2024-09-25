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

console.log("------------Log Bruto do Objeto - Pessoa-----------------------")

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

console.log("------------Log Arrumado do Objeto - Pessoa---------------------")

mostrarInfoPessoa(pessoa);

console.log("-----------Log Bruto da Lista - Pessoas----------------------")

const Pessoas = [
    {nome: "João Marcos", idade: 21, solteiro: false},
    {nome: "Raiana Santos", idade: 27, solteiro: true},
    {nome: "Kauã Ferreira", idade: 19, solteiro: true}
]

console.log(Pessoas)

function mostrarListaPessoas(lista) {
    lista.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Solteiro: ${pessoa.solteiro}`);
    });
}
console.log("------------Log Arrumado da Lista - Pessoas-------------------")
mostrarListaPessoas(Pessoas);


console.log("------------Adicionando na Lista - Pessoas-------------------")
Pessoas.push({ nome: "Barbara Santos", idade: 19, solteiro: true });

mostrarListaPessoas(Pessoas);

console.log("------------Filtrando Solteiros-------------------");

function filtrarPorSolteiros(lista, solteiro) {
    return lista.filter(pessoa => pessoa.solteiro === solteiro);
}
        
const solteiros = filtrarPorSolteiros(Pessoas, false);
mostrarListaPessoas(solteiros);