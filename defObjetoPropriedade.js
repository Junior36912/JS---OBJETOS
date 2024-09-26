// Exemplo 1: Criando uma Propriedade Simples
let pessoa = {};
Object.defineProperty(pessoa, 'nome', {
  value: 'José Jackson',
  writable: true,      // Pode alterar o valor
  enumerable: true,    // Vai aparecer em loops
  configurable: true   // Pode ser redefinida ou deletada
});

console.log(pessoa.nome); // José Jackson

pessoa.nome = 'Maria';     // Alterando o valor
console.log(pessoa.nome);  // Maria


// Exemplo 2: Propriedade Somente Leitura
let livro = {};
Object.defineProperty(livro, 'titulo', {
  value: 'JavaScript Avançado',
  writable: false  // O valor não pode ser alterado
});

console.log(livro.titulo);  // JavaScript Avançado

livro.titulo = 'Outro Título';  // Tentando alterar o valor (não vai funcionar)
console.log(livro.titulo);       // JavaScript Avançado


// Exemplo 3: Propriedade Não Enumerável
let carro = {};
Object.defineProperty(carro, 'marca', {
  value: 'Toyota',
  enumerable: false  // Não vai aparecer no loop
});

console.log(carro.marca);  // Toyota

for (let chave in carro) {
  console.log(chave);  // Não mostra 'marca'
}


// Exemplo 4: Usando Getters e Setters
let produto = {
  preco: 100
};

Object.defineProperty(produto, 'precoComDesconto', {
  get: function() {
    return this.preco * 0.9;  // Aplica 10% de desconto
  },
  set: function(valor) {
    this.preco = valor / 0.9;  // Recalcula o preço original
  }
});

console.log(produto.precoComDesconto);  // 90 (10% de desconto)

produto.precoComDesconto = 90;  // Ajusta o valor original
console.log(produto.preco);      // 100


// Exemplo 5: Propriedade Não Configurável
let usuario = {};
Object.defineProperty(usuario, 'id', {
  value: 12345,
  configurable: false  // Não pode ser deletada ou reconfigurada
});

console.log(usuario.id);  // 12345

delete usuario.id;  // Tentando deletar a propriedade (não vai funcionar)
console.log(usuario.id);  // 12345
