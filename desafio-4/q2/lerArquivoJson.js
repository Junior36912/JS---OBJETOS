console.log("---------------IMPORTANDO O .q2/DADOS.JSON PARA UMA VARIAVEL E ACESSANDO-----------------")

const importado = require('./dados.json');
console.log(importado)


console.log("---------------TESTE DO CHATGPT-----------------")

const fs = require('fs');

// Lendo o arquivo JSON
fs.readFile('./desafio-4/q2/dados.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }
  try {
    // Convertendo o conteúdo do arquivo para um objeto JavaScript
    const jsonData = JSON.parse(data);
    
    // Acessando os dados
    console.log('Produtos:', jsonData.produtos);
    console.log('Usuários:', jsonData.usuarios);
  } catch (err) {
    console.error('Erro ao parsear o JSON:', err);
  }
});
