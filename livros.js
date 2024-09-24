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

console.log(mostrarDetalhes);