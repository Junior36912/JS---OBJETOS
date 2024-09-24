// livro.js
const livro = {
    titulo: "A Biblioteca da meia noite",
    autor: "Matt Haig",
    anoPublicacao: 2021,
    genero: "Distopia",
    avaliacao: null
};

anoAtual = 2024

livro.idadePublicacao = anoAtual - livro.anoPublicacao;

const mostrarDetalhes = `
Título: ${livro.titulo}, 
Autor: ${livro.autor}, 
Ano de Publicação: ${livro.anoPublicacao}, 
Gênero: ${livro.genero}, 
Idade da Publicação: ${livro.idadePublicacao} anos,
Avaliação: ${livro.avaliacao} estrelas

`;

console.log("------------------Livro 1-------------------")

console.log(mostrarDetalhes);

console.log("------------------Livro 2---------------------")

const livro2 = {
    titulo: "Os sete maridos de Evelyn Hugo",
    autor: "TAYLOR JENKINS REID",
    anoPublicacao: 2019,
    genero: "Romance",
    idadePublicacao: new Date().getFullYear() - 2019,
    avaliacao: null
};

console.log(`Título: ${livro2["titulo"]}`);
console.log(`Autor: ${livro2["autor"]}`);
console.log(`Ano de Publicação: ${livro2["anoPublicacao"]}`);
console.log(`Gênero: ${livro2["genero"]}`);
console.log(`Idade de Publicação: ${livro2["idadePublicacao"]} anos`);
console.log(`Avaliação: ${livro['avaliacao']} estrelas`)
  
console.log("-------------Livro com Avaliação------------------")


// Atribuir avaliação se for null
if (livro.avaliacao === null) {
    livro.avaliacao = 4.5; 
    console.log("Avaliação adicionada: ", livro.avaliacao);
  } else {
    console.log("O livro já possui uma avaliação.");
}
  
console.log(livro);

// Atribuir avaliação se for null - Livro 2
if (livro2.avaliacao === null) {
    livro2.avaliacao = 4.5; 
    console.log("Avaliação adicionada: ", livro.avaliacao);
  } else {
    console.log("O livro já possui uma avaliação.");
  }
console.log(livro2);


console.log("------------------Mudando Genero------------------")

livro.genero = "Aventura Introexpectiva";

console.log(mostrarDetalhes);

console.log("----------Excluindo Avalição do Livro 2-----------")

delete livro2.avaliacao;

console.log(livro2);
