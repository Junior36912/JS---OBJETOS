// livro.js
const livro = {
    titulo: "A Biblioteca da meia noite",
    autor: "Matt Haig",
    anoPublicacao: 2021,
    genero: "Distopia"
};

anoAtual = 2024

livro.idadePublicacao = anoAtual - livro.anoPublicacao;

const mostrarDetalhes = `
Título: ${livro.titulo}, 
Autor: ${livro.autor}, 
Ano de Publicação: ${livro.anoPublicacao}, 
Gênero: ${livro.genero}, 
Idade da Publicação: ${livro.idadePublicacao} anos.
`;

console.log("----------------------------------------------")

console.log(mostrarDetalhes);

console.log("----------------------------------------------")

const livro2 = {
    titulo: "Os sete maridos de Evelyn Hugo",
    autor: "TAYLOR JENKINS REID",
    anoPublicacao: 2019,
    genero: "Romance",
    idadePublicacao: new Date().getFullYear() - 2019
};

console.log(`Título: ${livro2["titulo"]}`);
console.log(`Autor: ${livro2["autor"]}`);
console.log(`Ano de Publicação: ${livro2["anoPublicacao"]}`);
console.log(`Gênero: ${livro2["genero"]}`);
console.log(`Idade de Publicação: ${livro2["idadePublicacao"]} anos`);
  
console.log("----------------------------------------------")

